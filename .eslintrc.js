/* eslint-disable */
/*
------------------------------------------------------------
----------- Developed By : Srikanth Kini , 2021 ------------
------------------------------------------------------------
*/

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error","always"],
        "quotes": ["error","single"],
        "no-undef": "off",
        "no-var": ["error"],
        "keyword-spacing": ["error", { "before": true }],
        "prefer-const":["error"]
    }
}