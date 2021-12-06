import colors from '../styles/colors';
import typography from '../styles/typography';


import QrCodes from '../routes/components/qr-codes';
import Cards from '../routes/components/cards';
import Buttons from '../routes/components/buttons';

// @ts-ignore
import { Colors, Typography } from '@elemental-zcash/style-guide';
// import Components from './components';

// import GettingStarted from '../docs/getting-started';

const pages = [{
  name: 'Components',
  type: 'components',
  data: {},
  style: { flex: 1, display: 'flex', alignItems: 'flex-start', flexDirection: 'row', flexWrap: 'wrap', width: 1440 + 1440 + (70 * 2) },
  screens: [{
    name: 'QR Codes | Light',
    component: QrCodes,
  }, {
    name: 'QR Codes | Dark',
    component: QrCodes,
    bg: '#000000',
    data: { theme: 'dark' }
  }, {
    name: 'Cards | Light',
    component: Cards,
  }, {
    name: 'Cards | Dark',
    component: Cards,
    bg: '#000000',
    data: { theme: 'dark' }
  }, {
    name: 'Buttons | Light',
    component: Buttons,
  }, {
    name: 'Buttons | Dark',
    component: Buttons,
    bg: '#000000',
    data: { theme: 'dark' }
  }]
}, {
  name: 'Colours',
  type: 'colors',
  data: colors,
  screens: [{
    name: 'Colour Palette',
    component: Colors,
  }],
}, {
  name: 'Typography',
  type: 'typography',
  data: {
    ...typography,
    fontSizeOrder: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'body_small', 'caption', 'overline'],
  },
  screens: [{
    name: 'Typography',
    component: Typography,
  }],
// }, {
//   name: 'Getting Started',
//   type: 'getting-started',
//   screens: [{
//     name: 'Getting Started',
//     component: GettingStarted,
//   }],
}/*, {
  name: 'Components',
  type: 'components',
  data: {},
  screens: [{
    name: 'Components',
    component: Components,
  }],
}*/];

export default pages;