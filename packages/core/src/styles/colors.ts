// TODO: Export @elemental-zcash/tokens
// @ts-ignore
import { generatePalette } from 'elemental-color';

const greens = generatePalette('#00e90b');
const yellows = generatePalette('#FFDE03');
const pinks = generatePalette('#dc13e4');

export const families = {
  greys: ['#fafafa', '#f5f5f5', '#eeeeee', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575', '#616161', '#424242', '#212121'],
  greens: [
    greens['50'],
    greens['100'],
    greens['200'],
    greens['300'],
    greens['400'],
    greens['500'],
    greens['600'],
    greens['700'],
    greens['800'],
    greens['900'],
  ],
  blues: [
    '#f2f6ff',
    '#cfdefe',
    '#adc5fc',
    '#6d95f7',
    '#3969ef',
    '#1341e4',
    '#0022d3',
    '#0011bd',
    '#0001a3',
    '#090087',
  ],
  yellows: [
    yellows['50'],
    yellows['100'],
    yellows['200'],
    yellows['300'],
    yellows['400'],
    yellows['500'],
    yellows['600'],
    yellows['700'],
    yellows['800'],
    yellows['900'],
  ],
  reds: [
    '#ffeded',
    '#fdbfbf',
    '#fb9291',
    '#f4403c',
    '#e90900',
    '#d80f00',
    '#c11500',
    '#a21a00',
    '#7c1b00',
    '#541600',
  ],
  pinks: [
    pinks['50'],
    pinks['100'],
    pinks['200'],
    pinks['300'],
    pinks['400'],
    pinks['500'],
    pinks['600'],
    pinks['700'],
    pinks['800'],
    pinks['900'],
  ],
  blacks: ['#000'],
  whites: ['#fff'],
};

const colors = {
  grey: families.greys[5],
  blue: families.blues[5],
  green: families.greens[5],
  purple: families.pinks[9],
  yellow: families.yellows[5],
  orange: 'orange',
  red: families.reds[5],
  pink: families.pinks[5],
  black: '#000000',
  white: '#ffffff',
};

const keys = {
  primary: '#F4B728',
  secondary: '#231F20',
  success: families.greens[4],
  warning: families.yellows[5],
  error: colors.red,
};

// 50, 100, 200, 300, 400, 500, 600, 700, 800, 900


export default {
  families,
  ...families,
  colors,
  ...colors,
  keys,
  ...keys,
  black: '#000',
  white: '#fff',
  blue: '#0561f5',
  green: families.greens[5],
  navy: '#004175',
  red: '#ab000d',
  input: {
    label: '#777777',
  },
  danger: {
    emphasis: '#FF0000',
    text: '#FF0000',
  },
  icons: {
    qrcode_box: '#000',
    copy_box: '#FFBF00',
  },
  btn: {
    bg: 'rgba(244, 183, 40, 1)',
    hoverBg: '#FFCF60',
    focusBg: '#FFDE93',
    disabledBg: '#E4E2E2',
    disabledText: '#7D7D7D',
    text: '#000000',
    textBtn: {
      text: '#000',
      hoveredBg: '#FFF7E5',
      focusedBg: '#FFF1D1',
      pressedBg: '#FFF1D1',
      disabledText: '#7D7D7D',
    }
  }
};
