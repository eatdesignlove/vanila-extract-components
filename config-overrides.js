// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

// eslint-disable-next-line no-undef
module.exports = function override(config, env) {
	config.plugins = [new VanillaExtractPlugin()];
	return config;
};
