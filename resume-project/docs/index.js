import Vue from 'vue'
// require.context(directory,useSubdirectories,regExp)
// directory:表示检索的目录
// useSubdirectories：表示是否检索子文件夹
// regExp:匹配文件的正则表达式,一般是文件名
// 例如 require.context("@/views/components",false,/\.vue$/)

const comps = require.context('components/', true, /\.vue$/)

const modules = {}
comps.keys().forEach(comp => {
    const name = comp.basename(comp, '.vue') || comp.replace(/\.\/(.*)\.vue/, '$1')
    modules[name] = comps[comp].default || comps[comp].name
    Vue.component(name, comps[comp])
});


export default {
    components: modules
}