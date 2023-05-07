import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['@emotion', {
          importMap: {
            "@mui/system": {
              styled: {
                canonicalImport: ["@emotion/styled", "default"],
                styledBaseImport: ["@mui/system", "styled"]
              }
            },
            "@mui/material/styles": {
              styled: {
                canonicalImport: ["@emotion/styled", "default"],
                styledBaseImport: ["@mui/material/styles", "styled"]
              }
            }
          }
        }]],
      },
    }),
    tsConfigPaths(),
    svgr()
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
});
