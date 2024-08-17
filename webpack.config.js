const path = require('path') // Стандартный модуль в ноде

module.exports = {
    entry: path.resolve(__dirname, 'src','index.js'), // __dirname - папка в которой мы находимся
    output: {
        filename: 'bundle.js', // Имя файла, в который будет сохранен результат сборки
        path: path.resolve(__dirname, 'build'), // Папка, куда сохраняем bundle.js
    }
}