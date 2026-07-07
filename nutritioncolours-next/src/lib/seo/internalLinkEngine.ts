/**
 * Internal Link Governance Engine
 * Given the current route and the topical-authority-map.json:
 * - Returns the correct set of internal links per silo rules
 * - Ensures every supporting page links to its cluster pillar
 * - Limits cross-cluster links to 1-2 per page
 * - Returns related topic suggestions within the same cluster
 */

export interface InternalLinkResult {
  /** Links that MUST appear on this page (pillar link + intra-cluster) */
  requiredLinks: InternalLink[];
  /** Optional cross-cluster links (max 1-2) */
  crossClusterLinks: InternalLink[];
  /** Related topic suggestions within the same cluster */
  relatedTopics: InternalLink[];
  /** The pillar page this route belongs to */
  pillarPage: InternalLink | null;
  /** The cluster this route belongs to */
  clusterId: string | null;
}

export interface InternalLink {
  url: string;
  label: string;
  keyword: string;
  type: 'pillar' | 'cluster' | 'supporting' | 'cross-cluster';
}

interface ClusterChild {
  url: string;
  type: string;
  keyword: string;
}

interface Cluster {
  id: string;
  name: string;
  type: string;
  url: string;
  targetKeyword: string;
  description: string;
  pillar?: string;
  children: (string | ClusterChild)[];
}

interface TopicalAuthorityMap {
  clusters: Cluster[];
  siloRules: {
    description: string;
    rules: string[];
  };
}

let cachedMap: TopicalAuthorityMap | null = null;

/**
 * Load the topical authority map (cached after first fetch).
 */
async function loadTopicalAuthorityMap(): Promise<TopicalAuthorityMap | null> {
  if (cachedMap) return cachedMap;
  try {
    const res = await fetch('/data/topical-authority-map.json');
    const data = await res.json();
    cachedMap = data;
    return data;
  } catch {
    return null;
  }
}

/**
 * Find which cluster a given URL belongs to.
 */
function findClusterForUrl(url: string, clusters: Cluster[]): Cluster | null {
  const normalizedUrl = url.startsWith('/') ? url : `/${url}`;

  for (const cluster of clusters) {
    // Check if this URL is the cluster page itself
    if (cluster.url === normalizedUrl) return cluster;

    // Check children
    for (const child of cluster.children) {
      if (typeof child === 'string') {
        // Child is a cluster ID reference
        const childCluster = clusters.find(c => c.id === child);
        if (childCluster && childCluster.url === normalizedUrl) return childCluster;
        // Check child's children
        for (const grandchild of childCluster?.children || []) {
          if (typeof grandchild !== 'string' && grandchild.url === normalizedUrl) {
            return cluster; // Return parent cluster
          }
        }
      } else if (child.url === normalizedUrl) {
        return cluster;
      }
    }
  }
  return null;
}

/**
 * Find the pillar page for a given cluster.
 */
function findPillarForCluster(cluster: Cluster, clusters: Cluster[]): InternalLink | null {
  if (cluster.type === 'pillar') {
    return { url: cluster.url, label: cluster.name, keyword: cluster.targetKeyword, type: 'pillar' };
  }
  if (cluster.pillar) {
    const pillar = clusters.find(c => c.id === cluster.pillar);
    if (pillar) {
      return { url: pillar.url, label: pillar.name, keyword: pillar.targetKeyword, type: 'pillar' };
    }
  }
  return null;
}

/**
 * Get all supporting pages within a cluster (siblings).
 */
function getClusterSiblings(cluster: Cluster, currentUrl: string): InternalLink[] {
  const links: InternalLink[] = [];
  for (const child of cluster.children) {
    if (typeof child === 'string') {
      // Skip sub-cluster references, they're handled separately
      continue;
    }
    if (child.url !== currentUrl && child.url !== `/${currentUrl}`) {
      links.push({
        url: child.url,
        label: child.url.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || child.url,
        keyword: child.keyword,
        type: 'supporting'
      });
    }
  }
  return links;
}

/**
 * Get the internal link governance result for a given route.
 * @param currentPath - The current route path (e.g., '/herb/cinnamon' or 'herb/cinnamon')
 */
