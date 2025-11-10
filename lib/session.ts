'use cache: private'

import { cookies } from 'next/headers'
import { AUTH_COOKIE_NAME } from '@/constants/auth'
import { GoogleAuthResponse } from '@/types/userSession';

export const getUserSession = async () : Promise<GoogleAuthResponse | null> => {
    const cookieStore = cookies();
    const cookieValue = (await cookieStore).get(AUTH_COOKIE_NAME)?.value
    if (!cookieValue) return null
    return JSON.parse(cookieValue) as GoogleAuthResponse
} 
