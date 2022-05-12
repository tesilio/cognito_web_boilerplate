const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
    const config = {
        entry: {
            app: [
                './src/index.js',
            ]
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js',
            // publicPath: '/dist/',
        },
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    use: 'babel-loader',
                    include: path.join(__dirname),
                    exclude: /(node_modules)|(dist)/,
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        }
    };

    if(options.mode === 'development'){
        //... Development 설정
        config.plugins = [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                inject: "body",
                template: './src/index.html',
                showErrors: true // 에러 발생시 메세지가 브라우저 화면에 노출 된다.
            })
        ];

        config.devtool = 'inline-source-map';

        config.devServer = {
            hot: true, // 서버에서 HMR을 켠다.
            host: '0.0.0.0', // 디폴트로는 "localhost" 로 잡혀있다. 외부에서 개발 서버에 접속해서 테스트하기 위해서는 '0.0.0.0'으로 설정해야 한다.
            contentBase: './src', // 개발서버의 루트 경로
            stats: {
                color: true
            }
        };
    }else if(options.mode === 'production'){
        //... Production 설정
        config.plugins = [
            new CleanWebpackPlugin(['dist'])
        ];
    }else{
        return false;
    }

    return config;
};
