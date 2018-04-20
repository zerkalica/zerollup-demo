import * as path from 'path'
import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'

const pkgRoot = path.join(__dirname, 'packages')

export default [
    {
        input: path.join(pkgRoot, 'site1', 'src', 'index.ts'),
        output: {
            format: 'es',
            file: path.join(pkgRoot, 'site1', 'dist', 'index.mjs')
        },
        external: [
            path.join(pkgRoot, 'site1', 'src', 'config', 'host1'),
            path.join(pkgRoot, 'site1', 'src', 'config', 'host2'),
            path.join(pkgRoot, 'site1', 'src', 'config', 'index')
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({
                // verbosity: 3,
                tsconfig: path.join(pkgRoot, 'site1', 'tsconfig.json')
            })
        ]
    },
    {
        input: path.join(pkgRoot, 'site1', 'src', 'config', 'host1.ts'),
        output: {
            format: 'es',
            file: path.join(pkgRoot, 'site1', 'dist', 'host1', 'config.host1.mjs')
        },
        plugins: [
            resolve(),
            commonjs(),
            typescript({
                // verbosity: 3,
                tsconfig: path.join(pkgRoot, 'site1', 'tsconfig.json')
            })
        ]
    }
]
