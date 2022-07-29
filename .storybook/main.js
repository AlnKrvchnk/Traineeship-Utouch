const custom = require('../webpack.config.js');

module.exports = {
    core: {
        builder: 'webpack5',
    },

    webpackFinal: async (config) => {
        return {
            ...config,
            module: { ...config.module, rules: custom.module.rules },
        };
    },
};
