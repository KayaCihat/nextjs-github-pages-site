// The homepage for the site. This component displays a simple introduction
// and links to relevant resources.  It does not rely on any dynamic data and
// therefore can be pre-rendered as part of the static export.
// Note: Link and useState are intentionally not imported. If you need
// client-side navigation or interactivity, you can import them here.
import styles from './page.module.css';

// Import the base path prefix for assets and links. See src/utils/prefix.ts.
// Importing the prefix helper would allow you to prefix asset URLs with the
// repository name when deploying to GitHub Pages. It's unused in this page but
// remains available for future use.
// import { prefix } from '@/utils/prefix';

export default function Home() {
  // The current year is computed once when the component renders. Because this
  // page is part of a static export, the year will reflect the build time.
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to my Next.js Site</h1>
        <p>
          This site is built with <strong>Next.js</strong> and will be deployed
          to <strong>GitHub&nbsp;Pages</strong>. It demonstrates how to export a
          fully static website and host it for free.
        </p>
        <p>
          Explore the source code and documentation below to learn how you can
          build and deploy your own Next.js applications.
        </p>
        <div className={styles.ctas}>
          {/* Replace USERNAME/REPO with your GitHub account and repository name */}
          <a
            className={styles.primary}
            href="https://github.com/USERNAME/REPO"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
          <a
            className={styles.secondary}
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Next.js
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <span>&copy; {currentYear} My&nbsp;Next.js&nbsp;Site</span>
      </footer>
    </div>
  );
}
