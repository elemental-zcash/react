import React, { ReactElement, ReactNode } from 'react';
import { Box, extend, Row, Text } from 'elemental-react';

// @ts-ignore
import _DefaultButton from '@elemental-zcash/components/lib/buttons/DefaultButton';
// @ts-ignore
import _FilledCard from '@elemental-zcash/components/lib/cards/FilledCard';
import { MoneyTotalSubtext, MoneyTotalTitle } from './Currency';

const FilledCard = extend(_FilledCard, () => ({
  bg: '#222328',
  borderRadius: 24,
}));

// @ts-ignore
const TitleText = extend(Text, {
  fontSize: 16,
  lineHeight: 19.54,
  fontWeight: 'bold',
  fontFamily: 'Helvetica Neue',
  color: 'white',
  mb: 2,
});

// @ts-ignore
const DescriptionText = extend(Text, {
  fontSize: 16,
  lineHeight: 18,
  fontWeight: 400,
  fontFamily: 'Helvetica Neue',
  color: '#888888',
});




// Temporary icon placeholder
//  icon || <Box width={24} mr={12} height={24}><Text color="white" fontSize={32} mr={12}>•</Text></Box>

const IconContainer = ({ icon: _Icon, fill = '#fff', ...props }: { fill?: string, icon: any }) => (
  <Box mr={16} {...props}>
    <_Icon fill={fill} />
  </Box>
);

const TitleDescription = ({ title, description }: { title: ReactNode, description?: ReactNode }) => (
  <Box>
    <TitleText>{title}</TitleText>
    <DescriptionText>{description}</DescriptionText>
  </Box>
);

const Currency = ({ fiatTotal, zecTotal }: { fiatTotal: ReactNode, zecTotal?: ReactNode }) => (
  <Box alignItems="center">
    <MoneyTotalTitle>
      {`$${fiatTotal}`}
    </MoneyTotalTitle>
    <MoneyTotalSubtext>
      {`${zecTotal} ZEC`}
    </MoneyTotalSubtext>
  </Box>
);

const FilledRow = ({ p, title, description, icon, children, ...props }: { p?: string | number, title?: ReactNode, description?: ReactNode, icon: any, children: ReactNode }) => ( // @ts-ignore
  <FilledCard p={p || 20} flexDirection="row" flex={1} alignItems="center" {...props}>
    {children || (
      <>
        {(icon && (
          <IconContainer icon={icon} />
        ))}
        <TitleDescription title={title} description={description} />
        <Box flex={1} />
      </>
    )}
  </FilledCard>
);


FilledRow.Icon = IconContainer;
FilledRow.TitleDescription = TitleDescription;
FilledRow.TitleText = TitleText;
FilledRow.TitleDescription = TitleDescription;
FilledRow.Currency = Currency;

export default FilledRow;
