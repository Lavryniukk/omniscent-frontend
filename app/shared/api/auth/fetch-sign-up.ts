import axios from "axios";

type fetchSignUpArgs = {
  email: string;
  password: string;
};

export async function fetchSignUp(data: fetchSignUpArgs): Promise<any> {
  try {
    const res = await axios(`/api/sign-up`, {
      method: "POST",
      data,
    });

    if (!res.data.ok) {
      return { ok: false, data: res.data };
    }

    return { ok: true, data: res.data };
  } catch (error) {
    console.log(error);
    return { ok: false, data: error };
  }
}
