import colors from '../styles/colors';
import typography from '../styles/typography';

// @ts-ignore
import { QrCodes, Cards, Buttons, CryptoAddresses, TextFields } from '@elemental-zcash/design';


// @ts-ignore
import { Colors, Typography } from '@elemental-zcash/style-guide';
import GettingStarted from '../routes/components/getting-started';
// import TextFields from '../routes/components/text-fields';
// import Components from './components';

// import GettingStarted from '../docs/getting-started';

const pages = [{
  name: 'Getting Started',
  type: 'introduction',
  width: 1024,
  data: {},
  screens: [{
    name: 'Getting Started',
    component: GettingStarted,
  }]
}, {
  name: 'Components',
  type: 'components',
  data: {},
  style: { flex: 1, display: 'flex', alignItems: 'flex-start', flexDirection: 'row', flexWrap: 'wrap', width: 1440 + 1440 + (70 * 2) },
  screens: [{
    name: 'QR Codes | Light',
    title: 'QR Codes',
    component: QrCodes,
  }, {
    name: 'QR Codes | Dark',
    title: 'QR Codes',
    component: QrCodes,
    bg: '#000000',
    data: { theme: 'dark' }
  }, {
    name: 'Cards | Light',
    title: 'Cards',
    component: Cards,
  }, {
    name: 'Cards | Dark',
    title: 'Cards',
    component: Cards,
    bg: '#000000',
    data: { theme: 'dark' }
  }, {
    name: 'Buttons | Light',
    title: 'Buttons',
    component: Buttons,
  }, {
    name: 'Buttons | Dark',
    title: 'Buttons',
    component: Buttons,
    bg: '#000000',
    data: { theme: 'dark' }
  }, {
    name: 'Text Fields | Light',
    title: 'Text Fields',
    component: TextFields,
  }, {
    name: 'Text Fields | Dark',
    title: 'Text Fields',
    component: TextFields,
    bg: '#000000',
    data: { theme: 'dark' }
  }, {
    name: 'Crypto Addresses | Light',
    title: 'Crypto Addresses',
    component: CryptoAddresses,
  }, {
    name: 'Crypto Addresses | Dark',
    title: 'Crypto Addresses',
    component: CryptoAddresses,
    data: { theme: 'dark' },
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