// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Link } from 'react-sketchapp-router';
import { Box, Button, extend, Image, Row, Text } from 'elemental-react';
// import { Svg, G, Path, Rect, Circle } from 'react-primitives-svg';

import { Section, Row } from '@elemental-zcash/style-guide';

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



const Components = ({ components }) => {
  const { theme = 'light' } = components || {};

  return (
    <Section title="Buttons" titleColor={theme === 'dark' ? '#fff' : '#000'}>
      <Box p={40}>
        {/* <Headline.H4 mb={2}>
          Key Colors
        </Headline.H4> */}
        <Box>
          {['filled', 'outlined', 'text'].map((shape) => (
            <Box mb={20}>
              <Text fontFamily="Roboto" fontSize={16} fontWeight={500} mb={12}>
                {subtitleLocales[shape]}
              </Text>
              <Row mx="-8px">
                {['enabled', 'hovered', 'focused', 'pressed', 'disabled'].map((id) => (
                  <Box mx="8px">
                    <Button>
                      {id}
                    </Button>
                  </Box>
                ))}
              </Row>
            </Box>
          ))}
        </Box>
      </Box>
    </Section>
  );
};

export default Components;