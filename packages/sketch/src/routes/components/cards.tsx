// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Link } from 'react-sketchapp-router';
import { Box, extend, Image, Row, Text } from 'elemental-react';
// import { Svg, G, Path, Rect, Circle } from 'react-primitives-svg';
import ElevatedCard from '@elemental-zcash/components/lib/cards/ElevatedCard';
import OutlinedCard from '@elemental-zcash/components/lib/cards/OutlinedCard';
import FilledCard from '@elemental-zcash/components/lib/cards/FilledCard';
import BaseCard from '@elemental-zcash/components/lib/cards/BaseCard';

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
        <Box>
            <Box p="8px" bg="#eee" borderRadius="4px">
              <Row>
                <Box mx="8px" mb="16px">
                  <ElevatedCard>
                    <Box p="16px">
                      <Text>Elevated Card</Text>
                    </Box>
                  </ElevatedCard>
                </Box>
                <Box mx="8px" mb="16px">
                  <OutlinedCard>
                    <Box p="16px">
                      <Text>Outlined Card</Text>
                    </Box>
                  </OutlinedCard>
                </Box>
              </Row>
              <Row>
                <Box mx="8px" mb="16px">
                  <FilledCard>
                    <Box p="16px">
                      <Text color="white">Filled Card</Text>
                    </Box>
                  </FilledCard>
                </Box>
                <Box mx="8px" mb="16px">
                  <BaseCard>
                    <Box p="16px">
                      <Text>Custom Card</Text>
                    </Box>
                  </BaseCard>
                </Box>
              </Row>
            </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default Components;