import React from 'react';
import { Link } from 'gatsby';
import { Svg, Path } from 'react-primitives-svg';

import { Box, Text, Row, extend, styled } from 'elemental-react';
import { Details } from '@elemental-zcash/components';

const DropdownIcon = ({ fill }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <Path d="M0 0h24v24H0z" fill="none"/>
    <Path d="M7 10l5 5 5-5z" fill={fill} />
  </Svg>
);

const NavDropdown = ({ children, title }) => (
  // <Details {...getDetailsProps()}>
  <Details>
    <Row as="summary" cursor="pointer" alignItems="center" style={{ listStyle: 'none' }}>
      <Text>{title}</Text>
      <DropdownIcon fill="white" />
      {/* <StyledOcticon icon={TriangleDownIcon} sx={{ml: 1}} /> */}
    </Row>
    <Box position="absolute">
      <Box
        bg="greys.8"
        p={2}
        mt={2}
        borderWidth="1px"
        borderStyle="solid"
        borderColor="greys.7"
        borderRadius="12px"
      >
        {children}
      </Box>
    </Box>
  </Details>
);

// export const NavDropdownItem = styled(Box)`
//   display: block;
//   padding: 16px;
//   color: inherit;
//   text-decoration: none;
//   border-radius: 2px;
//   line-height: 1.25;
//   &:hover {
//     background-color: grey;
//     text-decoration: none;
//   }
// `;

export const NavDropdownItem = extend(Box, {
  p: '16px',
  color: 'inherit',
  textDecoration: 'none',
  borderRadius: '4px',
  // lineHeight: 1.25,
  ':hover': {
    bg: 'greys.7',
    color: 'green',
  },
})

// export const NavDropdownItem = ({ children, to, ...props }) => (
//   <Link to={to}>
//     <Text>{children}</Text>
//   </Link>
// )

export default NavDropdown;
