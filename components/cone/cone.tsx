import { PlusCircleIcon } from '@heroicons/react/24/outline';
import SelectorButton from '../selector-button/selector-button';

export default function Cone() {
  return (
    <SelectorButton view="cone">
      <PlusCircleIcon className="size-2/5 text-inherit" />
    </SelectorButton>
  );
}
