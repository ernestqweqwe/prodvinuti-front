import path from 'path';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode } = options;

  return {
    mode,
    entry: paths.entry, // __dirname - папка в которой мы находимся
    output: {
      filename: '[name].[contenthash].js', // Имя файла, в который будет сохранен результат сборки
      path: paths.build, // Папка, куда сохраняем bundle.js
      clean: true, // Очистка папки build перед сборкой
    },
    plugins: buildPlugins(options),

    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
}
