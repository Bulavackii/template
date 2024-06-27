const mix = require('laravel-mix');

mix.ts('client/src/index.tsx', 'public/js')
   .sass('client/src/assets/styles/main.scss', 'public/css')
   .webpackConfig({
     module: {
       rules: [
         {
           test: /\.pug$/,
           use: ['pug-loader'],
         },
       ],
     },
     resolve: {
       extensions: ['.ts', '.tsx', '.js', '.jsx'],
     },
   });