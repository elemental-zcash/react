// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Link } from 'react-sketchapp-router';
import { Box, extend, Image, Row, Text } from 'elemental-react';
// import { Svg, G, Path, Rect, Circle } from 'react-primitives-svg';
import ElevatedCard from '@elemental-zcash/components/lib/cards/ElevatedCard';
import OutlinedCard from '@elemental-zcash/components/lib/cards/OutlinedCard';
import FilledCard from '@elemental-zcash/components/lib/cards/FilledCard';
import BaseCard from '@elemental-zcash/components/lib/cards/BaseCard';
import { TAddressColumn, ZAddressColumn } from '@elemental-zcash/components';

import { Section, Row } from '@elemental-zcash/style-guide';

// import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';
// import OAuth from 'oauth-1.0a';
// import crypto from 'crypto';

// import Section from '../../common/Section';
// import fetch from 'sync-fetch/index';





const CryptoAddresses = ({ components }) => {
  const { theme = 'light' } = components || {};

  return (
    <Section title="Crypto Addresses" titleColor={theme === 'dark' ? '#fff' : '#000'}>
      <Box p={40}>
        {/* <Headline.H4 mb={2}>
          Key Colors
        </Headline.H4> */}
        <Box p="8px" bg="#eee" borderRadius="4px">
          <Row>
            <Box mx="8px" mb="16px">
              <OutlinedCard>
                <Box p="8px">
                  <TAddressColumn>t1MK6sqJXs4Zokwmh4LPYY3adi7QoqJTTYc</TAddressColumn>
                </Box>
              </OutlinedCard>
            </Box>
            <Box mx="8px" mb="16px">
              <OutlinedCard>
                <Box p="8px">
                  <ZAddressColumn>zs1j29m7zdhhyy2eqrz89l4zhk0angqjh368gqkj2vgdyqmeuultteny36n3qsm47zn8du5sw3ts7f</ZAddressColumn>
                </Box>
              </OutlinedCard>
            </Box>
          </Row>
          {/* <Row>
            <Box mx="8px" mb="16px">
              
            </Box>
            <Box mx="8px" mb="16px">
              
            </Box>
          </Row> */}
        </Box>
      </Box>
    </Section>
  );
};

export default CryptoAddresses;