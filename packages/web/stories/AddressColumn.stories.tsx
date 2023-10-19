import { TAddressColumn, ZAddressColumn } from '@elemental-zcash/components';
// import zecPagesData from '@zpublish/components/data/zecpages_feed.json';



export default {
  component: ZAddressColumn,
  title: 'Components/ZAddressColumn',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    address: 'zs1z7rejlpsa98s2rrrfkwmaxu53e4ue0ulcrw0h4x5g8jl04tak0d3mm47vdtahatqrlkngh9sly'
  },
};

export const TransparentAddress = {
  component: TAddressColumn,
  args: {
    address: 't14oHp2v54vfmdgQ3v3SNuQga8JKHTNi2a1'
  }
};
