import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import { terser } from 'rollup-plugin-terser'
module.exports = [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/formay.cjs.js',
        format: 'cjs'
      }
    ],
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**'
      }),
      uglify()
    ],
    external: ['preact']
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/formay.es.js',
        format: 'es'
      }
    ],
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**'
      }),
      terser()
    ],
    external: ['preact']
  }
]
