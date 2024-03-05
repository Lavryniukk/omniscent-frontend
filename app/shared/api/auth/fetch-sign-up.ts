import { axiosWithoutAuth } from "../../config";

type fetchSignUpArgs = {
  email: string;
  password: string;
};
export async function fetchSignUp(data: fetchSignUpArgs): Promise<any> {
  try {
    const res = await axiosWithoutAuth("/auth/sign-up", {
      method: "POST",
      data,
    });

    return { ok: true, data: res.data };
  } catch (error) {
    return { ok: false, data: error };
  }
}
