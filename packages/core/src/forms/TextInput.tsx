import React, { Fragment } from 'react';
import { Rectangle, Box, Circle, Line, Text, Image, Button, Headline, TextInput } from 'elemental-react';
import { Platform } from 'react-primitives';

const TextInput = ({
  label, placeholder, error, value = '', children, isFocused, focusedColor = '#F4B728', lineColor = '#000000', ...props
}: any) => (
  <Box name="TextInputBox" height={24}>
    {/* FIXME: Fix up TextInput in @react-platform/native */}
    <Text
      as={Platform.OS === 'web' ? 'input' : undefined}
      name="TextInput"
      fontSize={18}
      fontFamily="secondary"
      mb="6px"
      color={!value ? 'greys.8' : undefined}
      children={Platform.OS !== 'web' ? (value || placeholder || label) : undefined}
      // @ts-ignore
      placeholder={Platform.OS === 'web' && !value ? (placeholder || label) : undefined}
      value={Platform.OS === 'web' && value}
      {...props}
    />
    <Line height={1} width="100%" bg={isFocused ? focusedColor : lineColor} />
  </Box>
);
export default TextInput;
