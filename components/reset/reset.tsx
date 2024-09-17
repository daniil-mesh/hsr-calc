'use client';

import Button from '../button/button';
import { ButtonView } from '../button/button.props';

export default function Reset() {
  function reset() {
    alert('Reset');
  }

  return (
    <Button view={ButtonView.Secondary} onClick={reset}>
      Reset
    </Button>
  );
}
