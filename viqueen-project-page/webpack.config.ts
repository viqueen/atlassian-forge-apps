import { Configuration } from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
    mode: 'development',
    entry: {
        main: './main/index.tsx'
    },
    resolve: {
        extensions: ['.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    target: 'web',
    output: {
        filename: '[name].js',
        path: path.resolve(process.cwd(), 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './main/index.html'
        })
    ]
};

export default config;
