// @ts-nocheck
import React from 'react';
import { Box, Button, extend, Image, Text, Row } from 'elemental-react';

import DefaultButton from '@elemental-zcash/components/lib/buttons/DefaultButton';
import OutlinedButton from '@elemental-zcash/components/lib/buttons/OutlinedButton';
import TextButton from '@elemental-zcash/components/lib/buttons/TextButton';


const subtitleLocales = {
  filled: 'Filled Buttons',
  outlined: 'Outlined Buttons',
  text: 'Text Buttons',
};


const Buttons = ({ components }) => {
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
    <Box>
      {['filled', 'outlined', 'text'].map((shape) => {
        const _Button = ButtonByShape[shape];

        return (
          <Box bg="test" mb={20}>
            <Text fontFamily="Roboto" fontSize={16} fontWeight={500} mb={12}>
              {subtitleLocales[shape]}
            </Text>
            <Row mx="-8px" flexWrap="wrap">
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
      })}
    </Box>
  );
};

export default Buttons;