export async function getInternalLinks(currentPath: string): Promise<InternalLinkResult> {
  const map = await loadTopicalAuthorityMap();
  if (!map) {
    return { requiredLinks: [], crossClusterLinks: [], relatedTopics: [], pillarPage: null, clusterId: null };
  }

  const normalizedPath = currentPath.startsWith('/') ? currentPath : `/${currentPath}`;
  const cluster = findClusterForUrl(normalizedPath, map.clusters);

  if (!cluster) {
    // URL not in any cluster — return empty
    return { requiredLinks: [], crossClusterLinks: [], relatedTopics: [], pillarPage: null, clusterId: null };
  }

  const result: InternalLinkResult = {
    requiredLinks: [],
    crossClusterLinks: [],
    relatedTopics: [],
    pillarPage: null,
    clusterId: cluster.id
  };

  // 1. Pillar link (required)
  const pillar = findPillarForCluster(cluster, map.clusters);
  if (pillar && pillar.url !== normalizedPath) {
    result.pillarPage = pillar;
    result.requiredLinks.push(pillar);
  }

  // 2. Intra-cluster siblings (required)
  const siblings = getClusterSiblings(cluster, normalizedPath);
  result.requiredLinks.push(...siblings);

  // 3. Related topics (same cluster, for suggestions)
  result.relatedTopics = siblings.slice(0, 4);

  // 4. Cross-cluster links (limited to 1-2)
  // Find adjacent clusters (clusters in the same pillar family)
  if (cluster.pillar) {
    const parentPillar = map.clusters.find(c => c.id === cluster.pillar);
    if (parentPillar) {
      const siblingClusters = parentPillar.children
        .filter((c): c is string => typeof c === 'string')
        .map(id => map.clusters.find(cl => cl.id === id))
        .filter((c): c is Cluster => !!c && c.id !== cluster.id);

      // Pick 1-2 cross-cluster links from sibling clusters
      for (const sc of siblingClusters.slice(0, 2)) {
        result.crossClusterLinks.push({
          url: sc.url,
          label: sc.name,
          keyword: sc.targetKeyword,
          type: 'cross-cluster'
        });
      }
    }
  }

  return result;
}

/**
 * Synchronous version using pre-loaded data.
 * Call loadTopicalAuthorityMap() first during app init.
 */
export function getInternalLinksSync(currentPath: string): InternalLinkResult {
  if (!cachedMap) {
    return { requiredLinks: [], crossClusterLinks: [], relatedTopics: [], pillarPage: null, clusterId: null };
  }

  const normalizedPath = currentPath.startsWith('/') ? currentPath : `/${currentPath}`;
  const cluster = findClusterForUrl(normalizedPath, cachedMap.clusters);

  if (!cluster) {
    return { requiredLinks: [], crossClusterLinks: [], relatedTopics: [], pillarPage: null, clusterId: null };
  }

  const result: InternalLinkResult = {
    requiredLinks: [],
    crossClusterLinks: [],
    relatedTopics: [],
    pillarPage: null,
    clusterId: cluster.id
  };

  const pillar = findPillarForCluster(cluster, cachedMap.clusters);
  if (pillar && pillar.url !== normalizedPath) {
    result.pillarPage = pillar;
    result.requiredLinks.push(pillar);
  }

  const siblings = getClusterSiblings(cluster, normalizedPath);
  result.requiredLinks.push(...siblings);
  result.relatedTopics = siblings.slice(0, 4);

  if (cluster.pillar) {
    const parentPillar = cachedMap.clusters.find(c => c.id === cluster.pillar);
    if (parentPillar) {
      const siblingClusters = parentPillar.children
        .filter((c): c is string => typeof c === 'string')
        .map(id => cachedMap!.clusters.find(cl => cl.id === id))
        .filter((c): c is Cluster => !!c && c.id !== cluster.id);

      for (const sc of siblingClusters.slice(0, 2)) {
        result.crossClusterLinks.push({
          url: sc.url,
          label: sc.name,
          keyword: sc.targetKeyword,
          type: 'cross-cluster'
        });
      }
    }
  }

  return result;
}

/**
 * Pre-load the topical authority map for synchronous access.
 */
export async function preloadLinkGovernance(): Promise<void> {
  await loadTopicalAuthorityMap();
}
