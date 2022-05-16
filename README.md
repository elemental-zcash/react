# react
React implementation of Elemental Zcash component library and Design System. Work in progress. Please post an issue or contact @macintoshhelper for help.

## Getting Started

```sh
npm install @elemental-zcash/components elemental-react
```

## Usage


### App Wrapper i.e. **`App.tsx`**

```js
import React from 'react';
import { ThemeProvider } from 'elemental-react';
import { theme } from '@elemental-zcash/components';

// ...

const App = () => (
  <ThemeProvider theme={theme}>
    {/* App here */}
  </ThemeProvider>
);
```
