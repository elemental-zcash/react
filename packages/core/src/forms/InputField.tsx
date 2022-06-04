import React from 'react';
import { Rectangle, Box, Circle, Line, Text, Image, Button, Headline, TextInput } from 'elemental-react';

const InputField = ({ label, labelVisible, placeholder, error, assistiveText, value = '', children, ...props }: any) => {
  // TODO: Fix up this horribly hacky conditional statement :D
  const showLabel = (labelVisible !== false && (label && value && String(value).length > 0)) || (labelVisible === true);

  return (
    <Box width="100%" flexDirection="column" {...props}>
      {labelVisible !== false && (// @ts-ignore
        <Box mb={2} opacity={showLabel ? 1 : 0} style={{ opacity: showLabel ? 1 : 0 }}>
          <Text fontSize={14} color="input.label">{/* FIXME: Find a way to remove the . without height being 0 on web. Shouldn't be visible with opacity 0 */}
            {showLabel ? label : '.'}
          </Text>
        </Box>
      )}
      <Box>
        {React.isValidElement(children) ? children : children({ label, placeholder, error, value })}
      </Box>
      <Box height={16} mt={1} opacity={(error || assistiveText) ? 1 : 0}>
        <Text fontSize={12} color={error ? 'danger.text' : 'black'}>
          {error || assistiveText}
        </Text>
      </Box>
    </Box>
  );
};

export default InputField;
