import { axiosWithoutAuth } from "../../config";

type fetchSignUpArgs = {
  email: string;
  password: string;
};
export async function fetchSignIn(data: fetchSignUpArgs): Promise<any> {
  try {
    const res = await axiosWithoutAuth("/api/sign-in", {
      method: "POST",
      data,
    });

    return { ok: true, data: res.data };
  } catch (error) {
    console.log(error);
    return { ok: false, data: error };
  }
}
