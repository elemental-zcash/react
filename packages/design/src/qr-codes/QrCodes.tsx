// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Box, extend, Image, Row, Text, useWindowDimensions } from 'elemental-react';
import { Svg, G, Path, Rect, Polygon, Circle } from 'react-primitives-svg';


import { QRCode } from '@elemental-zcash/components';

const SvgLogo = () => (
  <G id="Components" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-24.000000, -24.000000) scale(2,2)">
      <G id="Icons" transform="translate(-40.000000, -144.000000)" fill-rule="nonzero">
          <G id="Group-5" transform="translate(40.000000, 109.000000)">
              <G id="Group" transform="translate(0.000000, 35.000000)">
                  <Path d="M12,0 C5.38243123,0 0,5.38243123 0,12 C0,18.6175688 5.38243123,24 12,24 C18.6175688,24 24,18.6175688 24,12 C24,5.38243123 18.6175688,0 12,0 Z M12,22.0195209 C6.47382431,22.0195209 1.98047915,17.5261757 1.98047915,12 C1.98047915,6.47382431 6.47382431,1.98047915 12,1.98047915 C17.5261757,1.98047915 22.0195209,6.47382431 22.0195209,12 C22.0195209,17.5261757 17.5261757,22.0195209 12,22.0195209 Z" id="Shape" fill="#231F20"></Path>
                  <Circle id="Oval" fill="#F4B728" cx="12" cy="12" r="9.45519077"></Circle>
                  <Polygon id="Path" fill="#231F20" points="7.71960958 15.7320319 7.71960958 17.5634428 10.9937888 17.5634428 10.9937888 19.5705413 13.0062112 19.5705413 13.0062112 17.5634428 16.2803904 17.5634428 16.2803904 15.1410825 11.2014197 15.1410825 16.2803904 8.25199645 16.2803904 6.42058563 13.0062112 6.42058563 13.0062112 4.418811 10.9937888 4.418811 10.9937888 6.42058563 7.71960958 6.42058563 7.71960958 8.84826974 12.7985803 8.84826974"></Polygon>
              </G>
          </G>
      </G>
  </G>
);


const QrCodes = ({ components, tileWidth = 246 }) => {
  const { theme = 'light' } = components || {};

  return (
    <Box>
      <Box mx="-8px">
        {/* FIXME: Hacky maxWidth because of irregular widths due to the borderWidth */}
        <Row flexWrap="wrap" maxWidth={((286) * 4) + (16 * 4) + 16}>
          {[
            { bg: 'white', stroke: '#000' },
            { bg: '#000000', stroke: '#fff' },
            { bg: 'white', stroke: '#000', borderColor: 'black', borderWidth: '4px' },
            { bg: 'white', stroke: '#7B7B7B', borderColor: 'black', borderWidth: '4px' },

            
            { bg: 'white', linearGradient: ['#00F9F9', '#0054FF'] },
            { bg: '#000000', linearGradient: ['#00F9F9', '#0054FF'] },
            { bg: 'white', linearGradient: ['#00F9F9', '#0054FF'], borderColor: 'black', borderWidth: '4px' },
            { bg: 'white', linearGradient: ['#00F9F9', '#0054FF'], borderColor: 'black', borderWidth: '4px' },
            
            { bg: 'white', stroke: '#000', svgLogo: <SvgLogo /> },
            { bg: '#000000', stroke: '#fff', svgLogo: <SvgLogo /> },
            { bg: 'white', stroke: '#000', borderColor: 'black', borderWidth: '4px', svgLogo: <SvgLogo /> },
            { bg: 'white', stroke: '#7B7B7B', borderColor: 'black', borderWidth: '4px', svgLogo: <SvgLogo /> },

            { bg: '#009BFF', stroke: '#000' },
            { bg: '#000', stroke: '#009BFF' },
            { bg: '#fff', stroke: '#009BFF' },
            { bg: '#fff', stroke: '#009BFF', borderColor: 'black', borderWidth: '4px' },

            { bg: '#F4B728', stroke: '#000' },
            { bg: '#000', stroke: '#F4B728' },
            { bg: '#fff', stroke: '#F4B728' },
            { bg: '#fff', stroke: '#F4B728', borderColor: 'black', borderWidth: '4px' },
          ].map(({ bg, stroke, borderColor, borderWidth, linearGradient, svgLogo }) => (
            <Box mx="8px" mb="16px" bg={bg} p={20} borderRadius="4px" {...{ borderColor, borderWidth }}>
              <QRCode
                backgroundColor={false}
                enableLinearGradient={Boolean(linearGradient)}
                linearGradient={linearGradient}
                color={stroke}
                includeMargin={true}
                size={tileWidth}
                value={`zcash:${0}?amount=0.001&memo=${0}`}
                logoBackgroundColor="white"
                logoBorderRadius={50}
                svgLogo={svgLogo}
                svgLogoSize={48}
              />
            </Box>
          ))}
        </Row>
      </Box>
    </Box>
  );
};

export default QrCodes;