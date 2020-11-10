

console.log("Hello world.")

let testArray = [1, 2, 3, 4, 5, 6]

let expandedArray = [0, 1, false, 2, undefined, '', 3, null]

let zoo = ["Lion", "Tiger", "Bear", "Penguin", "Dragon", "Tree", "Cheeseburger"]

let word = "Chunky"

let otherWord = "Iowa"

let palindrome = "tacocat"

let sentence = "The quick brown fox jumped over the lazy dog"

let simpleSentence = "Bob climbed a tree."

let bigSentence = "I am the very model of a modern major general."

function fillArray (length, value) {
    let fullArray = []
    for (i = 0;i < length;i ++) {
        fullArray.push(value)
        console.log("Pushing value")
    }
    console.log(fullArray)
}

function reverseArray (array) {
    console.log(array)
    let revertedArray = array.map((number, value) => {
        //console.log(`Selected number: ${array.length - value - 1}`)
        return array[array.length - value - 1]
    })
    console.log(revertedArray)
}

function compactArray (array) {
    console.log(array)
    let compactedArray = array.filter((value) => {
        if (value === 0) {
            return false
        } else if (value === '') {
            return false
        } else if (value === false) {
            return false
        } else if (value === null) {
            return false
        } else if (value === undefined) {
            return false
        } else {
            return true
        }
    })
    console.log(compactedArray)
}

function compareArrayMax (array) {
    let biggestNum = array[0]
    array.forEach(value => {
        if (biggestNum < value) {
            biggestNum = value
        }
    });
    console.log(`The biggest number in the array is: ${biggestNum}`)
}

function compareArrayMin (array) {
    let smallestNum = array[0]
    array.forEach(value => {
        if (smallestNum < value) {
            smallestNum = value
        }
    });
    console.log(`The biggest number in the array is: ${smallestNum}`)
}

function avgArray (array) {
    let totArray = 0 
    array.forEach(value => {
        totArray += value
    })
    console.log(`The average of all the array values is: ${totArray/array.length}`)
}

function countOdd (array) {
    let oddCount = 0
    array.forEach(value => {
        if (value % 2 !== 0) {
            oddCount ++
        }
    })
    console.log(`There are ${oddCount} odd numbers in the array.`)
}

function findFavAnimal (array, favorite) {
    let isFavorite = false
    array.forEach(animal => {
        if (animal === favorite) {
            isFavorite = true
        }
    })
    if (isFavorite) {
        console.log(`There is a ${favorite} in the zoo!`)
    } else {
        console.log(`There isn't a ${favorite} in the zoo.`)
    }
}

function findVowel (word) {
    let firstVowel = undefined
    let index =  undefined 
    for (i = 0;i < word.length;i ++) {
        if (firstVowel === undefined) {
            if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u" || word[i] === "A" || word[i] === "E" || word[i] === "I" || word[i] === "O" || word[i] === "U") {
                firstVowel = word[i]
                index = i
            }
        }
    }
    console.log(`The first vowel is ${firstVowel}, at index ${index}.`)
}

function reverseString (string) {
    let output = []
    for (i = 0;i < string.length;i ++) {
        output[i] = string[string.length-i-1]
    }
    return output
}

function checkPalindrome (word) {
    let isPalindrome = true
    for (i = 0;i < word.length;i ++) {
        if (word[i] !== word[word.length-i-1]) {
            isPalindrome = false
        }
    }
    return isPalindrome
}

function reverseWordsInSentence (sentence) {
    let spaceLocations = []
    let output = []
    for (i = 0;i < sentence.length;i ++) {
        if(sentence[i] === " ") {
            spaceLocations.push(i)
        } else if (i + 1 === sentence.length) {
            spaceLocations.push(i + 1)
        }
        //console.log(`Checking index ${i} for a space.`)
    }
    //console.log(spaceLocations)
    for (i = 0;i < spaceLocations.length;i ++) {
        if (i === 0) {
            for (j = 0;j < spaceLocations[i];j ++) {
                output.push(sentence[spaceLocations[i]-j-1])
                //console.log(`The starting value used is 0`)
            }
        } else {
            for (j = 0;j < spaceLocations[i] - spaceLocations[i-1] - 1;j ++) {
                output.push(sentence[spaceLocations[i]-j-1])
                //console.log(`sL[i-1]=${spaceLocations[i-1]}`)
                //console.log(`sL[i]=${spaceLocations[i]}`)
                //console.log(`sL[i]-j-1=${spaceLocations[i]-j-1}`)
                //console.log(`j=${j}`)
                //console.log(`The starting value used is ${spaceLocations[i-1]}`)
            }
        }
        if (i + 1 !== spaceLocations.length) {
            output.push(" ")
        }
        //console.log(`${i}`)
        //console.log(spaceLocations[0])
        //console.log(spaceLocations[1])
        //console.log(`Run ${i+1} times`)
    }
    return output
}

//fillArray(3, 'a')

//reverseArray(testArray)

//compactArray(expandedArray)

//compareArrayMax(testArray)

//avgArray(testArray)

//countOdd(testArray)

//findFavAnimal(zoo, "Cheeseburger")
//findFavAnimal(zoo, "Pizza")

//findVowel(word)
//findVowel(otherWord)

//console.log(reverseString(word))

//checkPalindrome(word)

//checkPalindrome(palindrome)

//console.log(reverseWordsInSentence(simpleSentence))

//console.log(reverseWordsInSentence(bigSentence))