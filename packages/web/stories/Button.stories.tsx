import { Button } from '@elemental-zcash/components';
import TextButton from '@elemental-zcash/components/lib/buttons/TextButton';
import { Box } from 'elemental-react';



export default {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'Default',
  },
};

export const Outlined = {
  args: {
    outlined: true,
    children: 'Outlined',
  }
}

export const Text = {
  component: TextButton,
  args: {
    bg: 'transparent',
    children: 'Text'
  },
  parameters: {
    docs: {
      source: {
        code: `import TextButton from '@elemental-zcash/components/lib/buttons/TextButton';

<TextButton>
  Text
</TextButton>
`
      }
    },
  },
}
