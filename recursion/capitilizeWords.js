function capitalizedWords (words) {
    // base case
    if (words.length === 1) {
        return [words[0].toUpperCase()];
    }

    let final = capitalizedWords(words.slice(0, -1));

    final.push(words.slice(words.length - 1)[0].toUpperCase());

    return final;
}

let words = ['i', 'am', 'learning', 'recursion'];

console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']