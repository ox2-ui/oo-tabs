Package.describe({
  name: 'ox2:tabs',
  summary: 'TESTING_DO_NOT_USE Tab components',
  version: '1.3.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  // Core
  api.use([
    'templating',
    'less'
    ]);
  // 3rd party
  api.use([
    'mquandalle:jade@0.4.9'
    ]);
  api.addFiles('lib/oo-tabs.jade', C);
  api.addFiles('lib/oo-tabs.js', C);
  api.addFiles('lib/oo-tabs.less', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:tabs');
  api.addFiles('tests/oo-tabs-tests.js');
});
