import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import { DEFAULT_EXTENSIONS as DEFAULT_BABEL_EXTENSIONS } from '@babel/core';
import babel from '@rollup/plugin-babel';

import pkg from './package.json';
const isProd = process.env.NODE_ENV === 'production';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true,
            exports: 'named',
        },
        {
            file: pkg.module,
            format: 'esm',
            sourcemap: true,
            exports: 'named',
        }
    ],
    plugins: [
        external(),
        postcss({
            minimize: isProd,
            extensions: ['.css', '.scss']
        }),
        resolve(),
        typescript({
            rollupCommonJSResolveHack: true,
            clean: true
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            extensions: [...DEFAULT_BABEL_EXTENSIONS, '.ts', '.tsx'],
        })
    ]
};