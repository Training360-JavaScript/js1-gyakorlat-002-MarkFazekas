/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/
const generateList = (array) => {
    const listElements = array.map(value => `<li>${value}</li>`)
    listElements.unshift("<ul>")
    listElements.push("</ul>")
    return listElements.join();
}