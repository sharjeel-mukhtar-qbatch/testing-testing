import { defineConfig, loadEnv } from 'vite';

import fs from 'fs';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode, ssrBuild }) => {
  const env = loadEnv(mode, process.cwd(), '');

  makeManifest({ name: env.VITE_EXTENSION_NAME });

  const configObject = {
    define: {
      'process.env': JSON.stringify(env),
    },
    plugins: [ react(), customDynamicImport() ],
    build: {
      rollupOptions: {
        input: {
          'content-main': './src/content/content_script.js',
          'popup-popup': './src/popup/popup.html',
          service_worker: './public/service_worker.js',
        },
        output: {
          entryFileNames: entryFileInfo => {
            if (entryFileInfo.name === 'service_worker') {
              return 'service_worker.js';
            }
            const nameArray = entryFileInfo.name.split('-');

            return `src/${nameArray[0]}/${nameArray[1]}.js`;
          },
          assetFileNames: 'assets/[name].[ext]',
          chunkFileNames: 'assets/chunk-[name].js',
        },
      },
      minify: true,
      modulePreload: false,
      outDir: `./build/${mode}`,
    },
  };

  if (mode === 'development') configObject.build.minify = false;

  return configObject;
});

const makeManifest = ({ name }) => {
  const manifestTemplatePath = './src/manifest.template.json';
  const manifestOutputPath = './public/manifest.json';

  const manifestTemplate = JSON.parse(fs.readFileSync(manifestTemplatePath, 'utf-8'));

  manifestTemplate.name = name;

  fs.writeFileSync(manifestOutputPath, JSON.stringify(manifestTemplate, null, 2));
};

function customDynamicImport () {
  return {
    name: 'custom-dynamic-import',
    renderDynamicImport ({ moduleId }) {
      if (!moduleId.includes('node_modules')) {
        return {
          left: `
          {
            const dynamicImport = (path) => import(path);
            dynamicImport(
            `,
          right: ')}',
        };
      }
      return {
        left: 'import(',
        right: ')',
      };
    },
  };
}
