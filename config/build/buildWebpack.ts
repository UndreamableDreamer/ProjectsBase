import webpack from 'webpack';

import { buildDevServer } from './buildDevServer';
import { buildResolvers } from './buildResolvers';
import { buildLoaders } from './buildLoaders';
import { BuildPlugins } from './buildPlugins';
import { BuildOptions } from './types/types';


export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const {mode, paths} = options;
  const isDeveloping = mode === 'development' || undefined;

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: 'bundle.[contenthash:8].js',
      clean: true
    },
    plugins: BuildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devtool: isDeveloping && 'inline-source-map',
    devServer: isDeveloping ? buildDevServer(options) : undefined
  };
}
