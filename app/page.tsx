'use client';

import Button from '@/components/button/button';
import Card from '@/components/card/card';

export default function Home() {
  function Pamagiti() {
    alert('Tobi pizda!');
  }

  return (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
      <Button onClick={Pamagiti}>Pamagiti!</Button>
    </>
  );
}
