// @ts-nocheck
import React from 'react';
import { Box, Row, Text } from 'elemental-react';

import { CryptoAddressText } from './CryptoAddress';

function chunkSubstr(str: string, size: number) {
  const numChunks = Math.ceil(str.length / size)
  const chunks = new Array(numChunks)

  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size)
  }

  return chunks
}



export const TAddressColumn = ({ address }: { address: string }) => {
  const taddrSplit = chunkSubstr(address, (address.length / 2));

  return (
    <Box>
      {taddrSplit.map((taddrPart, i) => (
        <Row alignItems="center">
          <Text mr={2} fontSize={12} color="primary">
            {i + 1}
          </Text>
          <CryptoAddressText>
            {taddrPart}
          </CryptoAddressText>
        </Row>
      ))}
    </Box>
  )
}

export const ZAddressColumn = ({ address }: { address: string}) => {
  const zaddrSplit = chunkSubstr(address, (address.length / 8));

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
              <CryptoAddressText>
                {zaddrPart}
              </CryptoAddressText>
            </Row>
          ))}
        </Box>
        <Box>
          {secondHalf.map((zaddrPart, i) => (
            <Row alignItems="center">
              <Text mr={2} fontSize={12} color="primary">
                {(zaddrSplit.length / 2) + i + 1}
              </Text>
              <CryptoAddressText>
                {zaddrPart}
              </CryptoAddressText>
            </Row>
          ))}
        </Box>
      </Row>
    </Box>
  )
}