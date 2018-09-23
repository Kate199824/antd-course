export default {
    plugins: [
        ['umi-plugin-react', {
            // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
        }],
    ],
    singular: true,//使用单数作为约定目录
    routes: [{//使用配置路由，不用默认路由
        path: '/',
        component: './HelloWorld',//相对page目录的路径
    }]
};