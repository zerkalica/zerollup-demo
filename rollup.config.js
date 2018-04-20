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
                tsconfig: path.join(pkgRoot, 'lib1', 'tsconfig.json'),
                useTsconfigDeclarationDir: true,
                // tsconfigOverride: {
                //     // compilerOptions: {
                //     //     declarationDir: path.join(pkgRoot, 'lib1', 'dist', 'typings')
                //     // },
                //     include: [
                //         path.join(pkgRoot, 'lib1', 'src')
                //     ]
                // }
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
                tsconfig: path.join(pkgRoot, 'lib2', 'tsconfig.json'),
                // useTsconfigDeclarationDir: true,
                // tsconfigOverride: {
                //     // compilerOptions: {
                //     //     declarationDir: path.join(pkgRoot, 'lib2', 'dist', 'typings')
                //     // },
                //     include: [
                //         path.join(pkgRoot, 'lib1', 'src'),
                //         path.join(pkgRoot, 'lib2', 'src')
                //     ]
                // },
            })
        ]
    }
]
