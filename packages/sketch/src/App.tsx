import React, { ReactNode, useEffect } from 'react';
import { Artboard, Page } from 'react-sketchapp';
import { Box, Text, LayoutProvider, styled, ThemeProvider, TextInput, Button } from 'elemental-react';
import { SketchRouter, Switch, Route, Link, withRouter } from 'react-sketchapp-router';
// @ts-ignore
import { width, position, space, height, color } from 'styled-system';
// @ts-ignore
import { generatePalette } from 'elemental-color/lib/index';
import { theme } from '@elemental-zcash/components'; // @ts-ignore
import { Svg, Path } from 'react-primitives-svg';
// @ts-ignore
import { Section } from '@elemental-zcash/style-guide';

// @ts-ignore
import { setProcessStyle, Test, RPNativeProvider, useNative } from '@react-platform/native';
// import { setProcessStyle, RPNativeProvider, useNative } from '@react-platform/native/lib/context';

import * as Routes from './routes';
import staticRoutes from './routes/routes';
// import NavOverlay from '../../components/lib/overlays/NavOverlay';

import designSystem from './design-system/design-system';
import colors from './styles/colors';
import typography from './styles/typography';

const routes = staticRoutes.map((route) => ({
  ...route, // @ts-ignore
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

const processStyleFunc = (style: any) => ({ ...style });

export const ZecTabIcon = ({ size = 24, fill = '#434343' }) => ( // @ts-ignore
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M11.1953 17.1622H18.9457V20.2875H14.0826H13.7076V20.6625V23.49H11.2381V20.6625V20.2875H10.8631H6V17.8644L14.0523 6.94237L14.4928 6.34484H13.7504H6V3.21951H10.8631H11.2381V2.84451V0H13.7076V2.84451V3.21951H14.0826H18.9457V5.64262L10.8934 16.5647L10.4529 17.1622H11.1953Z" fill={fill} />
  </Svg>
);

const App = () => {
  // const [_, dispatch] = useNative();
  // useEffect(() => {
  //   setProcessStyle((style: any) => ({ ...style }), dispatch);
  // }, []);

  return (
    <RPNativeProvider processStyle={processStyleFunc}>
      <Page name="App" style={{ flex: 1, display: 'flex', alignItems: 'flex-start', flexDirection: 'row', flexWrap: 'wrap', width: screensTotalWidth }}>
        <ThemeProvider
          design={{ Button: {} }}
          // @ts-ignore
          colorMode="day"
          theme={theme}
         >{/* @ts-ignore */}
          <SketchRouter locations={['/wallet/']} viewport={screens}>
            {/* @ts-ignore */}
            <Switch>
              {components.concat(routes).map(({ name: routeName, component: Component, path, exact }) => (
                <Route path={path} render={({ /* @ts-ignore */
                  match: { params }, viewport, breakpoint
                }) => {

                  return (
                    <LayoutProvider breakpoint={breakpoint || 0}>
                      <Component {...params} />
                    </LayoutProvider>
                  ); // @ts-ignore
                }} exact={exact} />
              ))}
            </Switch>
          </SketchRouter>
        </ThemeProvider>
      </Page>
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
              // @ts-ignore
              colorMode="day"
              theme={theme}
            >
              <LayoutProvider breakpoint={0}>
                {screens.map(({
                  name: screenName, component: Component, data: compData, width, bg, title, description,
                }: any) => (
                  <Screen
                    bg={bg || compData?.theme === 'dark' ? '#000' : '#fff'}
                    width={pageWidth || width || 1440}
                    mr={70}
                    mb={70}
                    name={screenName}
                    viewport={{ width: pageWidth || width || 1440 }}
                  >
                    <ThemeProvider colorMode={compData?.theme === 'dark' ? 'night' : 'day'}>
                      {title ? (
                        <Section title={title} description={description} titleColor={compData?.theme === 'dark' ? '#fff' : '#000'}>
                          <Box p={40}>
                            <Component {...{ [type]: Object.assign({}, data, compData) }} />
                          </Box>
                        </Section>
                      ) : (
                        <Component {...{ [type]: Object.assign({}, data, compData) }} />
                      )}
                    </ThemeProvider>
                  </Screen>
                ))}
              </LayoutProvider>
            </ThemeProvider>
          {/* </MDXProvider> */}
        </Page>
      ))}
    </RPNativeProvider>
  );
};

export default App;