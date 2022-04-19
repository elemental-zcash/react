import React, { Fragment, FunctionComponent } from 'react';
import { Rectangle, Box, Circle, Line, Text, Image, Button, Headline, TextInput as _TextInput } from 'elemental-react';
import { Platform } from 'react-primitives';

// import { TextInput as _TextInput } from '@react-platform/native';

const TextInput: FunctionComponent<{
  label?: string,
  underlined?: boolean,
  placeholderColor?: string,
}> = ({
  label, placeholder, error, value = '', children, isFocused, focusedColor = '#F4B728', placeholderColor, lineColor = '#000000', underlined, ...props
}: any) => (
    <_TextInput
      name="TextInput"
      // height={24}
      fontSize={18}
      fontFamily="secondary"
      mb="6px"
      color={!value ? placeholderColor : undefined}
      // @ts-ignore
      placeholder={!value ? (placeholder || label) : undefined}
      value={value}
      {...props}
    />
    // {underlined && <Line height={1} width="100%" bg={isFocused ? focusedColor : lineColor} />}
);

TextInput.defaultProps = {
  underlined: true,
  placeholderColor: 'greys.8',
};

export default TextInput;
