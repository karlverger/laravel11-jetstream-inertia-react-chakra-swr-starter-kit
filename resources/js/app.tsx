import './bootstrap';
import '../css/app.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { RouteContext } from '@/Hooks/useRoute';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';


// 1. Import the utilities
import {ChakraProvider, extendTheme} from '@chakra-ui/react';

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
    base: '0px',
    sm: '320px',
    md: '820px',
    lg: '1280px',
    xl: '1700px',
    '2xl': '2300px',
};

// 3. Extend the theme
const theme = extendTheme({
    breakpoints: breakpoints,
    fonts: {
        heading: `'Quicksand', sans-serif`,
        body: `'Figtree', sans-serif`,
    },
    components: {
        Heading: {
            baseStyle: {
                fontWeight: 'bold', // Normally, it is "semibold"
                fontFamily: 'Quicksand',
                letterSpacing: 'tight',
            },
        },
    },
});


const appName =
  window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
  title: title => `${title} - ${appName}`,
  progress: {
    color: '#4B5563',
  },
  resolve: name =>
    resolvePageComponent(
      `./Pages/${name}.tsx`,
      import.meta.glob('./Pages/**/*.tsx'),
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);
    return root.render(
      <RouteContext.Provider value={(window as any).route}>
          <ChakraProvider theme={theme}>
                <App {...props} />
          </ChakraProvider>
      </RouteContext.Provider>,
    );
  },
});
