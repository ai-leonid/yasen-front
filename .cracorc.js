module.exports = {
  webpack: {
    configure: (config ) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: 'svgo-loader',
            options: {
              plugins: ['preset-default'],
            }
          },
        ]
      });
      return config;
    },
  },
    plugins: [
        {
            plugin: require('craco-less'),
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {},
                        javascriptEnabled: true,
                    },
                },
                noIeCompat: true
            },
        },
    ],
};
