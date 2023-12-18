import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import pxtovw from 'postcss-px-to-viewport'

// 配置参数（移动端适配）
const usePxToVw = pxtovw({
    unitToConvert: 'px', // 要转化的单位
    viewportWidth: 750, // UI设计稿的宽度
    unitPrecision: 5, // 转换后的精度，即小数点位数
    propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
    viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
    fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
    selectorBlackList: ['wrap'], // 指定不转换为视窗单位的类名，
    minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
    mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
    replace: true, // 是否转换后直接更换属性值
    exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
    landscape: false // 是否处理横屏情况
})
export default defineConfig((config) => {
    return {
        plugins: [react()],
        css: {
            postcss: {
                plugins: [usePxToVw]
            }
        },
        server: {
            host: '0.0.0.0',
            port: 5188 //vite项目启动时自定义端口
        },
        // 路径别名的配置
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                '@components': path.resolve(__dirname, './src/components'),
                '@assets': path.resolve(__dirname, './src/assets'),
                '@server': path.resolve(__dirname, './src/server'),
                '@utils': path.resolve(__dirname, './src/utils'),
                '@api': path.resolve(__dirname, './src/server/api'),
                '@store': path.resolve(__dirname, './src/store'),
                '@stores': path.resolve(__dirname, './src/stores'),
                '@pages': path.resolve(__dirname, './src/pages'),
                '@hooks': path.resolve(__dirname, './src/hooks'),
                '@constants': path.resolve(__dirname, './src/constants')
            }
        },
        // 调整控制台输出的级别 'info' | 'warn' | 'error' | 'silent'
        logLevel: config.mode === 'production' ? 'error' : 'info',
        build: {
            outDir: 'dist', // 指定输出目录
            assetsDir: 'assets', // 指定静态资源目录
            chunkSizeWarningLimit: 2000 // 文件大小警告限制（以字节为单位）
        },
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        chrome: '49',
                        ios: '10'
                    }
                }
            ]
        ]
    }
})
