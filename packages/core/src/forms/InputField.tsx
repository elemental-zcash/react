import React from 'react';
import { Rectangle, Box, Circle, Line, Text, Image, Button, Headline, TextInput } from 'elemental-react';

const InputField = ({ label, labelVisible, placeholder, error, assistiveText, value = '', children, ...props }: any) => {
  // TODO: Fix up this horribly hacky conditional statement :D
  const showLabel = labelVisible !== false && (label && value && value.length > 0) || (labelVisible === true);

  return (
    <Box width="100%" flexDirection="column" {...props}>
      <Box mb={2} opacity={showLabel ? 1 : 0}>
        <Text fontSize={12} color="#777777">
          {showLabel ? label : ''}
        </Text>
      </Box>
      <Box>
        {React.isValidElement(children) ? children : children({ label, placeholder, error, value })}
      </Box>
      <Box height={16} mt={1} opacity={(error || assistiveText) ? 1 : 0}>
        <Text fontSize={12} color={error ? '#FF0000' : 'black'}>
          {error || assistiveText}
        </Text>
      </Box>
    </Box>
  );
};
export default InputField;