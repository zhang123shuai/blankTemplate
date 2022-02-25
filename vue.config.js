// module.exports = {
//   publicPath: './',
//   devServer: {
//     host: "192.168.120.16",
//     port: "4080",
//     // https:false,
//     // open: true,
//     //以上的ip和端口是我们本机的;下面为需要跨域的
//     // proxy: {
//     //   //配置跨域
//     //   "/sso": {
//     //     target: "http://192.168.130.156:8089",
//     //     ws: true,
//     //     changeOrigin: true, //允许跨域
//     //     pathRewrie: {
//     //       "^/sso": "", //请求的时候使用这个api就可以
//     //     },
//     //   }
//     // },
//   },
// };
module.exports = {
    publicPath: './',
    devServer: {
        open: true, // 设置项目打开后浏览器自动打开
        disableHostCheck: true,
    }
}
