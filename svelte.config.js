import node from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy'

const labs = [ 'flipboard', 'handshake', 'record-stack' ];

const labsAssetsCopyTargets = labs.map((name) => ({
  src: `node_modules/${name}/assets/*`,
  dest: `labs/${name}/package`
}))

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: node(),
    vite: {
      resolve: {
        alias: {
          $constants: resolve('./src/constants'),
        }
      },
      plugins: [
        viteStaticCopy({
          targets: [ ...labsAssetsCopyTargets ],
        })
      ]
    }
  }
};

export default config;
