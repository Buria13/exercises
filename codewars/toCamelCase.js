function toCamelCase(str){
    return str.replace(/(?<=_|-)\w/g, s => s.toUpperCase()).replace(/-|_/g, '')

}

console.log(toCamelCase("the-stealth-warrior")); // returns "TheStealthWarrior"