module.exports = {
    "env": {
        "browser": true
    },
    "globals": {
        "angular": true,
        "beforeEach": true,
        "afterEach": true,
        "describe": true,
        "it": true,
        "module": true,
        "expect": true,
        "dump": true
    },

    "extends": "eslint:recommended",
    "rules": {
        "accessor-pairs": 2,
        "array-bracket-spacing": [
            2,
            "never"
        ],
        "array-callback-return": 2,
        "arrow-body-style": 2,
        "arrow-parens": 2,
        "arrow-spacing": 2,
        "block-scoped-var": 0,
        "block-spacing": 0,
        "brace-style": 0,
        "callback-return": 0,
        "camelcase": 0,
        "comma-spacing": 0,
        "comma-style": [
            2,
            "last"
        ],
        "complexity": 0,
        "computed-property-spacing": [
            2,
            "never"
        ],
        "consistent-return": 0,
        "consistent-this": 0,
        "curly": 0,
        "default-case": 0,
        "dot-location": [
            2,
            "property"
        ],
        "dot-notation": 0,
        "eol-last": 2,
        "eqeqeq": 0,
        "func-names": 0,
        "func-style": 0,
        "generator-star-spacing": 2,
        "global-require": 2,
        "guard-for-in": 0,
        "handle-callback-err": 2,
        "id-blacklist": 2,
        "id-length": 0,
        "id-match": 2,
        "indent": 0,
        "init-declarations": 0,
        "jsx-quotes": 2,
        "key-spacing": 0,
        "keyword-spacing": 0,
        "linebreak-style": [
            2,
            "unix"
        ],
        "lines-around-comment": 0,
        "max-depth": 0,
        "max-len": 0,
        "max-nested-callbacks": 2,
        "max-params": 0,
        "new-parens": 0,
        "newline-after-var": 0,
        "newline-per-chained-call": 0,
        "no-alert": 2,
        "no-array-constructor": 2,
        "no-bitwise": 2,
        "no-caller": 2,
        "no-catch-shadow": 0,
        "no-confusing-arrow": 2,
        "no-continue": 0,
        "no-div-regex": 2,
        "no-else-return": 0,
        "no-empty-function": 0,
        "no-eq-null": 0,
        "no-eval": 0,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-extra-label": 2,
        "no-extra-parens": 0,
        "no-floating-decimal": 2,
        "no-implicit-coercion": [
            2, {
                "boolean": false,
                "number": false,
                "string": false
            }
        ],
        "no-implicit-globals": 0,
        "no-implied-eval": 2,
        "no-inline-comments": 0,
        "no-inner-declarations": [
            2,
            "functions"
        ],
        "no-invalid-this": 0,
        "no-iterator": 2,
        "no-label-var": 0,
        "no-labels": 0,
        "no-lone-blocks": 2,
        "no-lonely-if": 0,
        "no-loop-func": 0,
        "no-magic-numbers": 0,
        "no-mixed-requires": 2,
        "no-multi-spaces": 0,
        "no-multi-str": 2,
        "no-multiple-empty-lines": 0,
        "no-native-reassign": 2,
        "no-negated-condition": 0,
        "no-nested-ternary": 0,
        "no-new": 2,
        "no-new-func": 0,
        "no-new-object": 2,
        "no-new-require": 2,
        "no-new-wrappers": 2,
        "no-octal-escape": 2,
        "no-param-reassign": 0,
        "no-path-concat": 2,
        "no-plusplus": 0,
        "no-process-env": 2,
        "no-process-exit": 2,
        "no-proto": 2,
        "no-restricted-imports": 2,
        "no-restricted-modules": 2,
        "no-restricted-syntax": 2,
        "no-return-assign": 0,
        "no-script-url": 2,
        "no-self-compare": 0,
        "no-sequences": 0,
        "no-shadow": 0,
        "no-shadow-restricted-names": 0,
        "no-spaced-func": 2,
        "no-sync": 2,
        "no-ternary": 0,
        "no-throw-literal": 0,
        "no-trailing-spaces": [
            2, {
                "skipBlankLines": true
            }
        ],
        "no-undef-init": 2,
        "no-undefined": 0,
        "no-underscore-dangle": 0,
        "no-unmodified-loop-condition": 2,
        "no-unneeded-ternary": 2,
        "no-unused-expressions": 0,
        "no-use-before-define": 0,
        "no-useless-call": 2,
        "no-useless-concat": 0,
        "no-useless-constructor": 2,
        "no-var": 0,
        "no-void": 0,
        "no-warning-comments": 0,
        "no-whitespace-before-property": 2,
        "no-with": 2,
        "object-curly-spacing": 0,
        "object-shorthand": 0,
        "one-var": 0,
        "one-var-declaration-per-line": 0,
        "operator-assignment": 0,
        "operator-linebreak": 0,
        "padded-blocks": 0,
        "prefer-arrow-callback": 0,
        "prefer-const": 2,
        "prefer-reflect": 0,
        "prefer-rest-params": 0,
        "prefer-spread": 0,
        "prefer-template": 0,
        "quote-props": 0,
        "quotes": 0,
        "radix": [
            2,
            "always"
        ],
        "require-jsdoc": 0,
        "require-yield": 2,
        "semi": 0,
        "semi-spacing": 0,
        "sort-imports": 2,
        "sort-vars": 0,
        "space-before-blocks": 0,
        "space-before-function-paren": 0,
        "space-in-parens": [
            2,
            "never"
        ],
        "space-infix-ops": 0,
        "space-unary-ops": [
            2, {
                "nonwords": false,
                "words": false
            }
        ],
        "spaced-comment": 0,
        "strict": 0,
        "template-curly-spacing": 2,
        "valid-jsdoc": 0,
        "vars-on-top": 0,
        "wrap-iife": 0,
        "wrap-regex": 0,
        "yield-star-spacing": 2,
        "yoda": 0
    }
};
