import axios from "axios";
import { axiosWithoutAuth } from "../../config";

type fetchSignUpArgs = {
  email: string;
  password: string;
};
export async function fetchSignUp(data: fetchSignUpArgs): Promise<any> {
  try {
    const res = await axios(`${process.env.CLIENT_DOMAIN}/api/sign-up`, {
      method: "POST",
      data,
    });

    return { ok: true, data: res.data };
  } catch (error) {
    console.log(error);
    return { ok: false, data: error };
  }
}
