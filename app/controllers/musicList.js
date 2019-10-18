module.exports = {
    'GET /': async (ctx, next) => {
        const songNames = ['林志炫 - your eyes.mp3',
            'Olivia Ong - Sometimes When We Touch.flac',
            'Queen - Love of My Life.flac',
            'Tamas Wells - Valder Fields.flac',
            '于文文 - 体面.flac',
            '倍賞千恵子 - 人生旋转木马.flac',
            '周传雄 - 冬天的秘密.flac',
            '岑宁儿 - 追光者.flac',
            '岸部眞明 - Time travel.flac',
            '林志炫 - 空.flac',
            '毛不易 - 平凡的一天.flac',
            '米津玄師 - Lemon.flac',
            '陈淑桦 - 滚滚红尘.flac',
            '黄阅 - 折子戏.flac',
            '齐秦 - 花祭.flac',
            '齐豫 - 橄榄树.flac']

        const imageNames = [
            '026d3f336f4a6669a4a27be624c4dbe3.jpg',
            '6f5d0946a1a9ebe1382a83aa2504d664.jpg',
            '0d469778b0dbb0705f5abcf1e5405a56.jpg',
            '80b15a183d344448784fbfed4f66da34.jpg',
            '21300375f53e7c8b1f6aa85f17b1cc0e.jpg',
            '80e4d63047a6394a87596b2e9a36496a.jpg',
            '4141b6a8e67f68a41ef8fefeb982155c.jpg',
            '878899ef9bf07bf129763e99dc56f833.jpg',
            '450338370027e84bc7a3c7f83fddcc14.jpg',
            'c41e2dd6bbf2c2f10d1ad399276d37aa.jpg']


        const songs = songNames.map(name => {
            const matched = name.match(/([^-]+)\s\-\s([^.]+)\.(flac|mp3)$/)
            const author = matched[1]
            const songName = matched[2]
            const imageName = imageNames[Math.floor(Math.random() * 10)]
            return {
                name: songName,
                author,
                url: `http://47.104.221.137/static/audio/${name}`,
                image: `http://47.104.221.137/static/images/${imageName}`
            }
        })
        const authorPhoto = imageNames[Math.floor(Math.random() * 10)]
        const photo = imageNames[Math.floor(Math.random() * 10)]
        ctx.body = {
            pageTitle: '歌单',
            title: '韩语治愈|IU窝在耳朵里的阳光',
            photo: `http://47.104.221.137/static/images/${photo}`,
            description: '在模仿人类嗓音的美妙与细微方面，没有乐器能和小提琴相比较',
            author: {
                name: '不落静修',
                photo: `http://47.104.221.137/static/images/${authorPhoto}`
            },
            reviews: 22,
            shares: 333,
            songs
        }
        await next()
    }
}