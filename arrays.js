

console.log("Hello world.")

let testArray = [1, 2, 3, 4, 5, 6]

let expandedArray = [0, 1, false, 2, undefined, '', 3, null]

let zoo = ["Lion", "Tiger", "Bear", "Penguin", "Dragon", "Tree", "Cheeseburger"]

let word = "Chunky"

let otherWord = "Iowa"

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

function compareArray (array) {
    let biggestNum = array[0]
    array.forEach(value => {
        if (biggestNum < value) {
            biggestNum = value
        }
    });
    console.log(`The biggest number in the array is: ${biggestNum}`)
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

//fillArray(3, 'a')

//reverseArray(testArray)

//compactArray(expandedArray)

//compareArray(testArray)

//avgArray(testArray)

//countOdd(testArray)

//findFavAnimal(zoo, "Cheeseburger")
//findFavAnimal(zoo, "Pizza")

findVowel(word)
findVowel(otherWord)