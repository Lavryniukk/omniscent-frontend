import Cookies from "js-cookie";
import { redirect } from "next/navigation";

const getData = async (query: string) => {
  let response = await fetch(
    `https://omniscient-backend.onrender.com/user/callback?code=${query}`
  );
  let parsedRes = await response.json();
  let token = await parsedRes.access_token;
  Cookies.set("token", "hello");
};
type Props = {
  searchParams: { code: string };
};
let CallbackPage = async (props: Props) => {
  let search = props.searchParams;
  await getData(search.code);
  redirect("/");

  return;
};
export default CallbackPage;
