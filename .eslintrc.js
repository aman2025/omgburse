module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'spaced-comment': [1, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }]
  },
  overrides: [
    {
      files: [
        '**/tests/*.{j,t}s?(x)',
        '**/tests/**/*.spec.{j,t}s?(x)',
        '**/tests/*.spec.{j,t}s?(x)'
      ]
    }
  ]
};
