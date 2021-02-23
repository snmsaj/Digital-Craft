let names = ["John","Mary", "Alex", "Steve", "Mary", "John"]
let newList = []

for (i = 0; i <= names.length; i++) {
    if (!(names[i] in newList)) {
        newList.push(names[i])
    }else{
        continue
    }
}

console.log(newList)