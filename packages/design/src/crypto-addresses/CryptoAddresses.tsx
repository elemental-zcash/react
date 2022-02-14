// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Box, extend, Image, Row, Text } from 'elemental-react';

import OutlinedCard from '@elemental-zcash/components/lib/cards/OutlinedCard';



function chunkSubstr(str, size) {
  const numChunks = Math.ceil(str.length / size)
  const chunks = new Array(numChunks)

  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size)
  }

  return chunks
}

const CryptoAddress = ({ children }) => {
  return (
    <Text fontFamily="Roboto Mono" fontSize={14}>
      {children}
    </Text>
  )
};

const TAddressColumn = ({ children }) => {
  const taddrSplit = chunkSubstr(children, (children.length / 2));

  return (
    <Box>
      {taddrSplit.map((taddrPart, i) => (
        <Row alignItems="center">
          <Text mr={2} fontSize={12} color="primary">
            {i + 1}
          </Text>
          <CryptoAddress>
            {taddrPart}
          </CryptoAddress>
        </Row>
      ))}
    </Box>
  )
}

const ZAddressColumn = ({ children }) => {
  const zaddrSplit = chunkSubstr(children, (children.length / 8));

  const firstHalf = zaddrSplit.slice(0, zaddrSplit.length / 2);
  const secondHalf = zaddrSplit.slice(zaddrSplit.length / 2, zaddrSplit.length);

  return (
    <Box>
      <Row alignItems="center">
        <Box mr={2}>
          {firstHalf.map((zaddrPart, i) => (
            <Row alignItems="center">
              <Text mr={2} fontSize={12} color="primary">
                {i + 1}
              </Text>
              <CryptoAddress>
                {zaddrPart}
              </CryptoAddress>
            </Row>
          ))}
        </Box>
        <Box>
          {secondHalf.map((zaddrPart, i) => (
            <Row alignItems="center">
              <Text mr={2} fontSize={12} color="primary">
                {(zaddrSplit.length / 2) + i + 1}
              </Text>
              <CryptoAddress>
                {zaddrPart}
              </CryptoAddress>
            </Row>
          ))}
        </Box>
      </Row>
    </Box>
  )
}



const CryptoAddresses = ({ components }) => {
  const { theme = 'light' } = components || {};

  return (
    <Box>
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
  );
};

export default CryptoAddresses;