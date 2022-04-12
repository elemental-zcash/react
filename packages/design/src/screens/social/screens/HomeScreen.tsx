/* Credit – https://forum.zcashcommunity.com/t/zcash-wallet-design-kit/40869 */
/* Designed by Ziga */
/* License: */
/*
[quote="Ziga, post:1, topic:40869"]
These designs are open source. Feel free to use them in your apps if you’d like!
[/quote]
*/

// @ts-nocheck
import React from 'react';
import { Box, Row, Text, extend, useWindowDimensions, Button } from 'elemental-react';

// @ts-ignore
import { DefaultButton } from '@elemental-zcash/components/lib/buttons';
import { FilledCard } from '@elemental-zcash/components/lib/cards';

import { Icon, TextInput, InputField } from '@elemental-zcash/components';

import { CryptoAddressCopy, QRCodeIcon } from '@elemental-zcash/components/lib/addresses/CryptoAddress';

import { CopyBoxIcon } from '@elemental-zcash/icons';

// import { TextInput } from '@react-platform/native';
// import { Text as CoreText } from '@react-platform/core';


import { ColdStorageIcon, DeveloperIcon, EarnIcon, ExchangeIcon, GrantIcon, SocialIcon, ZecTabIcon } from '../components/icons';
import TabBar from '../components/TabBar';
import AppBar from '../components/AppBar';
import { MoneyTotalSubtext, MoneyTotalTitle } from '../components/Currency';
import FilledRow from '../components/FilledRow';




// #53a

// const TRUNCATE_END_LENGTH = 6;

// const TruncatedCryptoAddress = ({ address }) => {
//   const firstText = address.substring(0, address.length - TRUNCATE_END_LENGTH);
//   const lastText = address.substring(address.length - TRUNCATE_END_LENGTH, address.length);
//   return (
//     <Row flexWrap="nowrap" overflow="hidden">
//       <Text style={{ flexShrink: 1 }} maxHeight={20} lineHeight={20}>{firstText}</Text>
//       <Text maxHeight={20} lineHeight={20}>...</Text>
//       <Text maxHeight={20} lineHeight={20}>{lastText}</Text>
//     </Row>
//   );
// };

// const TruncatedCryptoAddress = ({ ...props }) => <TruncatedCryptoAddress {...props} />;
// const TruncatedTAddress = ({ ...props }) => <TruncatedCryptoAddress {...props} />;
// const TruncatedUnifiedAddress = ({ ...props }) => <TruncatedCryptoAddress {...props} />;

const HomeScreen = () => {
  const { width } = useWindowDimensions();

  return (
    <Box width="100%" minHeight={720} bg="#F5F3ED">
      <AppBar bg="black">
        <AppBar.Title>
          SOCIAL APP
        </AppBar.Title>
        {/* <AppBar.SyncedStatus /> */}
      </AppBar>
     
      {/* <Box pt={10} pb={14} alignItems="center">
        <MoneyTotalTitle fontSize={40} lineHeight={48}>
          {`$${dollarTotal}`}
        </MoneyTotalTitle>
        <MoneyTotalSubtext bold>
          {`${zecTotal} ZEC`}
        </MoneyTotalSubtext>
      </Box>
      <Box alignItems="center" justifyContent="center" px={16} pb={32}>
        <DefaultButton px={16} width={Math.min(359, width * 0.8)}>
          <Button.Text>Test</Button.Text>
        </DefaultButton>
      </Box>
      <Box px={16} pb={30}>
        <Subtitle>
          Services
        </Subtitle>
        {[
          { icon: ExchangeIcon, title: 'Exchanges', description: 'Buy, sell, trade Zcash' },
          { icon: EarnIcon, title: 'Earn', description: 'Earn interest with Zcash' },
          { icon: ColdStorageIcon, title: 'Cold storage', description: 'Hardware wallets, paper wallets' }
        ].map(({ title, description, icon: _Icon }) => (
          <Box mb={12}>
            <FilledRow justifyContent="center">
              <FilledRow.Icon icon={_Icon} />
              <FilledRow.TitleDescription title={title} description={description} />
              <Box flex={1} />
            </FilledRow>
          </Box>
        ))}
      </Box>
      <Box px={16} pb={30}>
        <Subtitle>
          Resources
        </Subtitle>
        {[
          { icon: SocialIcon, title: 'Social', description: 'Social media, forums, group chat' },
          { icon: GrantIcon, title: 'Grants', description: 'ZOMG grant program' },
          { icon: DeveloperIcon, title: 'Developers', description: 'Web resources, documentation' }
        ].map(({ title, description, icon: _Icon }) => (
          <Box mb={12}>
            <FilledRow>
              <FilledRow.Icon icon={_Icon} />
              <FilledRow.TitleDescription title={title} description={description} />
              <Box flex={1} />
            </FilledRow>
          </Box>
        ))}
      </Box>

      <TabBar /> */}
    </Box>
  );
};

export default HomeScreen;
