module.exports = {
  name: 'vue-components-lib-demo',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/vue-components-lib-demo/',
    },
  },
  site: {
    title: 'vue-components-lib-demo',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
          {
            path: 'response-img',
            title: 'ResponseImg',
          },
        ],
      },
      {
        title: 'Utils',
        items: [
          {
            path: 'utils',
            title: 'Utils',
          },
        ],
      }
    ],
  },
};
