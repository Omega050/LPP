function sumAll(...nums){
    let total=0
    for(let n of nums){
        total+=n
    }
    return total
}

console.log(sumAll(12, 23, 23, 100000))