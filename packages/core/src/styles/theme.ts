/* eslint-disable prefer-destructuring */

import colors from './colors';
import typography from './typography';

const breakpointOrder = [
  '601px',
  '769px',
  '1025px',
];

// const breakpoints = {
//   ...breakpointOrder,
//   mobile: breakpointOrder[0],
//   tablet: breakpointOrder[1],
//   desktop: breakpointOrder[2],
//   m: breakpointOrder[0],
//   t: breakpointOrder[1],
//   d: breakpointOrder[2],
// };

// FIXME: Update styled-system so breakpoint works with object on web
const breakpoints = [
  ...breakpointOrder,
];

const space = [
  0, 4, 8, 16, 32, 64, 128, 256, 512,
];

export default {
  ...typography,
  space,
  colors,

  breakpoints,
  colorSchemes: {
    light: {
      colors: {
        
      },
    },
    dark: {
      colors: {
        btn: {
          text: '#000000',
          textBtn: {
            text: '#fff',
            hoveredBg: '#1A1710',
            focusedBg: '#0D0B08',
            pressedBg: '#0D0B08',
            disabledText: '#B9B9B9',
          }
        },
      }
    }
  },
};