const path = require("path")
module.exports = {
    lintOnSave: false,
    pages: {
        index: {
            entry: "examples/main.js",
            template: "public/index.html",
            filename: "index.html"
        }
    },
    chainWebpack: config => {
        config.module
            .rule("js")
            .include
            .add("/packages")
            .end()
            .use("babel")
            .loader("babel-loader")
            .tap(options => {
                return options
            })
    },
    configureWebpack: {
        module: {
            rules: [{
                test: /\.md$/,
                use: [{
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            }
                        }
                    },
                    {
                        loader: path.resolve(__dirname, './build/md-loader/index.js')
                    }
                ]
            }]

        }
    }


}