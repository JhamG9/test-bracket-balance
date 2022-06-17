function validateBracketBalance(value) {
    const keys = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    let characters = [];


    for (let i = 0; i < value.length; i++) {
        if (keys[value[i]]) {
            characters.push(keys[value[i]]);
        } else {
            if (characters.pop() !== value[i]) {
                return false;
            }
        }
    }
    return true;
}
console.log("1", validateBracketBalance('{}[]()')); // true
console.log("2", validateBracketBalance('{}[]({)]')); // false
console.log("3", validateBracketBalance('{()}([])')); // false
