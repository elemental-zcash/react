import React from 'react';
import styled from 'styled-components';
import { Box, Text } from 'elemental-react';
import { Link as GatsbyLink } from 'gatsby';

import { HEADER_HEIGHT } from './header';

import nav from '../data/sidebar-nav.json';

const Link = (props) => (
  <Box as={GatsbyLink} {...props} />
);

const NavLink = styled(Link)`
  &.active {
    font-weight: bold;
    color: black;
  }
`;

const navItems = nav.items;

// const navItems = [{
//   title: 'About',
//   url: '/react/getting-started',
//   children: [{
//     title: 'Getting Started',
//     url: '/react/getting-started/',
//   }, {
//     title: 'Theming',
//     url: '/react/theming/',
//   }, {
//     title: 'Locales',
//     url: '/react/locales/',
//   }, {
//     title: 'Icons',
//     url: '/react/icons/',
//   }],
// }, {
//   title: 'Components',
//   url: '#',
//   children: [{
//     title: 'Buttons',
//     url: '/react/buttons/',
//   }, {
//     title: 'QR Codes',
//     url: '/react/qr-codes/',
//   }],
// }];

// const GitHubIcon = () => (
//   <Svg width="33px" height="33px" viewBox="0 0 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg">
//     <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//       <G id="GitHub-Mark" transform="translate(-136.000000, -331.000000)" fill="#FFFFFE">
//         <Path d="M152.608,331.455 C143.614,331.455 136.32,338.748 136.32,347.745 C136.32,354.942 140.987,361.047 147.46,363.201 C148.275,363.351 148.572,362.848 148.572,362.416 C148.572,362.029 148.558,361.005 148.55,359.646 C144.019,360.63 143.063,357.462 143.063,357.462 C142.322,355.58 141.254,355.079 141.254,355.079 C139.775,354.069 141.366,354.089 141.366,354.089 C143.001,354.204 143.861,355.768 143.861,355.768 C145.314,358.257 147.674,357.538 148.602,357.121 C148.75,356.069 149.171,355.351 149.636,354.944 C146.019,354.533 142.216,353.135 142.216,346.893 C142.216,345.115 142.851,343.66 143.893,342.522 C143.725,342.11 143.166,340.453 144.053,338.211 C144.053,338.211 145.42,337.773 148.532,339.881 C149.831,339.519 151.225,339.339 152.61,339.332 C153.994,339.339 155.387,339.519 156.688,339.881 C159.798,337.773 161.163,338.211 161.163,338.211 C162.052,340.453 161.493,342.11 161.326,342.522 C162.37,343.66 163,345.115 163,346.893 C163,353.151 159.191,354.528 155.563,354.931 C156.147,355.434 156.668,356.428 156.668,357.947 C156.668,360.125 156.648,361.882 156.648,362.416 C156.648,362.852 156.942,363.359 157.768,363.2 C164.236,361.041 168.899,354.94 168.899,347.745 C168.899,338.748 161.605,331.455 152.608,331.455" id="Fill-51"></path>
//       </G>
//     </G>
//   </Svg>
// );

const SidebarNavItems = ({ items }) => {

  return (
    <>
      {items.map(item => (
        <Box
          key={item.title}
          borderWidth={0}
          borderRadius={0}
          borderTopWidth={1}
          borderStyle="solid"
          borderColor="greys.3"
          p={4}
        >
          <Box>
            <NavLink
              // as="a"
              to={item.url}
              activeClassName="active"
              partiallyActive={true}
              style={{ color: 'inherit' }}
            >
              <Text fontSize={16}>
                {item.title}
              </Text>
            </NavLink>
            {item.children ? (
              <Box mt="8px">
                {item.children.map(child => (
                  <NavLink
                    key={child.title}
                    // 
                    to={child.url}
                    activeClassName="active"
                    color="blue"

                    py="4px"
                    mt="8px"
                  >
                    <Text fontSize={14}>
                      {child.title}
                    </Text>
                  </NavLink>
                ))}
              </Box>
            ) : null}
          </Box>
        </Box>
      ))}
      {/* {repositoryUrl ? (
        <Box borderWidth={0} borderTopWidth={1} borderRadius={0} borderStyle="solid" borderColor="border.default" p={4}>
          <Link href={repositoryUrl} sx={{color: 'inherit'}}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              GitHub
              <GithubIcon icon={LinkExternalIcon} sx={{color: 'fg.muted'}} />
            </Box>
          </Link>
        </Box>
      ) : null} */}
    </>
  )
}

const Sidebar = () => {

  return (
    <Box position="sticky" minWidth={260} top={HEADER_HEIGHT} height={`calc(100vh - ${HEADER_HEIGHT}px)`} bg="greys.1">
      <SidebarNavItems items={navItems} />
    </Box>
  )
};

export default Sidebar;
