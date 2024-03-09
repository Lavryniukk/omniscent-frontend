"use server";
import { axiosWithAuth } from "@/app/shared/config";

export default async function isAuthorized() {
    return await axiosWithAuth("/auth");

}
