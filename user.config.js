// Config your info here
export default {
    // 博主
    author: 'Rosario S.E.',
    // 如 https://weibo.com/u/6867589681
    // weibo: '6867589681',
    // 微信二维码，默认位于 `images/` 中
    // wechat: 'bg/wechat.jpg',
    email: '3vau@sina.cn',
    // 如 https://github.com/loveminimal
    github: '3vau',
    // 如 https://space.bilibili.com/11608450
    // bilibili: '11608450',
    // icp: '豫ICP备19900901号',
    // 指定卡片风格页面
    // 当 `activeAll` 为 `true` 时，所有页面激活卡片风格
    // 另外，当你的文件名以 `*-card.org` 这样的格式结尾时，也会激活卡片风格
    card: {
        activeAll: false,
        pages: [
            'idea',
            'gtd',
            'story',
            'wiki',
            'journal',
        ],
    },
    // 加密的页面
    encrypt: {
        password: '123456',
        // 你的私有页面
        pages: ['foo', 'bar'],
    },
    // // 不显示评论的页面，首页默认不显示
    // nonvaline: ['nav', '404']
};
