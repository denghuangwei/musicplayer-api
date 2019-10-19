const resourceService = require('../services/resourceService')
const imageList = resourceService.getImageList()
function getImage() {
    const i = Math.floor(Math.random() * imageList.length)
    return 'http://47.104.221.137/static/images/' + imageList[i]
}
module.exports = {
    'GET /': async (ctx, next) => {
        const data = {
            "recommendSongs": [
                {
                    "name": "童话",
                    "author": "光良"
                },
                {
                    "name": "逍遥叹（仙剑奇侠传）",
                    "author": "胡歌"
                },
                {
                    "name": "时光诛仙",
                    "author": "任贤齐"
                },
                {
                    "name": "童话",
                    "author": "光良"
                },
                {
                    "name": "逍遥叹（仙剑奇侠传）",
                    "author": "胡歌"
                },
                {
                    "name": "时光诛仙",
                    "author": "任贤齐"
                }
            ],
            "newSongs": [
                {
                    "name": "童话",
                    "author": "光良"
                },
                {
                    "name": "逍遥叹（仙剑奇侠传）",
                    "author": "胡歌"
                },
                {
                    "name": "时光诛仙",
                    "author": "任贤齐"
                }
            ],
            "countrySelecteds": {
                "title": "云村精选",
                "selecteds": [
                    {
                        "tittle": "原创精选：好听的古风歌曲",
                        "content": "Lao-干妈-生死江湖",
                        "likes": 3168,
                        "reviews": 493
                    },
                    {
                        "tittle": "原创精选：好听的古风歌曲",
                        "content": "Lao-干妈-生死江湖",
                        "likes": 3168,
                        "reviews": 493
                    }
                ]
            }
        }
        data.recommendSongs.forEach(song => {
            song.image = getImage()
        })
        data.newSongs.forEach(song => {
            song.image = getImage()
        })
        data.countrySelecteds.selecteds.forEach(song => {
            song.image = getImage()
        })
        ctx.body = data
        await next()
    },
    'Get /nav-items': async (ctx, next) => {
        const data = [
            {
                "url": "Recommended-icon.png",
                "name": "每日推荐"
            },
            {
                "url": "Songlist-icon.png",
                "name": "歌单"
            },
            {
                "url": "Songchart-icon.png",
                "name": "排行榜"
            },
            {
                "url": "radio-icon.png",
                "name": "电台"
            },
            {
                "url": "LiveVideo-icon.png",
                "name": "直播"
            }
        ]
        ctx.body = data
        await next()
    }
}