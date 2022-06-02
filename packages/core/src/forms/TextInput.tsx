import React, { ComponentProps, forwardRef, Fragment, FunctionComponent } from 'react';
import { Rectangle, Box, Circle, Line, Text, Image, Button, Headline, TextInput as _TextInput } from 'elemental-react';
import { Platform } from 'react-primitives';

// import { TextInput as _TextInput } from '@react-platform/native';

type TextInputProps = {
  label?: string,
  underlined?: boolean,
  placeholderColor?: string,
  placeholder?: string,
  fontSize?: number | string,
  multiline?: boolean, // FIXME: Add multiline support to @react-platform

  // FIXME: Clean up this hardcoded mess, should extract from _TextInput base component
  as?: any,
  style?: Object,
  onChange?: Function,
  rows?: number,
};

const TextInput = forwardRef<ComponentProps<typeof _TextInput>, TextInputProps>(({
  label, placeholder, error, fontSize, value = '', children, isFocused, focusedColor = '#F4B728', placeholderColor, lineColor = '#000000', underlined, ...props
}: any, ref) => (
    <_TextInput
      // @ts-ignore
      forwardedRef={ref}
      name="TextInput"
      // height={24}
      fontSize={fontSize}
      fontFamily="secondary"
      mb="6px"
      color={!value ? placeholderColor : undefined}
      // @ts-ignore
      placeholder={!value ? (placeholder || label) : undefined}
      value={value}
      {...props}
    />
    // {underlined && <Line height={1} width="100%" bg={isFocused ? focusedColor : lineColor} />}
));

TextInput.defaultProps = {
  underlined: true,
  fontSize: 18,
  placeholderColor: 'greys.8',
};

export default TextInput;
