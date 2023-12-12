"use server";

import { Session, getSession, updateSession } from "@auth0/nextjs-auth0";
import { config } from "dotenv";
config();
import axios from "axios";
import { auth } from "@clerk/nextjs";
if (!process.env.SERVER_URL) {
  console.log("This is your serverurl:", process.env.SERVER_URL);
  throw new Error("Troubles with you SERVER_URL");
}

// let getToken = async () => {
//   try {
//     var options = {
//       method: "POST",
//       url: "https://veritech.eu.auth0.com/oauth/token",
//       headers: { "content-type": "application/x-www-form-urlencoded" },
//       data: {
//         grant_type: "client_credentials",
//         client_id: process.env.AUTH0_CLIENT_ID,
//         client_secret: process.env.AUTH0_CLIENT_SECRET,
//         audience: process.env.AUTH0_AUDIENCE,
//         scope: "offline_access openid profile email", // Added offline_access scope here
//       },
//     };
//     return await axios(options);
//   } catch (e) {
//     console.log(e);
//     return { data: undefined };
//   }
// };

// async function refreshAccessToken(
//   refreshToken: string | undefined,
//   session: Session | undefined | null
// ): Promise<string> {
//   try {
//     const response = await axios.post(
//       `${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`,
//       {
//         grant_type: "refresh_token",
//         client_id: process.env.AUTH0_CLIENT_ID,
//         refresh_token: refreshToken,
//         client_secret: process.env.AUTH0_CLIENT_SECRET,
//       }
//     );
//     if (session && response.data.access_token) {
//       session.accessToken = response.data.access_token;
//       await updateSession(session);
//     }
//     return response.data.access_token;
//   } catch (error) {
//     // console.error("Error refreshing access token:", error);
//     // throw error; //
//     return "";
//   }
// }

export const axiosWithAuth = axios.create({
  baseURL: `${process.env.SERVER_URL}/api`,
});

axiosWithAuth.interceptors.request.use(async (config) => {
  try {
    // const session = await getSession();
    const { getToken } = auth();
    const accessToken = await getToken();
    console.log(accessToken);
    // let accessToken = session?.accessToken;
    // if (isTokenExpired(session)) {
    //   accessToken = await refreshAccessToken(session?.refreshToken, session);
    // }

    config.headers.Authorization = `Bearer ${accessToken}`;
  } catch (error) {
    console.error("Error with token handling:", error);
  }

  return config;
});

// Utility function to check if the token is expired
function isTokenExpired(session: Session | undefined | null): boolean {
  if (!session || !session.accessTokenExpiresAt) {
    return true; // No valid session or expiration information, handle as expired
  }

  const currentTime = Date.now();
  const expiresAtMs = session.accessTokenExpiresAt * 1000;
  // If the current time is greater than the expiration time, the token is expired
  return currentTime > expiresAtMs;
}
