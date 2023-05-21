// Define a function 'truncate' that returns a shortened phrase based on a complete phrase provided by the user. The user also should provide the 'limit' (aprox number of characters).
// Adds '...' at the end of the resulting string.
// Don't end in the middle of a word.

// function truncate(phrase, limit){
//     const end = phrase.indexOf(' ',limit )

//     return phrase.substring(0, end) + '...'
// }

// const phrase = 'I told my wife she should embrace her mistakes. She hugged me'

// console.log(truncate(phrase, 12))

// Define a function that returns an array of unique words in a provided phrase.

const phrase = 'I walked into the kitchen and realized I had forgotten why I walked into the kitchen so I walked out of the kitchen only to remember why I walked into the kitchen and walked back into the kitchen again.'

function uniqueWords(phrase){
    const words = phrase.split(' ')
    const unique_words = []

    for(const word of words){
        if(unique_words.includes(word) == false ){
            unique_words.push(word)
        }

    }

    return unique_words

}

console.log( uniqueWords(phrase) )