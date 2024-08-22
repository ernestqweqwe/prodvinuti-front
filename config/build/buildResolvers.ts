import { ResolveOptions } from 'webpack';

export function buildResolvers(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // позваляет для файлов с данными расширениями не указывать полный путь при импорте (напр import {someFn} from './test') без .js
  };
}
