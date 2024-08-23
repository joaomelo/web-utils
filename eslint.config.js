import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import stylisticJs from '@stylistic/eslint-plugin-js';


export default [
  { files: ["**/*.{js,mjs,cjs,vue}"] },
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/semi': ["error", "always"],
      '@stylistic/js/object-curly-spacing': ["error", "always"]
    }
  }
];