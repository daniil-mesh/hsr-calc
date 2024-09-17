export default function Header() {
  return (
    <header className="px-4 py-3 bg-fill-300 dark:bg-fill-900">
      <div className="container flex mx-auto">
        <h2 className="sm:text-lg tracking-wider uppercase text-accent-700 dark:text-accent-500">
          Header
        </h2>
        <nav className="grow">
          <ul className="sm:text-lg flex gap-10 justify-end text-primary-600 dark:text-primary-500 cursor-pointer">
            <li className="hover:text-opacity-90 hover:scale-105 transition-all">
              Menu
            </li>
            <li className="hover:text-opacity-90 hover:scale-105 transition-all">
              List
            </li>
            <li className="hover:text-opacity-90 hover:scale-105 transition-all">
              About
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
