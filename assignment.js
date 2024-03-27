function sumArray(arr) {
    let sum = 0;
    for (const num of arr) {
        
        sum += num;
    } 
    return sum;
}
const numbers = [1, 3, 5, 7];
console.log(sumArray(numbers));