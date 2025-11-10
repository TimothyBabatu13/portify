import React from 'react'
import Hero from './hero'
import { getUserSession } from '@/lib/session';

const HeroWrapper = async () => {

    const response = await getUserSession();

  return (
    <Hero
        isAuthenticated={response ? true : false}
    />
  )
}

export default HeroWrapper