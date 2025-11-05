'use client';

const Year = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <span>{year}</span>
  )
}

export default Year