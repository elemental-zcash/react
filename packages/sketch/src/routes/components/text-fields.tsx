// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Link } from 'react-sketchapp-router';
import { Box, Button, extend, Image, Row, Text } from 'elemental-react';
// import { Svg, G, Path, Rect, Circle } from 'react-primitives-svg';

import { Section, Row } from '@elemental-zcash/style-guide';

import DefaultButton from '@elemental-zcash/components/lib/buttons/DefaultButton';
import OutlinedButton from '@elemental-zcash/components/lib/buttons/OutlinedButton';
import TextButton from '@elemental-zcash/components/lib/buttons/TextButton';
import InputField from '@elemental-zcash/components/lib/forms/InputField';
import TextInput from '@elemental-zcash/components/lib/forms/TextInput';

// import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';
// import OAuth from 'oauth-1.0a';
// import crypto from 'crypto';

// import Section from '../../common/Section';
// import fetch from 'sync-fetch/index';

const subtitleLocales = {
  filled: 'Filled Buttons',
  outlined: 'Outlined Buttons',
  text: 'Text Buttons',
};



const TextFields = ({ components }) => {
  const { theme = 'light' } = components || {};

  const ButtonByShape = {
    filled: DefaultButton,
    outlined: OutlinedButton,
    text: TextButton,
  };

  const buttonPropByTag = {
    hovered: { pseudoState: 'hover' },
    focused: { pseudoState: 'focus' },
    pressed: { pseudoState: 'focus' },
    disabled: { pseudoState: 'disabled' },
  };

  return (
    <Section title="Text Fields" titleColor={theme === 'dark' ? '#fff' : '#000'}>
      <Box p={40}>
        {/* <Headline.H4 mb={2}>
          Key Colors
        </Headline.H4> */}
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
          {/* {['filled', 'outlined', 'text'].map((shape) => {
            const _Button = ButtonByShape[shape];

            return (
              <Box mb={20}>
                <Text fontFamily="Roboto" fontSize={16} fontWeight={500} mb={12}>
                  {subtitleLocales[shape]}
                </Text>
                <Row mx="-8px">
                  {['enabled', 'hovered', 'focused', 'pressed', 'disabled'].map((id) => (
                    <Box mx="8px">
                      <_Button
                        {...(buttonPropByTag[id] || {})}
                        // TODO: Create a proper dark mode API for buttons
                        {...((theme === 'dark' && id === 'enabled' && shape === 'text') && { color: 'white' })}
                      >
                        {id}
                      </_Button>
                    </Box>
                  ))}
                </Row>
              </Box>
            );
          })} */}
        </Box>
      </Box>
    </Section>
  );
};

export default TextFields;