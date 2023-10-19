import { Card, FilledCard, OutlinedCard, ElevatedCard } from '@elemental-zcash/components/lib/cards';
import { Box, Text } from 'elemental-react';


const subtitleLocales = {
  filled: 'Filled Buttons',
  outlined: 'Outlined Buttons',
  text: 'Text Buttons',
};

export default {
  component: Card,
  title: 'Components/Card',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    // label: 'Label',// @ts-ignore
    children: () => <Box p="20px"><Text>Test card</Text></Box>
  },
};
