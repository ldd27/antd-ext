export default {
  entry: 'src/index.js',
  esm: 'rollup',
  cjs: 'rollup',
  doc: {
    base: '/antd-ext'
  },
  cssModules: true,
  extraBabelPlugins: [
    ['babel-plugin-import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }],
  ],
}