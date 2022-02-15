import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { Box, Row, Text } from 'elemental-react';


import DefaultButton from '@elemental-zcash/components/lib/buttons/DefaultButton';
// import Gallery from '../../../components/src/common/Gallery';

import Layout from '../components/layout';
import SEO from '../components/seo';
import useWindowViewport from '../hooks/use-window-viewport';
// import AppBar from '../../../components/lib/common/AppBar';
// import NavOverlay from '../../../components/lib/overlays/NavOverlay';
// import Section from '../../../components/lib/common/Section';
// import Footer from '../../../components/lib/common/Footer';

// import HomeTimeline from '../components/routes/home-timeline';



const Home = () => {
  const viewport = useWindowViewport();
  const [navOverlayOpen, setNavOverlayOpen] = useState(false);

  useEffect(async () => {
    
  }, []);

  return (
    <Layout>
      <SEO title="Home | Elemental Zcash Design System" />
      {/* <Box width="100vw"> */}
      <Box bg="white" width="100%" minHeight="50vh">
        <Box alignItems="center" justifyContent="center" flex={1}>
          <Text fontSize="h4" mb={4}>Welcome to{'\n'}Elemental Zcash!</Text>
          <Link to="/react/getting-started">
            <DefaultButton style={{ cursor: 'pointer' }}>
              Get started
            </DefaultButton>
          </Link>
        </Box>
      </Box>
      {/* </Box> */}
    </Layout>
  );
}

export default Home;
