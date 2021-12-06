// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Link } from 'react-sketchapp-router';
import { Box, extend, Image, Row, Text } from 'elemental-react';
// import { Svg, G, Path, Rect, Circle } from 'react-primitives-svg';

import { Section, Row } from '@elemental-zcash/style-guide';

// import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';
// import OAuth from 'oauth-1.0a';
// import crypto from 'crypto';

// import Section from '../../common/Section';
// import fetch from 'sync-fetch/index';




const Components = ({ components }) => {
  const { theme = 'light' } = components || {};

  return (
    <Section title="Cards" titleColor={theme === 'dark' ? '#fff' : '#000'}>
      <Box p={40}>
        {/* <Headline.H4 mb={2}>
          Key Colors
        </Headline.H4> */}
        <Box mx="-8px">
          {/* FIXME: Hacky maxWidth because of irregular widths due to the borderWidth */}
          <Row flexWrap="wrap" maxWidth={((286) * 4) + (16 * 4) + 16}>
            {[{}].map(({ bg, stroke, borderColor, borderWidth }) => (
              <Box mx="8px" mb="16px" bg={bg} p={20} borderRadius="4px" {...{ borderColor, borderWidth }}>
              </Box>
            ))}
          </Row>
        </Box>
      </Box>
    </Section>
  );
};

export default Components;