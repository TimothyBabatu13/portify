import { AUTH_COOKIE_NAME, TOKEN_EXPIRES_IN } from "@/constants/auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server"

const environment = process.env.NODE_ENV!;

const REDIRECT_URI = environment === "development" ? `http://localhost:3000/api/auth/google/callback` : `https://portify-silk-eight.vercel.app/api/auth/google/callback`;

const REDIRECT_URL = environment === "development" ? `http://localhost:3000/` : `https://portify-silk-eight.vercel.app/`;

export const GET = async (req: NextRequest) => {
    
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");
    const cookieStore = cookies();

    if(!code) return NextResponse.redirect('/');

    const redirectedTo = searchParams.get("state");

    try {
        const res = await fetch("https://oauth2.googleapis.com/token", {
            method: "POST",
            headers: { 
                "Content-Type": "application/x-www-form-urlencoded" 
            },
            body: new URLSearchParams({
                code: code!,
                client_id: process.env.CLIENT_ID!,
                client_secret: process.env.CLIENT_SECRET!,
                redirect_uri: REDIRECT_URI,
                grant_type: "authorization_code",
        }),});
        const resData = await res.json();

        if(resData.error) {
            return NextResponse.redirect('/')
        }

        const userInfo = fetch("https://www.googleapis.com/oauth2/v2/userinfo", 
            {
                headers: { 
                    Authorization: `Bearer ${resData.access_token}` 
                }
            })
        
        const response = await (await userInfo).json();

    
        const data =  {
            ...response,
            access_token: resData.access_token,
            expires_in: resData.expires_in,
        };

        (await cookieStore).set({
            name: AUTH_COOKIE_NAME,
            value: JSON.stringify(data),
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: TOKEN_EXPIRES_IN,
            path: "/",
        });

        return NextResponse.redirect(`${REDIRECT_URL}dashboard`);
    } catch (error) {
        return NextResponse.redirect('/')
    }
}