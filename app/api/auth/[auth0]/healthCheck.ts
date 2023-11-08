"use server";

import { getAccessToken, getSession } from "@auth0/nextjs-auth0";

let api = async () => {
  const getSessio = await getSession();
  const { accessToken } = await getAccessToken();
  console.log(accessToken);
  //   let res = await fetch("http://localhost:8000/api/health", {
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });
  //   let data = await res.json();
  //   return data;
};
export default api;
