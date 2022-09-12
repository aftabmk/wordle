import wordBank from './wordle.txt'
export const boardDefault =
[
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""]
];

export const generateWordSet= async() =>
{
    let wordSet;
    let Guess;
    await fetch(wordBank)
    .then((res)=>res.text())
    .then((data)=>{
        const wordArr = data.split("\r\n");
        Guess = wordArr[Math.floor(Math.random()*wordArr.length)]
        wordSet = new Set(wordArr)
    })
    return { wordSet, Guess }
}