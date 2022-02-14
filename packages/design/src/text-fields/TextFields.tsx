// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Box, Button, extend, Image, Row, Text } from 'elemental-react';

import InputField from '@elemental-zcash/components/lib/forms/InputField';
import TextInput from '@elemental-zcash/components/lib/forms/TextInput';


const TextFields = ({ components }) => {
  const { theme = 'light' } = components || {};

  return (
    <Box>
      <Box maxWidth={108} mb={20}>
        <InputField label="Label" labelVisible={false} mb={2}>
          {({ label, value }) => <TextInput label={label} value={value} />}
        </InputField>
      </Box>
      <Box maxWidth={108} mb={20}>
        <InputField label="Label" value="Input text" assistiveText="Assistive Text" mb={2}>
          {({ label, value }) => <TextInput label={label} value={value} />}
        </InputField>
      </Box>
      <Box maxWidth={108} mb={20}>
        <InputField label="Label" value="Input text" assistiveText="Assistive Text" mb={2}>
          {({ label, value }) => <TextInput label={label} value={value} isFocused />}
        </InputField>
      </Box>
    </Box>
  );
};

export default TextFields;