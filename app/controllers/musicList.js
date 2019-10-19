const resourceService = require('../services/resourceService')
module.exports = {
    'GET /': async (ctx, next) => {
        const songNames = resourceService.getMusicList()

        const imageNames = resourceService.getImageList()


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