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
import { Box, Row, Text, extend, useWindowDimensions } from 'elemental-react';

// @ts-ignore
import _DefaultButton from '@elemental-zcash/components/lib/buttons/DefaultButton';

import _FilledCard from '@elemental-zcash/components/lib/cards/FilledCard';
import { Path, Svg } from 'react-primitives-svg';

const DefaultButton = extend(_DefaultButton, () => ({
  bg: '#F9BB00',
  borderRadius: '50%',
}));
const FilledCard = extend(_FilledCard, () => ({
  bg: '#222328',
  borderRadius: 24,
}));

const HomeTabBarIcon = () => (
  <Svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M1.84631 8.81006L10.8463 1.81006L19.8463 8.81006V19.8101C19.8463 20.3405 19.6356 20.8492 19.2605 21.2243C18.8855 21.5993 18.3767 21.8101 17.8463 21.8101H3.84631C3.31588 21.8101 2.80717 21.5993 2.4321 21.2243C2.05703 20.8492 1.84631 20.3405 1.84631 19.8101V8.81006Z" stroke="#F9BB00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </Svg>
);
const ChartTabIcon = () => (
  <Svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M23 1L13.5 10.5L8.5 5.5L1 13" stroke="#434343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M17 1H23V7" stroke="#434343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </Svg>
);
const ZecTabIcon = () => (
  <Svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M5.57026 17.5372H13.3207V20.6625H8.45759H8.08259V21.0375V23.865H5.61309V21.0375V20.6625H5.23809H0.375V18.2394L8.42726 7.31737L8.86779 6.71984H8.12542H0.375V3.59451H5.23809H5.61309V3.21951V0.375H8.08259V3.21951V3.59451H8.45759H13.3207V6.01762L5.26842 16.9397L4.82789 17.5372H5.57026Z" fill="#434343" stroke="#1B1B1D" stroke-width="0.75"/>
  </Svg>
);

const ClockTabIcon = () => (
  <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#434343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M11 5V11L15 13" stroke="#434343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </Svg>
);

const LinesTabIcon = () => (
  <Svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M21 14H0V11.6667H21V14ZM21 8.16667H0V5.83333H21V8.16667ZM21 2.33333H7V0H21V2.33333Z" fill="#434343"/>
  </Svg>
);


const AppBar = () => (
  <Row height={60} px={20} justifyContent="space-between" alignItems="center">
    <Text color="white" fontFamily="Helvetica Neue" fontSize={24} fontWeight={700}>
      Home
    </Text>
    <Row alignItems="center">
      <Text fontSize={12} fontWeight={700} color="#8ACC36">Synced</Text>
      <Text fontSize={32} color="#8ACC36" lineHeight={24}>•</Text>
    </Row>
  </Row>
);

// @ts-ignore
const MoneyTotalTitle = extend(Text, {
  fontSize: 40,
  fontFamily: 'Helvetica Neue',
  fontWeight: 'bold',
  color: 'white',
});

// @ts-ignore
const MoneyTotalSubtext = extend(Text, {
  fontSize: 16,
  fontWeight: 'bold',
  fontFamily: 'Helvetica Neue',
  color: '#888888',
});

// @ts-ignore
const Subtitle = extend(Text, {
  fontFamily: 'Helvetica Neue',
  textTransform: 'uppercase',
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

const TabBar = () => (
  <Row justifyContent="space-around" height={64} alignItems="center">
    {[
      { icon: HomeTabBarIcon },
      { icon: ChartTabIcon },
      { icon: ZecTabIcon },
      { icon: ClockTabIcon },
      { icon: LinesTabIcon },
    ].map(({ icon: _Icon }) => (
      <Box width={24} height={24} alignItems="center" justifyContent="center">
        <_Icon />
      </Box>
    ))}
  </Row>
);

const HomeScreen = () => {
  const { width } = useWindowDimensions();
  const dollarTotal = 142.84;
  const zecTotal = 1.3892;

  return (
    <Box width="100%" minHeight={720} bg="#1B1B1D">
      <AppBar />
      <Box pt={10} pb={14} alignItems="center">
        <MoneyTotalTitle>
          {`$${dollarTotal}`}
        </MoneyTotalTitle>
        <MoneyTotalSubtext>
          {`${zecTotal} ZEC`}
        </MoneyTotalSubtext>
      </Box>
      <Box alignItems="center" justifyContent="center" px={16} pb={32}>
        {/* @ts-ignore */}
        <DefaultButton center minWidth={Math.min(359, width * 0.8)}>Receive</DefaultButton>
      </Box>
      <Box px={16} pb={30}>
        <Subtitle>
          Services
        </Subtitle>
        {[
          { icon: null, title: 'Exchanges', description: 'Buy, sell, trade Zcash' },
          { icon: null, title: 'Earn', description: 'Earn interest with Zcash' },
          { icon: null, title: 'Cold storage', description: 'Hardware wallets, paper wallets' }
        ].map(({ title, description, icon }) => (
          <Box pb={12}>
            <FilledCard pb={12} p={20}>
              <Row flex={1} alignItems="center">
                <Text color="white" fontSize={32} mr={12}>•</Text>
                <Box>
                  <HomeCardTitle>{title}</HomeCardTitle>
                  <HomeCardDescription>{description}</HomeCardDescription>
                </Box>
                <Box flex={1} />
              </Row>
            </FilledCard>
          </Box>
        ))}
      </Box>
      <Box px={16} pb={30}>
        <Subtitle>
          Resources
        </Subtitle>
        {[
          { icon: null, title: 'Social', description: 'Social media, forums, group chat' },
          { icon: null, title: 'Grants', description: 'ZOMG grant program' },
          { icon: null, title: 'Developers', description: 'Web resources, documentation' }
        ].map(({ title, description, icon }) => (
          <Box pb={12}>
            <FilledCard pb={12} p={20}>
              <Row flex={1} alignItems="center">
                <Text color="white" fontSize={32} mr={12}>•</Text>
                <Box>
                  <HomeCardTitle>{title}</HomeCardTitle>
                  <HomeCardDescription>{description}</HomeCardDescription>
                </Box>
                <Box flex={1} />
              </Row>
            </FilledCard>
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
