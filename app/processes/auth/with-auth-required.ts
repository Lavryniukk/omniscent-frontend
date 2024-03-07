import Cookies from "js-cookie";
import { redirect } from "next/navigation";

export default function withAuthRequired(fn: () => React.JSX.Element) {
  const accesToken = Cookies.get("_at");

  console.log(accesToken);

  if (!accesToken) {
    redirect("/sign-up");
  } else return fn;
}
