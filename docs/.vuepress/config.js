module.exports = {
  title: 'zutai-doc',
  description: '组态文档',
  // dest: './docs/.vuepress/dist',  // 设置输出目录
  base: '/zutai-doc/',
  themeConfig: {
    nav: [
        {
        text: '主页',
        link: '/'
      },
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/zahngjjj/zutai-doc.git'
      }
    ],
    sidebar: [
      {
        title: '工具栏',
        collapsable: false,
        children: [
          ['/guide/toolbar/asp-alarm-tag', '工具栏']
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
};