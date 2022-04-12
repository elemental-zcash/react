import React, { ReactNode } from 'react';
import { Row, Text } from 'elemental-react';


const Title = ({ children }: { children: ReactNode }) => (
  <Text color="white" fontFamily="Helvetica Neue" fontSize={24} fontWeight={700}>
    {children}
  </Text>
);

const SyncedStatus = ({ ...props }) => (
  <Row alignItems="center" {...props}>
    <Text fontSize={12} fontWeight={700} color="#8ACC36">Synced</Text>
    <Text fontSize={32} color="#8ACC36" lineHeight={24}>•</Text>
  </Row>
);

const AppBar = ({ children, ...props }: { children: ReactNode }) => (
  <Row height={60} px={20} justifyContent="space-between" alignItems="center" {...props}>
    {children}
  </Row>
);

AppBar.Title = Title;
AppBar.SyncedStatus = SyncedStatus;

export default AppBar;
