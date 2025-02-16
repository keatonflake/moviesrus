import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/images/pagenotfound.png";
import { useTitle } from "../hooks/useTitle";
export const PageNotFound = () => {
  const pageTitle = useTitle("Page Not Found");
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            404 oops!
          </p>
          <div className="max-w-lg">
            <img
              className="rounded "
              src={PageNotFoundImage}
              alt="404 page not found"
            />
          </div>
        </div>

        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="text-white w-64 text-xl bg-gradient-to-r from-blue-500 via blue-600 to-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium ">
              Back to Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
