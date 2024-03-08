import Cookies from "js-cookie";
import { redirect } from "next/navigation";

export default function withAuthRequired(fn: () => React.JSX.Element) {
  const accesToken = Cookies.get("_at");

  // console.log("Checking access token in with-auth-required:", accesToken);

  if (!accesToken) {
    console.log("redirectiing");
    // redirect("/sign-up");
  } else return fn;
}
