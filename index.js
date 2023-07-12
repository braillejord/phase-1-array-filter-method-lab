function findMatching(collection, name) {
    return collection.filter(
        (nameMatch) => nameMatch.toLowerCase() === name.toLowerCase()
    );
}

function fuzzyMatch(collection, name) {
    return collection.filter(
        (firstLetter) => firstLetter.charAt(0) === name.charAt(0)
    );
}

function matchName(collection, name) {
    return collection.filter(
        (nameMatch) => nameMatch.name === name
    );
}