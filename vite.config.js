import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy'

const labs = [ 'flipboard', 'handshake', 'record-stack' ];

const labsAssetsCopyTargets = labs.map((name) => ({
  src: `node_modules/${name}/assets/*`,
  dest: `labs/${name}/package`
}))

/** @type {import('vite').UserConfig} */
const config = {
  resolve: {
    alias: {
      $constants: resolve('./src/constants'),
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [ ...labsAssetsCopyTargets ],
    }),
    sveltekit()
  ]
};

export default config;
