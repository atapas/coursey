import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-600 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/" className="font-semibold text-xl tracking-tight">
        Coursery
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="https://youtube.com/@tapasadhikary"
            target="_blank"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
          >
            My Videos
          </a>
          <a
            href="https://blog.greenroots.info"
            target="_blank"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
          >
            My Blog
          </a>
          <a
            href="https://tapasadhikary.com/talks"
            target="_blank"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white"
          >
            My Talks
          </a>
        </div>
        <div>
          <a
            href="https://youtube.com/@tapasadhikary"
            target="_blank"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
          >
            Join tapaScript
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
