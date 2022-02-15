const path = require('path');
const webpack = require('webpack');

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    plugins: [
      ...getConfig().plugins,
      new webpack.ProvidePlugin({
        process: path.resolve(__dirname, './node_modules/process/browser'),
      }),
    ],
    resolve: {
      fallback: {
        ...getConfig().resolve.fallback,
        os: false,
      },
      alias: {
        ...getConfig().resolve.alias,
        react: path.resolve(__dirname, './node_modules/react/'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        'elemental-react': path.resolve(__dirname, './node_modules/elemental-react'),
        'elemental-color': path.resolve(__dirname, './node_modules/elemental-color/'),
        'styled-system': path.resolve(__dirname, './node_modules/styled-system'),
        'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
        'react-native': path.resolve(__dirname, './src/mock.js'),
        'react-native-web': path.resolve(__dirname, './node_modules/react-native-web'),
        'simple-masonry-layout': path.resolve(__dirname, './node_modules/simple-masonry-layout/'),
        'react-primitives': path.resolve(__dirname, './node_modules/react-primitives/'),
        // 'elemental-color': path.resolve(__dirname, './node_modules/elemental-color/'),
        'react-primitives-svg': path.resolve(__dirname, './node_modules/react-primitives-svg'),
        '@elemental-zcash/style-guide': path.resolve(__dirname, './node_modules/@elemental-zcash/style-guide'),
        '@elemental-zcash/components': path.resolve(__dirname, './node_modules/@elemental-zcash/components'),
        '@elemental-zcash/design': path.resolve(__dirname, './node_modules/@elemental-zcash/design'),
      },
      extensions: getConfig().resolve.extensions.concat('.web.js'),
    },
  });
};
