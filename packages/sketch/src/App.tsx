import React, { ReactNode } from 'react';
import { Artboard, Page } from 'react-sketchapp';
import { Box, Text, LayoutProvider, styled, ThemeProvider } from 'elemental-react';
import { SketchRouter, Switch, Route, Link, withRouter } from 'react-sketchapp-router';
// @ts-ignore
import { width, position, space, height, color } from 'styled-system';
// @ts-ignore
import { generatePalette } from 'elemental-color/lib/index';

import * as Routes from './routes';
import staticRoutes from './routes/routes';
// import NavOverlay from '../../components/lib/overlays/NavOverlay';

import designSystem from './design-system/design-system';
import colors from './styles/colors';
import typography from './styles/typography';
import theme from './styles/theme';

const routes = staticRoutes.map((route) => ({
  ...route,
  component: withRouter(Routes[route.name]),
}));
// const routes = [];

const screens = [{
  name: 'Mobile', width: 360, height: 640,
}, {
  name: 'Tablet', width: 1024, height: 768,
}, {
  name: 'Desktop', width: 1280, height: 1024,
}];

// const Home = () => (
//   <Box bg="white">
//     <Text color="black">Hello World</Text>
//   </Box>
// );

const components: { name: string, path: string, component: any, exact?: boolean }[] = [
  // {
  //   name: 'NavOverlay',
  //   path: '/navigation',
  //   component: withRouter(NavOverlay),
  // }
];

// const routes = []

const screensTotalWidth = screens.reduce((acc, { width }) => {
  // eslint-disable-next-line no-param-reassign
  acc += width + 70;

  return acc;
}, 0);

const Screen = styled(Artboard)`
  ${width}
  ${position}
  ${space}
  ${height}
  ${color}
`;

Screen.defaultProps = {
  width: 360,
  position: 'relative',
  ml: 0,
};


const App = () => {

  return (
    <>
      {/* <Page name="App" style={{ flex: 1, display: 'flex', alignItems: 'flex-start', flexDirection: 'row', flexWrap: 'wrap', width: screensTotalWidth }}>
        <SketchRouter locations={['/profile/a']} viewport={screens}>
          <Switch>
            {components.concat(routes).map(({ name: routeName, component: Component, path, exact }) => (
              <Route path={path} render={({ match: { params }, viewport, breakpoint }) => {

                return (
                  <LayoutProvider breakpoint={breakpoint}>
                    <Component {...params} />
                  </LayoutProvider>
                );
              }} exact={exact} />
            ))}
          </Switch>
        </SketchRouter>
      </Page> */}
      {/* <Page name="Components">
        <LayoutProvider breakpoint={0}>
          {components.map(({ name: compName, component: Component }) => (
            <Screen width={width || 1440} name={screenName}>
              <Component {...{ [type]: Object.assign({}, data, compData) }} />
            </Screen>
          ))}
        </LayoutProvider>
      </Page> */}
      {designSystem.map(({
      type, name, screens, data, style, width: pageWidth
    }) => (
        <Page name={name} key={name} style={style}>
          {/* <MDXProvider components={mdComponents}> */}
          <ThemeProvider
            design={{ Button: {} }}
            /* @ts-ignore */
            theme={theme}
          >
            <LayoutProvider breakpoint={0}>
              {screens.map(({ name: screenName, component: Component, data: compData, width, bg }: any) => (
                <Screen bg={bg} width={pageWidth || width || 1440} mr={70} mb={70} name={screenName}>
                  <Component {...{ [type]: Object.assign({}, data, compData) }} />
                </Screen>
              ))}
            </LayoutProvider>
          </ThemeProvider>
          {/* </MDXProvider> */}
        </Page>
      ))}
    </>
  );
};

export default App;