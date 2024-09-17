import Calculate from '@/components/calculate/calculate';
import Card from '@/components/card/card';
import Reset from '@/components/reset/reset';

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16 lg:gap-x-16 xl:gap-x-20">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex gap-6 mt-6">
        <Calculate />
        <Reset />
      </div>
    </>
  );
}
