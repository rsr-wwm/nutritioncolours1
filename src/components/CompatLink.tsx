import React from 'react';

/**
 * CompatLink – simple wrapper around an anchor tag to replace Next.js `Link`.
 * It forwards all props to <a> and ensures client‑side navigation works in Astro.
 */
export default function CompatLink({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
