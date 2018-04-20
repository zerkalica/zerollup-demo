import * as path from 'path'
import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import * as fsExtra from 'fs-extra'

const pkgRoot = path.join(__dirname, 'packages')

const tsPlugin = typescript({
    tsconfig: path.join(__dirname, 'tsconfig.json'),
    useTsconfigDeclarationDir: true,
    tsconfigOverride: {
        compilerOptions: {
            declaration: true,
            declarationDir: path.join(__dirname, 'dist')
        }
    }
})

const tsPlugin2 = typescript({
    tsconfig: path.join(__dirname, 'tsconfig.json')
})

function moveDeclarations({declarationDir, packagesDir}) {
    return {
        name: 'move-ts-declarations',
        onwrite() {
            return fsExtra.readdir(declarationDir)
                .then(dirs => Promise.all(dirs.map(dir =>
                    fsExtra.ensureDir(path.join(packagesDir, dir, 'dist'))
                        .then(() =>
                            fsExtra.move(
                                path.join(declarationDir, dir, 'src'),
                                path.join(packagesDir, dir, 'dist', 'typings'),
                                {overwrite: true}
                            )
                        )
                )))
                .then(() => fsExtra.remove(declarationDir))
        }
    }
}


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
            tsPlugin,
            moveDeclarations({
                declarationDir: path.join(__dirname, 'dist'),
                packagesDir: path.join(__dirname, 'packages')
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
            tsPlugin2
        ]
    }
]
