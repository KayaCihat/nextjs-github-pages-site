import type { NextConfig } from "next";

/**
 * Next.js configuration used for static exports. When deploying to GitHub Pages
 * or any other static hosting service, Next.js needs to output static HTML
 * files and assets. Setting the `output` property to `'export'` tells
 * Next.js to generate a fully static site during the build step【240263835766205†L465-L504】. GitHub Pages
 * does not support the default `next/image` loader, so the image loader is
 * configured to `'akamai'` with an empty `path` to ensure images load
 * correctly when served from the `out` directory【466501155991259†L319-L327】.
 *
 * The `assetPrefix` and `basePath` options are read from the `BASE_PATH`
 * environment variable if it exists. This allows GitHub Actions to
 * automatically inject the repository name into your build, so your site
 * functions correctly when hosted under a subpath (e.g., `https://<user>.github.io/<repo>/`)【466501155991259†L319-L340】.
 */
const nextConfig: NextConfig = {
  // Export a completely static site on build.
  output: 'export',
  // Configure Next.js image component for static hosting.
  images: {
    loader: 'akamai',
    path: '',
  },
  // Use the BASE_PATH environment variable (if set) to prefix assets and
  // routes. On GitHub Pages, `BASE_PATH` will be set to `/<repo>`.
  assetPrefix: process.env.BASE_PATH || '',
  basePath: process.env.BASE_PATH || '',
  // Disable trailing slash redirects to avoid 404s on GitHub Pages.
  trailingSlash: true,
};

export default nextConfig;
