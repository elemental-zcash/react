import { Icon, theme } from '@elemental-zcash/components';
// import zecPagesData from '@zpublish/components/data/zecpages_feed.json';
import { Svg, G, Path, Rect, Polygon, Circle } from 'react-primitives-svg';
import { CopyBoxIcon, QrcodeBoxIcon } from '@elemental-zcash/icons';
import { Box, Row, ThemeProvider } from 'elemental-react';


const themeOverride = (Story) => (// @ts-ignore
  <ThemeProvider theme={{
    ...theme,
    colors: {
      ...theme.colors, // @ts-ignore
      icons: {
        qrcode_box: 'black',
        copy_box: '#FFBF00',
      }
    }}}>
    <Row>
      <Story />
      <Box flex={1} />
    </Row>
    <Box flex={1} />
  </ThemeProvider>
)


export default {
  component: Icon,
  title: 'Components/Icon',
  tags: ['autodocs'],
  decorators: [themeOverride]
};

export const Default = {
  args: {
    icon: CopyBoxIcon,
    color: 'icons.copy_box',
  },
};

export const QrcodeIcon ={
  args: {
    icon: QrcodeBoxIcon,
    color: 'icons.qrcode_box',
  }
}

