import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <Link to="/">
            <a className="hover:underline">Movies-R-Us</a>
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link target="blank" to="https://www.linkedin.com/in/keaton-flake/">
              <a className="hover:underline me-4 md:me-6">LinkedIn</a>
            </Link>
          </li>
          <li>
            <Link target="blank" to="https://github.com/keatonflake">
              <a className="hover:underline me-4 md:me-6">GitHub</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
