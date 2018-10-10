Package.describe({
  name: 'pathable:susy',
  summary: 'Powerful grids for the web.',
  version: '3.0.0',
  git: 'https://github.com/pathable/meteor-susy'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.8');
  api.use('fourseven:scss@4.10.0');
  var assets = [
    // Susy API
    "_susy.scss",
    "susy/language/_susy.scss",
    "susy/language/susy/_background.scss",
    "susy/language/susy/_bleed.scss",
    "susy/language/susy/_box-sizing.scss",
    "susy/language/susy/_breakpoint-plugin.scss",
    "susy/language/susy/_container.scss",
    "susy/language/susy/_context.scss",
    "susy/language/susy/_gallery.scss",
    "susy/language/susy/_grids.scss",
    "susy/language/susy/_gutters.scss",
    "susy/language/susy/_isolate.scss",
    "susy/language/susy/_margins.scss",
    "susy/language/susy/_padding.scss",
    "susy/language/susy/_rows.scss",
    "susy/language/susy/_settings.scss",
    "susy/language/susy/_span.scss",
    "susy/language/susy/_validation.scss",

    // Susy Math
    "susy/_su.scss",
    "susy/su/_grid.scss",
    "susy/su/_settings.scss",
    "susy/su/_utilities.scss",
    "susy/su/_validation.scss",

    // Susy Output
    // - Float
    "susy/output/_float.scss",
    "susy/output/float/_container.scss",
    "susy/output/float/_end.scss",
    "susy/output/float/_isolate.scss",
    "susy/output/float/_span.scss",
    // - Shared
    "susy/output/_shared.scss",
    "susy/output/shared/_background.scss",
    "susy/output/shared/_container.scss",
    "susy/output/shared/_direction.scss",
    "susy/output/shared/_inspect.scss",
    "susy/output/shared/_margins.scss",
    "susy/output/shared/_output.scss",
    "susy/output/shared/_padding.scss",
    // - Support
    "susy/output/_support.scss",
    "susy/output/support/_background.scss",
    "susy/output/support/_box-sizing.scss",
    "susy/output/support/_clearfix.scss",
    "susy/output/support/_prefix.scss",
    "susy/output/support/_rem.scss",
    "susy/output/support/_support.scss"
  ];
  api.addFiles(assets, 'client', { isImport: true });
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pathable:susy');
  api.addFiles('pathable:susy-tests.js');
});
