Package.describe({
  name: 'ox2:tabs',
  summary: 'Tab components',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  // Core
  api.use([
    'templating'
    ]);
  // 3rd party
  api.use([
    'lauricio:less-autoprefixer@1.0.7','mquandalle:jade@0.4.1'
    ]);
  api.addFiles('lib/oo-color-variables.import.less', C);
  api.addFiles('lib/oo-tabs.jade', C);
  api.addFiles('lib/oo-tabs.js', C);
  api.addFiles('lib/oo-tabs.less', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:tabs');
  api.addFiles('tests/oo-tabs-tests.js');
});
