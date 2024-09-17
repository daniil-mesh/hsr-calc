import { PlusCircleIcon } from '@heroicons/react/24/outline';
import SelectorButton from '../selector-button/selector-button';

export default function Relic() {
  return (
    <SelectorButton view="relic">
      <PlusCircleIcon className="size-2/3 text-inherit" />
    </SelectorButton>
  );
}
