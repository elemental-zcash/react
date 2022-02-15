import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Box, Row, Text } from 'elemental-react';
import NavDropdown, { NavDropdownItem } from './nav-dropdown';


export const HEADER_HEIGHT = 64;


// TODO: Replace with cross-platform elemental-react components


const navItems = [{
  title: 'Design',
  children: [{
    title: 'Interface guidelines',
    url: '#',
  }, {
    title: 'Icons',
    url: '#',
  }],
}, {
  title: 'Build',
  url: '#',
  children: [{
    title: 'React Components'
  }]
}, {
  title: 'Contribute',
  url: '#'
}, {
  title: 'About',
  url: '#'
}]

const HeaderNavItems = ({ items }) => (
  <Row alignItems="center" color="white">
    {items.map((item, index) => {
      if (item.children) {
        return (
          <Box style={{ cursor: 'pointer' }} p={3} key={index}>
            <NavDropdown title={item.title}>
              {item.children.map(child => (
                <NavDropdownItem key={child.title} href={child.url}>
                  {child.title}
                </NavDropdownItem>
              ))}
            </NavDropdown>
          </Box>
        )
      }

      return (
        <Link
          key={index}
          href={item.url}
        >
          <Box p={3}>
            <Text color="white">
              {item.title}
            </Text>
          </Box>
        </Link>
      )
    })}
  </Row>
);

const Header = ({ siteTitle }) => {
  
  return (
    <Row
      bg="secondary"
      height={HEADER_HEIGHT}
      alignItems="center"
      justifyContent="space-between"
      px={[3, null, null, 4]}
      width="100%"
      zIndex={10}
      position="sticky"
      top={0}
    >
      <Box display="flex" alignItems="center">
        <Link
          to="/"
          // style={{
          //   color: `white`,
          //   // textDecoration: `none`,
          // }}
        >
          <Text color="white">
            {siteTitle}
          </Text>
        </Link>
      </Box>
      <Box>
        {/* <Text>Nav</Text> */}
        <HeaderNavItems items={navItems} />
      </Box>
    </Row>
  );
};


Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `Elemental Zcash`,
};

export default Header;
