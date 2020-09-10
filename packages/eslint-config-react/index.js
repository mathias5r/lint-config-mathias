module.exports = {
    env: {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
}