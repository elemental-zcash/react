// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Link } from 'react-sketchapp-router';
import { Box, extend, Image, Row, Text } from 'elemental-react';
// import { Svg, G, Path, Rect, Circle } from 'react-primitives-svg';

import { Section, Row } from '@elemental-zcash/style-guide';

import QRCode from '../../core/qrcode/index';
// import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';
// import OAuth from 'oauth-1.0a';
// import crypto from 'crypto';

// import Section from '../../common/Section';
// import fetch from 'sync-fetch/index';




const Components = ({ components }) => {
  const { theme = 'light' } = components || {};

  return (
    <Section title="QR Codes" titleColor={theme === 'dark' ? '#fff' : '#000'}>
      <Box p={40}>
        {/* <Headline.H4 mb={2}>
          Key Colors
        </Headline.H4> */}
        <Box mx="-8px">
          {/* FIXME: Hacky maxWidth because of irregular widths due to the borderWidth */}
          <Row flexWrap="wrap" maxWidth={((286) * 4) + (16 * 4) + 16}>
            {[
              { bg: 'white', stroke: '#000' },
              { bg: '#000000', stroke: '#fff' },
              { bg: 'white', stroke: '#000', borderColor: 'black', borderWidth: '4px' },
              { bg: 'white', stroke: '#7B7B7B', borderColor: 'black', borderWidth: '4px' },

              { bg: '#009BFF', stroke: '#000' },
              { bg: '#000', stroke: '#009BFF' },
              { bg: '#fff', stroke: '#009BFF' },
              { bg: '#fff', stroke: '#009BFF', borderColor: 'black', borderWidth: '4px' },

              { bg: '#F4B728', stroke: '#000' },
              { bg: '#000', stroke: '#F4B728' },
              { bg: '#fff', stroke: '#F4B728' },
              { bg: '#fff', stroke: '#F4B728', borderColor: 'black', borderWidth: '4px' },
            ].map(({ bg, stroke, borderColor, borderWidth }) => (
              <Box mx="8px" mb="16px" bg={bg} p={20} borderRadius="4px" {...{ borderColor, borderWidth }}>
                <QRCode
                  backgroundColor="none"
                  color={stroke}
                  includeMargin={true}
                  size={246}
                  value={`zcash:${0}?amount=0.001&memo=${0}`}
                />
              </Box>
            ))}
          </Row>
        </Box>
      </Box>
    </Section>
  );
};

export default Components;