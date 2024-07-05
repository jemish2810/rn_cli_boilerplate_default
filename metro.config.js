const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
   transformer: {
    getTransformOptions: async () => ({
      transform: {
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx', 'cjs'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
