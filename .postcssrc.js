module.exports = {
    plugins: {
      autoprefixer: {}, // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
      "postcss-px-to-viewport": {
        unitToConvert: "px", // 需要转换的单位，默认为"px"
        viewportWidth: 1920, // UI设计稿的宽度
        unitPrecision: 6, // 转换后的精度，即小数点位数
        propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
        viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
        fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
        selectorBlackList: ["wrap"], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位
        minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
        mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
        replace: true, // 是否直接更换属性值，而不添加备用属性
        exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件，用正则做目录名匹配，例如 'node_modules' 下的文件
        landscape: false, // 是否处理横屏情况
        landscapeUnit: "vw", // 横屏时使用的视窗单位，默认vw
        landscapeWidth: 2048 // 横屏时使用的视口宽度
      }
    }
  };