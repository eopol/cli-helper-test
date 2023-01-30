import { homedir } from 'node:os'
import { resolve } from 'node:path'
import npminstall from 'npminstall'

npminstall({
  root: resolve(homedir(), '.eo-cli'),
  storeDir: resolve(homedir(), '.eo-cli', 'node_modules'),
  registry: 'https://registry.npmmirror.com',
  pkgs: [
    {
      name: '@eo-cli/utils',
      version: '^1.0.0',
    },
  ],
})

// (async () => {
//   await npminstall({
//     // install root dir
//     root: process.cwd(),
//     // optional packages need to install, default is package.json's dependencies and devDependencies
//     // pkgs: [
//     //   { name: 'foo', version: '~1.0.0' },
//     // ],
//     // install to specific directory, default to root
//     // targetDir: '/home/admin/.global/lib',
//     // link bin to specific directory (for global install)
//     // binDir: '/home/admin/.global/bin',
//     // registry, default is https://registry.npmjs.org
//     // registry: 'https://registry.npmjs.org',
//     // debug: false,
//     // storeDir: root + 'node_modules',
//     // ignoreScripts: true, // ignore pre/post install scripts, default is `false`
//     // forbiddenLicenses: forbit install packages which used these licenses
//   });
// })().catch(err => {
//   console.error(err);
// });
