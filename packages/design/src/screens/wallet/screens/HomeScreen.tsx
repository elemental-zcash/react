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
import _DefaultButton from '@elemental-zcash/components/lib/buttons/DefaultButton';
import _FilledCard from '@elemental-zcash/components/lib/cards/FilledCard';


import { ColdStorageIcon, DeveloperIcon, EarnIcon, ExchangeIcon, GrantIcon, SocialIcon, ZecTabIcon } from '../components/icons';
import TabBar from '../components/TabBar';
import AppBar from '../components/AppBar';
import { MoneyTotalSubtext, MoneyTotalTitle } from '../components/Currency';
import FilledRow from '../components/FilledRow';

const DefaultButton = extend(_DefaultButton, () => ({
  letterSpacing: 0,
  bg: '#F9BB00',
  borderRadius: '50%',
  uppercase: false,
}));
const FilledCard = extend(_FilledCard, () => ({
  bg: '#222328',
  borderRadius: 24,
}));





// @ts-ignore
const Subtitle = extend(Text, {
  fontFamily: 'Helvetica Neue',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  color: '#888888',
  fontSize: 12,
  mb: 12,
});

const HomeCardTitle = extend(Text, {
  fontSize: 16,
  lineHeight: 19.54,
  fontWeight: 'bold',
  fontFamily: 'Helvetica Neue',
  color: 'white',
  mb: 2,
});
const HomeCardDescription = extend(Text, {
  fontSize: 16,
  lineHeight: 18,
  fontWeight: 400,
  fontFamily: 'Helvetica Neue',
  color: '#888888',
});

const HomeScreen = () => {
  const { width } = useWindowDimensions();
  const dollarTotal = 142.84;
  const zecTotal = 1.3892;

  return (
    <Box width="100%" minHeight={720} bg="#1B1B1D">
      <AppBar>
        <AppBar.Title>
          Home
        </AppBar.Title>
        <AppBar.SyncedStatus />
      </AppBar>
      <Box pt={10} pb={14} alignItems="center">
        <MoneyTotalTitle fontSize={40} lineHeight={48}>
          {`$${dollarTotal}`}
        </MoneyTotalTitle>
        <MoneyTotalSubtext bold>
          {`${zecTotal} ZEC`}
        </MoneyTotalSubtext>
      </Box>
      <Box alignItems="center" justifyContent="center" px={16} pb={32}>
        {/* @ts-ignore */}
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
            {/* <FilledCard p={20}>
              <Row flex={1} alignItems="center">
                {(_Icon && (
                  <Box mr={16}>
                    <_Icon fill="#fff" />
                  </Box>
                )) || <Text color="white" fontSize={32} mr={12}>•</Text>}
                <Box>
                  <HomeCardTitle>{title}</HomeCardTitle>
                  <HomeCardDescription>{description}</HomeCardDescription>
                </Box>
                <Box flex={1} />
              </Row>
            </FilledCard> */}
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

      <TabBar />
      {/* <AppBar>
        <Link to="/navigation">
          <AppBar.MenuIcon />
        </Link>
        <AppBar.Title />
        <AppBar.Fill />
      </AppBar> */}
    </Box>
  );
};

export default HomeScreen;
