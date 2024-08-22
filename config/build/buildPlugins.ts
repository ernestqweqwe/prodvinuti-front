import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    // плагин для генерации html файла
    new HTMLWebpackPlugin({
      template: paths.html, // выбираем шаблон для генерации index.html(в папке public)
    }),
    // плагин для отображения прогресса сборки
    new webpack.ProgressPlugin(),
  ];
}
