import { InputField, TextInput } from '@elemental-zcash/components';

const subtitleLocales = {
  filled: 'Filled Buttons',
  outlined: 'Outlined Buttons',
  text: 'Text Buttons',
};

export default {
  component: InputField,
  title: 'Components/InputFields',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Label',// @ts-ignore
    children: ({ label, value }) => <TextInput label={label} value={value} />
  },
};
export const Value = {
  args: {
    value: 'Input text',
    label: 'Label',// @ts-ignore
    children: ({ label, value }) => <TextInput label={label} value={value} />
  },
};
export const IsFocused = {
  args: {
    value: 'Input text',
    label: 'Label',// @ts-ignore
    children: ({ label, value }) => <TextInput label={label} value={value} isFocused />
  },
};
