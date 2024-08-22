// const path = require('path'); // Стандартный модуль в ноде
// const HTMLWebpackPlugin = require('html-webpack-plugin'); // плагин для генерации html файла
// const webpack = require('webpack');
import webpack from 'webpack';
import path from 'path';

import HTMLWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.ts'), // __dirname - папка в которой мы находимся
  output: {
    filename: '[name].[contenthash].js', // Имя файла, в который будет сохранен результат сборки
    path: path.resolve(__dirname, 'build'), // Папка, куда сохраняем bundle.js
    clean: true, // Очистка папки build перед сборкой
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'), // выбираем шаблон для генерации index.html(в папке public)
    }), // плагин для генерации html файла
    new webpack.ProgressPlugin(), // плагин для отображения прогресса сборки
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // позваляет для файлов с данными расширениями не указывать полный путь при импорте (напр import {someFn} from './test') без .js
  },
};

export default config;
