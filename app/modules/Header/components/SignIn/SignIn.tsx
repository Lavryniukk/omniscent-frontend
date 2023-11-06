import Link from "next/link";

let SignIn = () => {
  return (
    <Link
      href="/api/auth/login" // Create a link to the authentication login endpoint.
      className="text-text-300 font-inter font-light hover:text-text-50 transition-colors duration-200 mx-auto w-fit px-4 border-secondary border-2 p-1 rounded-lg hover:border-accent-700  bg-secondary-900 flex justify-around space-x-3 items-center"
    >
      Sign in
    </Link>
  );
};

export default SignIn;
