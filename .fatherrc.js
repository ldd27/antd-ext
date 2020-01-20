export default {
  cjs: 'rollup',
  esm: 'rollup',
  cssModules: true,
  doc: {
    base: '/antd-ext'
  },
  extraBabelPlugins: [
    ['babel-plugin-import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }],
  ],
}
