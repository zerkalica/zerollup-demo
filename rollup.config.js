import * as path from 'path'
import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'

const pkgRoot = path.join(__dirname, 'packages')

export default [
    {
        input: path.join(pkgRoot, 'lib1', 'src', 'index.ts'),
        output: {
            format: 'es',
            file: path.join(pkgRoot, 'lib1', 'dist', 'index.mjs')
        },
        plugins: [
            resolve(),
            commonjs(),
            typescript({
                // verbosity: 3,
                tsconfig: path.join(pkgRoot, 'lib1', 'tsconfig.json')
            })
        ]
    },
    {
        input: path.join(pkgRoot, 'lib2', 'src', 'index.ts'),
        output: {
            format: 'es',
            file: path.join(pkgRoot, 'lib2', 'dist', 'index.mjs')
        },
        plugins: [
            resolve(),
            commonjs(),
            typescript({
                // verbosity: 3,
                tsconfig: path.join(pkgRoot, 'lib2', 'tsconfig.json')
            })
        ]
    }
]
