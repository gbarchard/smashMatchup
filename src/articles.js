import characterList from './characterList';

class Article {
    constructor(charLeft,charRight) {
        this.id = (charLeft.id+charRight.id)
        this.title = (charLeft.name+' vs '+charRight.name)
        this.notes = ('How to play against '+charRight.name+' as '+charLeft.name)
    }
}

const articles = [new Article(characterList[0],characterList[0])]
articles[0].id = '000000'
articles[0].notes = 'Select 2 Characters'

characterList.forEach(charLeft => {
    characterList.forEach(charRight => {
        articles.push(new Article(charLeft,charRight))
    })
})


export default articles