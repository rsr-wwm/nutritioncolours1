<?php
/**
 * NutritionColours — Server-Side Post-Deployment Hooks.
 * Executed automatically by Composer on Hostinger after git pull completes.
 */

define('HOST', 'nutritioncolours.com');
define('KEY', '8d228f4de13a48e78bc9280d0d8beeb7');

function logMsg($msg) {
    echo "[NC Deploy Hook] " . $msg . "\n";
    file_put_contents(__DIR__ . '/deploy.log', "[" . date('Y-m-d H:i:s') . "] " . $msg . "\n", FILE_APPEND);
}

logMsg("Starting post-deployment server-side hooks...");

// 1. Zero-Second SEO Indexing (IndexNow Ping)
try {
    $sitemapPath = __DIR__ . '/sitemap.xml';
    if (file_exists($sitemapPath)) {
        $sitemapContent = file_get_contents($sitemapPath);
        
        // Find sitemap xml files or direct URLs
        preg_match_all('/<loc>(.*?)<\/loc>/', $sitemapContent, $matches);
        $sitemaps = $matches[1] ?? [];
        
        $urls = [];
        // Add core routes
        $urls[] = "https://" . HOST . "/";
        $urls[] = "https://" . HOST . "/about";
        $urls[] = "https://" . HOST . "/recipes";
        $urls[] = "https://" . HOST . "/clinics";
        $urls[] = "https://" . HOST . "/tools";

        // Read URLs from shards to stay within execution limit
        foreach ($sitemaps as $sitemapUrl) {
            if (strpos($sitemapUrl, 'sitemap-') !== false) {
                $filename = basename($sitemapUrl);
                $shardPath = __DIR__ . '/' . $filename;
                if (file_exists($shardPath)) {
                    $shardContent = file_get_contents($shardPath);
                    preg_match_all('/<loc>(.*?)<\/loc>/', $shardContent, $shardMatches);
                    if (isset($shardMatches[1])) {
                        $urls = array_merge($urls, $shardMatches[1]);
                    }
                }
            }
        }
        
        $urls = array_unique($urls);
        $urls = array_slice($urls, 0, 300); // cap to 300 URLs for performance
        
        if (count($urls) > 0) {
            logMsg("Pinging IndexNow with " . count($urls) . " URLs...");
            $payload = [
                'host' => HOST,
                'key' => KEY,
                'keyLocation' => "https://" . HOST . "/" . KEY . ".txt",
                'urlList' => array_values($urls)
            ];
            
            $ch = curl_init('https://api.indexnow.org/indexnow');
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json; charset=utf-8']);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
            curl_setopt($ch, CURLOPT_TIMEOUT, 10);
            
            $response = curl_exec($ch);
            $statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);
            
            if ($statusCode === 200) {
                logMsg("IndexNow ping succeeded!");
            } else {
                logMsg("IndexNow ping failed with code " . $statusCode . ": " . $response);
            }
        }
    } else {
        logMsg("Warning: sitemap.xml not found at " . $sitemapPath);
    }
} catch (Exception $e) {
    logMsg("Error during IndexNow ping: " . $e->getMessage());
}

// 2. Pre-Warm Cache Sniper
try {
    $warmupUrls = [
        "https://" . HOST . "/",
        "https://" . HOST . "/about",
        "https://" . HOST . "/recipes",
        "https://" . HOST . "/clinics",
        "https://" . HOST . "/tools",
        "https://" . HOST . "/testimonials",
        "https://" . HOST . "/knowledge",
        "https://" . HOST . "/knowledge/diseases",
        "https://" . HOST . "/knowledge/herbs",
        "https://" . HOST . "/knowledge/spices"
    ];
    
    logMsg("Pre-warming LiteSpeed server cache for top 10 landing pages...");
    
    // Non-blocking parallel requests via curl_multi
    $mh = curl_multi_init();
    $handles = [];
    
    foreach ($warmupUrls as $url) {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 5);
        curl_setopt($ch, CURLOPT_USERAGENT, 'NC-Cache-Warmer/1.0');
        curl_multi_add_handle($mh, $ch);
        $handles[] = $ch;
    }
    
    $running = null;
    do {
        curl_multi_exec($mh, $running);
    } while ($running > 0);
    
    foreach ($handles as $ch) {
        curl_multi_remove_handle($mh, $ch);
        curl_close($ch);
    }
    curl_multi_close($mh);
    
    logMsg("Cache pre-warming completed successfully.");
} catch (Exception $e) {
    logMsg("Error pre-warming cache: " . $e->getMessage());
}

logMsg("Post-deployment hooks completed.");
