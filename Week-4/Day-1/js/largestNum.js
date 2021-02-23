let numList = [1,4,8,3,9,0,1]
let num = 0

for (i = 0; i <= numList.length; i++) {
    if (numList[i] > num) {
        num = numList[i]
    }
}

console.log(num)