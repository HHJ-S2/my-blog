export default function Footer() {
  return (
    <footer>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li className="flex items-center justify-center">
          <a
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <p className="h-7 text-sm underline">rss</p>
          </a>
        </li>
      </ul>
    </footer>
  );
}
