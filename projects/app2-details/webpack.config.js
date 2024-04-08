const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'app2-details',

  exposes: {
    // './Module': './projects/app2-details/src/app/ui/ui.module.ts',
    './routes': './projects/app2-details/src/app/app.routes.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
  sharedMappings: ['shared-lib'],
});
