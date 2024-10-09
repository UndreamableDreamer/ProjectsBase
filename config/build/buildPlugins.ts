import { Configuration, ProgressPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from './types/types';

export function BuildPlugins({mode, paths}: BuildOptions): Configuration['plugins'] {
  const isDevelop = mode === 'development';
  const isProduction = mode === 'production';

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: paths.html })
  ];

  if (isDevelop) {
    plugins.push(new ProgressPlugin());
  }

  if (isProduction) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }));
  }

  return plugins;
}
