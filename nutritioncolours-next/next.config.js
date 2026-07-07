module.exports = {
  // Enable static HTML export for Hostinger deployment
  output: 'export',
  // Allow image optimization to be skipped (Hostinger may not support next/image)
  images: {
    unoptimized: true,
  },
  // Ensure routes end with trailing slash for static files
  trailingSlash: true,
  // Future Webpack 5 handling (optional)
  future: {
    webpack5: true,
  },
};
