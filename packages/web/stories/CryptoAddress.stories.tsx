import { CryptoAddressCopy, TruncatedZAddress, TruncatedTAddress, TruncatedUnifiedAddress, theme } from '@elemental-zcash/components';
import { Box, Row, ThemeProvider } from 'elemental-react';



export default {
  component: CryptoAddressCopy,
  title: 'Components/CryptoAddress',
  tags: ['autodocs'],
}

const themeOverride = (Story) => (// @ts-ignore
  <ThemeProvider theme={{
    ...theme,
    colors: {
      ...theme.colors, // @ts-ignore
      icons: {
        qrcode_box: 'white',
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

export const Default = {
  args: {
    address: 'zs1z7rejlpsa98s2rrrfkwmaxu53e4ue0ulcrw0h4x5g8jl04tak0d3mm47vdtahatqrlkngh9sly',
    bg: '#313880',
    color: 'white',
  },
  decorators: [
    themeOverride
  ]
}

export const CopyTruncatedZAddress = {
  component: TruncatedZAddress,
  args: { ...Default.args },
  decorators: [
    themeOverride
  ]
}

export const CopyTruncatedTAddress = {
  component: TruncatedTAddress,
  args: { ...Default.args, address: 't14oHp2v54vfmdgQ3v3SNuQga8JKHTNi2a1' },
  decorators: [
    themeOverride
  ]
}

export const CopyTruncatedUnifiedAddress = {
  component: TruncatedUnifiedAddress,
  args: { ...Default.args, address: 'u17cfedft692aczpny0yk498057jq8chdu4lsme6ucd5j0np479983rrwprl3usnhn0580gdqmckrftr0ge3mt5dts6jfer66sqyhgy4cltz2zhq0mm73s24cypsvctr0e6mzx3wkv72nayhkjrfqt8ka0yemrwuyaxrm03l63rydamxch' },
  decorators: [
    themeOverride
  ]
}
