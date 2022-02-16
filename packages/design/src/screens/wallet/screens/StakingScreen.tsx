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


import { ColdStorageIcon, DeveloperIcon, EarnIcon, ExchangeIcon, GrantIcon, SocialIcon } from '../components/icons';
import TabBar from '../components/TabBar';
import AppBar from '../components/AppBar';
import FilledRow from '../components/FilledRow';

const DefaultButton = extend(_DefaultButton, () => ({
  bg: '#F9BB00',
  borderRadius: '50%',
}));






// @ts-ignore
const Subtitle = extend(Text, {
  fontFamily: 'Helvetica Neue',
  textTransform: 'uppercase',
  color: '#888888',
  fontWeight: 'bold',
  fontSize: 12,
  mb: 12,
});

const currencySymbolLocales = {
  USD: '$',
};

const HomeScreen = () => {
  const { width } = useWindowDimensions();
  const fiatTotal = 112.41;
  const zecTotal = 1.1525;

  const currency = 'USD';

  const earningsByDay = [
    {
      date: 'Dec 7, 2021',
      time: '11:29 PM',
      fiatTotal: 2.07,
      zecTotal: 0.0251,
    },
    {
      date: 'Nov 8, 2021',
      time: '3:11 AM',
      fiatTotal: 2.07,
      zecTotal: 0.0251,
    },
    {
      date: 'Oct 10, 2021',
      time: '5:22 AM',
      fiatTotal: 2.07,
      zecTotal: 0.0251,
    },
    {
      date: 'Sep 9, 2021',
      time: '7:19 PM',
      fiatTotal: 2.07,
      zecTotal: 0.0251,
    },
  ];

  const totalEarned = earningsByDay.reduce((acc, earnings) => {
    acc.fiat += earnings.fiatTotal;
    acc.zec += earnings.zecTotal;

    return acc;
  }, { fiat: 0, zec: 0 });

  return (
    <Box width="100%" minHeight={720} bg="#1B1B1D">
      <AppBar>
        <AppBar.Title>
          Staking
        </AppBar.Title>
        <AppBar.SyncedStatus />
      </AppBar>
      {/* <Box px={[16, 40]}> */}
      <Box px={16} pt={12}>
        <Subtitle>
          Balance
        </Subtitle>
        <FilledRow p={32} justifyContent="center">
          <FilledRow.Currency fiatTotal={fiatTotal} zecTotal={zecTotal} />
        </FilledRow>
      </Box>
      <Box px={16} pt={32}>
        <Subtitle fontSize={16} lineHeight={20}>
          Earned
          <Text color="white" bold>{` ${currencySymbolLocales[currency]}${totalEarned.fiat} `}</Text>
          <Text color="white" fontWeight={400}>{`(${totalEarned.zec} ZEC)`}</Text>
        </Subtitle>
        {earningsByDay.map(({ fiatTotal, zecTotal, date, time }) => (
          <Box mb={12}>
            <FilledRow justifyContent="flex-start" px={24}>
              <FilledRow.TitleDescription
                title={(
                  <FilledRow.TitleText bold>
                    {`${currencySymbolLocales[currency]}${fiatTotal} `}
                    <FilledRow.TitleText fontWeight={400}>
                      {`(${zecTotal} ZEC)`}
                    </FilledRow.TitleText>
                  </FilledRow.TitleText>
                )}
                description={`${date} • ${time}`}
              />
            </FilledRow>
          </Box>
        ))}
      </Box>
      <Box height={120} />
      <Box px={16} alignItems="center">
        <DefaultButton px={16} maxWidth={360} width="100%">
          <Button.Text fontFamily="Helvetica Neue" color="black">Stake</Button.Text>
        </DefaultButton>
      </Box>
      {/* <Box px={16} pb={30}>
        <Subtitle>
          Services
        </Subtitle>
        {[
          { icon: ExchangeIcon, title: 'Exchanges', description: 'Buy, sell, trade Zcash' },
          { icon: EarnIcon, title: 'Earn', description: 'Earn interest with Zcash' },
          { icon: ColdStorageIcon, title: 'Cold storage', description: 'Hardware wallets, paper wallets' }
        ].map(({ title, description, icon: _Icon }) => (
          <Box mb={12}>
            <FilledRow>
              <FilledRow.Icon icon={_Icon} />
              <FilledRow.TitleDescription title={title} description={description} />
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
            </FilledRow>
          </Box>
        ))}
      </Box> */}
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
