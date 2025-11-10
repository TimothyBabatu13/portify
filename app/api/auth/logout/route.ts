import { AUTH_COOKIE_NAME } from "@/constants/auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server"

const environment = process.env.NODE_ENV!;
const REDIRECT_URI = environment === "development" ? `http://localhost:3000/` : `https://portify-silk-eight.vercel.app/`;

export const GET = async () => {
    const cookieStore = await cookies();
    cookieStore.delete(AUTH_COOKIE_NAME);
    return NextResponse.redirect(REDIRECT_URI);
}