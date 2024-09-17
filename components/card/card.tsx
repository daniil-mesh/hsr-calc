import Character from '../character/character';
import Cone from '../cone/cone';
import Relic from '../relic/relic';

export default function Card() {
  return (
    <article className="flex flex-col gap-4 items-center">
      <Character />
      <div className="flex gap-3">
        <Cone />
        <div className="flex flex-col gap-3">
          <Relic />
          <Relic />
        </div>
      </div>
    </article>
  );
}
