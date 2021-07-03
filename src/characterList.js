import characterNames from './data/characters.js'

function getCharacterIDByName(name) {
    return zeroPad(characterNames.indexOf(name)+1,3)
}

function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
  }
  

class Character {
    constructor(name) {
        this.name = name
        this.value = name
        this.id = getCharacterIDByName(name)
    }
}

const characterList = [new Character(characterNames[0])]
for(var i = 1; i < characterNames.length; i++){    
    characterList.push(new Character(characterNames[i]))
}
export default characterList