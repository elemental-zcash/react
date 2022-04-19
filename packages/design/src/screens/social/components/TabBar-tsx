import React from 'react';
import { Box, Row } from 'elemental-react';

import { ChartTabIcon, ClockTabIcon, HomeTabBarIcon, LinesTabIcon, ZecTabIcon } from './icons';

const TabBar = () => {
  return (
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
}

export default TabBar;
