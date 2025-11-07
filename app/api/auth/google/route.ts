import { NextRequest, NextResponse } from "next/server";


const GOOGLE_CLIENT_ID = process.env.CLIENT_ID!;
const environment = process.env.NODE_ENV!;

const REDIRECT_URI = environment === "development" ? `http://localhost:3000/api/auth/google/callback` : `https://portify-silk-eight.vercel.app/api/auth/google/callback`;

export async function GET(req: NextRequest) {

    const { searchParams } = new URL(req.url);
    const state = searchParams.get("redirect");

    const url = new URL("https://accounts.google.com/o/oauth2/v2/auth");
    url.searchParams.set("client_id", GOOGLE_CLIENT_ID);
    url.searchParams.set("redirect_uri", REDIRECT_URI);
    url.searchParams.set("response_type", "code");
    url.searchParams.set("scope", "openid email profile");
    url.searchParams.set("access_type", "offline");
    state && url.searchParams.set("state", state);

    const response = NextResponse.redirect(url.toString());
    return response;
}
