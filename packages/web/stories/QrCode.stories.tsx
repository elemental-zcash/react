import { Box } from 'elemental-react';
import { QRCode } from '@elemental-zcash/components';
import { Svg, G, Path, Rect, Polygon, Circle } from 'react-primitives-svg';


const subtitleLocales = {
  filled: 'Filled Buttons',
  outlined: 'Outlined Buttons',
  text: 'Text Buttons',
};

const ZcashSvgLogo = () => (
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

const bg = '#fff';

const qrcodeWrapper = (Story) => (// @ts-ignore
  <Box mx="8px" mb="16px" bg={bg} p={20} borderRadius="4px" {...{ borderColor: 0, borderWidth: 0 }}>
    <Story />
  </Box>
);
const qrcodeWithBorderWrapper = (Story) => (// @ts-ignore
  <Box mx="8px" mb="16px" bg={bg} p={20} borderRadius="4px" {...{ borderColor: '4px', borderWidth: '4px' }}>
    <Story />
  </Box>
);

export default {
  component: QRCode,
  title: 'Components/QRCode',
  tags: ['autodocs'],
};

const defaultArgs: any = {
  bg: 'white', stroke: '#000', borderColor: 'black', borderWidth: '4px',
};
export const Default = {
  args: {
    backgroundColor: false,
    enableLinearGradient: Boolean(defaultArgs?.linearGradient),
    linearGradient: defaultArgs.linearGradient,
    color: defaultArgs.stroke,
    size: defaultArgs.tileWidth,
    value: `zcash:${'zs1z7rejlpsa98s2rrrfkwmaxu53e4ue0ulcrw0h4x5g8jl04tak0d3mm47vdtahatqrlkngh9sly'}?amount=0.001&memo=${'123123123'}`,
    logoBackgroundColor: 'white',
    logoBorderRadius: 50,
    svgLogo: defaultArgs.svgLogo,
    svgLogoSize: 48,
  },
};

export const LinearGradient = {
  args: {
    ...Default.args,
    enableLinearGradient: true,
    linearGradient: ['#00F9F9', '#0054FF'],
    svgLogo: <ZcashSvgLogo />
  }
}
export const BorderColor = {
  args: {
    ...Default.args,
    // borderColor: 'black',
    // borderWidth: '4px',
    svgLogo: <ZcashSvgLogo />,
  },
  parameters: {
    docs: {
      source: {
        code: `<Box flexDirection="row">
  <Box mx="8px" mb="16px" bg={bg} p="8px" borderRadius="4px" {...{ borderColor: '4px', borderWidth: '2px' }}>
    <QRCode
      color="#000"
      logoBackgroundColor="white"
      logoBorderRadius={50}
      svgLogo={<ZcashSvgLogo />}
      svgLogoSize={48}
      value="zcash:zs1z7rejlpsa98s2rrrfkwmaxu53e4ue0ulcrw0h4x5g8jl04tak0d3mm47vdtahatqrlkngh9sly?amount=0.001&memo=123123123"
    />
  </Box>
</Box>`
      }
    },
  },
  decorators: [(Story) => (
    <Box flexDirection="row">
      <Box mx="8px" mb="16px" bg={bg} p="8px" borderRadius="4px" {...{ borderColor: '4px', borderWidth: '2px' }}>
        <Story />
      </Box>
      <Box flex={1} />
    </Box>
  )],
}
export const SvgLogo = {
  args: {
    ...Default.args,
    svgLogo: <ZcashSvgLogo />
  }
}
