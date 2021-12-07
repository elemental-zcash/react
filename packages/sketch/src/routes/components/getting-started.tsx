// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Link } from 'react-sketchapp-router';
import { Box, extend, Image, Row, Text } from 'elemental-react';
// import { Svg, G, Path, Rect, Circle } from 'react-primitives-svg';

import { Section, Row } from '@elemental-zcash/style-guide';


// TODO: Convert to mdx documentation file

const Subtitle = (props) => (
  <Text fontSize={32} lineHeight={44} bold fontFamily="Roboto Mono" {...props} />
);
const TextBody = (props) => (
  <Text fontSize={24} lineHeight={28} fontFamily="Roboto" {...props} />
);

const GettingStarted = ({ components }) => {
  const { theme = 'light' } = components || {};

  return (
    <Box>
      <Box p={40} p={120} alignItems="center" justifyContent="center" bg="#F4B728">
        <Text bold fontSize={76} lineHeight={80} fontFamily="Roboto Mono" mb={32}>
          Elemental Zcash Design System
        </Text>
        <Text fontSize={24} lineHeight={28} fontFamily="Roboto">
          Get started with the Elemental Zcash Design System. Create Zcash inspired designs and apps such as wallets or tipping apps.
        </Text>
        {/* <Headline.H4 mb={2}>
          Key Colors
        </Headline.H4> */}
        
      </Box>
      <Box px={40} py={56}>
        <Box pb={40}>
          <Subtitle pb={16}>
            Getting Started
          </Subtitle>
          <TextBody>
            {`The Elemental Zcash Design System is a design specification and component library for designing and building apps for the Zcash ecosystem, or for adding Zcash support to existing apps. 

Documentation can be found at elementalzcash.com`}
          </TextBody>
        </Box>
        <Box pb={40}>
          <Subtitle pb={16}>
            Getting Started
          </Subtitle>
          <TextBody>
            {`Cross-platform React.js and Sketch component library for Elemental Zcash. These include themeable and customisable components such as text, buttons, text inputs, etc. In the future will be expanded to other platforms like SwiftUI and Jetpack Compose.

Example usage:
<Text color=“greens.50” bold>Click here</Button>`}
          </TextBody>
        </Box>
        <Box pb={40}>
          <Subtitle pb={16}>
            Locales
          </Subtitle>
          <TextBody>
            {`Zcash specific language and translations for Zcash wallets or apps.`}
          </TextBody>
        </Box>
        <Box pb={40}>
          <Subtitle pb={16}>
            Typography
          </Subtitle>
          <TextBody>
            {`Typography tokens and styles for Elemental Zcash apps. Interoperable with the component libraries.`}
          </TextBody>
        </Box>
        <Box pb={40}>
          <Subtitle pb={16}>
            Colors
          </Subtitle>
          <TextBody>
            {`Color tokens and styles for Elemental Zcash apps with JSON and hex values, together with palette generation from core colors. Interoperable with the component libraries.`}
          </TextBody>
        </Box>
        <Box>
          <Subtitle pb={16}>
            Icons
          </Subtitle>
          <TextBody>
            {`Typography tokens and styles for Elemental Zcash apps. Interoperable with the component libraries.

Zcash specific icons must be used in accordance with the Zcash Trademark Policy.`}
          </TextBody>
        </Box>
      </Box>
    </Box>
  );
};

export default GettingStarted;