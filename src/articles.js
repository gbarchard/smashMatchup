import characterList from './characterList';

class Article {
    constructor(charLeft,charRight) {
        this.id = (charLeft.id+charRight.id)
        this.characterPlayingAs = charLeft.name
        this.characterPlayingAgainst = charRight.name
        this.characterPlayingAsAvatar = charLeft.avatar
        this.characterPlayingAgainstAvatar = charRight.avatar
        this.title = (charLeft.name+' vs '+charRight.name)
        this.matchupNumber = -1
        this.notes = ('How to play against '+charRight.name+' as '+charLeft.name)
        this.chooseStages = []
        this.banStages = []
        this.vods = [
            {
                youtubeId: "SqHRtURYQPo",
                topName: "Mkleo",
                bottomName: "BestNess",
                tournamentSet: "Evo 2019 Grand Finals",
                scoreTop: "3",
                scoreBottom: "2"
            },
            {
                youtubeId: "n85xcNK_cHQ",
                topName: "Untaymed",
                bottomName: "Toast",
                tournamentSet: "The Bird House 29 Grand Finals",
                scoreTop: "3",
                scoreBottom: "2"
            },
            {

            }
        ]
    }
}

const articles = [new Article(characterList[0],characterList[0])]
articles[0].characterPlayingAs = "Mario"
articles[0].characterPlayingAgainst = "Mario"
articles[0].chooseStages = []
articles[0].banStages = []
articles[0].id = '000000'
articles[0].notes = 'Select 2 Characters'

characterList.forEach(charLeft => {
    characterList.forEach(charRight => {
        articles.push(new Article(charLeft,charRight))
    })
})

export default articles