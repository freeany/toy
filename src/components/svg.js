// 1. 自定义svg-icon组件
// 2. 自动加载svg目录下的所有svg文件
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

Vue.component('svg-icon', SvgIcon)

// 自动导入所有的文件svg文件
const req = require.context('../assets/icons', false, /\.svg$/)
req.keys().map(req)
