import { NextRequest, NextResponse } from "next/server"

const environment = process.env.NODE_ENV!;

const REDIRECT_URI = environment === "development" ? `http://localhost:3000/` : `https://portify-silk-eight.vercel.app/`;

export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");
    const redirectedTo = searchParams.get("state");

    const res = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            code: code!,
            client_id: process.env.CLIENT_ID!,
            client_secret: process.env.CLIENT_SECRET!,
            redirect_uri: REDIRECT_URI,
            grant_type: "authorization_code",
    }),});
    const resData = await res.json();

    const userInfo = fetch("https://www.googleapis.com/oauth2/v2/userinfo", 
        {headers: 
            { Authorization: `Bearer ${resData.access_token}` }})
    const response = await (await userInfo).json();

    console.log(resData, 'from')
    console.log(response, 'response')
    // return NextResponse.json({ message: "Google Auth Route", code })
    const urll = redirectedTo ? redirectedTo : '';
    return NextResponse.redirect(`${REDIRECT_URI}${urll}`)
}