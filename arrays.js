

console.log("Hello world.")

let testArray = [1, 2, 3]

let expandedArray = [0, 1, false, 2, undefined, '', 3, null]

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

fillArray(3, 'a')

reverseArray(testArray)

compactArray(expandedArray)