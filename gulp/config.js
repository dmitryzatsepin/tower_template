const path = require('path');
const root = path.join(__dirname, '../');

const src = path.join(root, 'src');
const build = path.join(root, 'html');
const reports = path.join(root, 'reports');

module.exports = {
  root,
  src,
  build,
  buildPath: path.join(root, '/html'),

  pug2html: {
    beautifyHtml: true
  },
  lighthouse: {
    reportPath: reports,
    PORT: 8080,
    chromeLauncherPort: 9222,
    config: {
      extends: 'lighthouse:default'
    },
    flags: {
      // available options - https://github.com/GoogleChrome/lighthouse/#cli-options
      chromeFlags: ['--show-paint-rects'],
      output: 'html'
    }
  },
  copyDependencies: {
    dist: path.join(src, 'local_modules')
  }
}
