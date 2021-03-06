import characterNames from './Data/characters.js'

function getCharacterIDByName(name) {
    return zeroPad(characterNames.indexOf(name)+1,3)
}

function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}

function nameToImage(name) {
    return name.replace(" ","-").toLowerCase()
}  

class Character {
    constructor(name) {
        this.name = name
        this.value = name
        this.id = getCharacterIDByName(name)
        this.avatar = "images/avatars/"+nameToImage(name)+"-avatar.png"
    }
}

const characterList = [new Character(characterNames[0])]
for(var i = 1; i < characterNames.length; i++){    
    characterList.push(new Character(characterNames[i]))
}
export default characterList