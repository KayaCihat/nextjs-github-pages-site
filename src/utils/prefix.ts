/**
 * Helper to access the base path prefix used when deploying to GitHub Pages.
 *
 * When you deploy a static Next.js site to GitHub Pages, assets and routes
 * must be prefixed with the repository name (e.g., `/my-repo`).  The build
 * process can automatically set the `BASE_PATH` environment variable, and
 * this helper reads that variable to provide the correct prefix at runtime【466501155991259†L319-L455】.  If
 * the variable is undefined (for example, during local development), it
 * returns an empty string.
 */
const prefix: string = process.env.BASE_PATH || '';

export { prefix };