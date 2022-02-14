// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Box, extend, Image, Row, Text } from 'elemental-react';
import ElevatedCard from '@elemental-zcash/components/lib/cards/ElevatedCard';
import OutlinedCard from '@elemental-zcash/components/lib/cards/OutlinedCard';
import FilledCard from '@elemental-zcash/components/lib/cards/FilledCard';
import BaseCard from '@elemental-zcash/components/lib/cards/BaseCard';




const Cards = ({ components }) => {
  const { theme = 'light' } = components || {};

  return (
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
  );
};

export default Cards;