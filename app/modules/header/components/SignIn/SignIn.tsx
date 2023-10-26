import Link from "next/link";

let SignIn = () => {
  return (
    <div className="mx-auto">
      <div className="mx-auto w-fit px-4 border-secondary border-2 p-1 rounded-xl hover:border-accent-700 transition-colors duration-200 bg-secondary-900 flex justify-around space-x-3 items-center">
        <Link
          href="/api/auth/login" // Create a link to the authentication login endpoint.
          className="text-text-300 font-inter font-light hover:text-text-50 transition-colors duration-200"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
