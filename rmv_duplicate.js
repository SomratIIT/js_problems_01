function f1(arr) {
    // Remove duplicates using Set
    const uniqueArr = [...new Set(arr)];
    
    const new1 = [];
    for (let i = 0; i < uniqueArr.length; i++) {
        if (uniqueArr[i] % 2 === 1) {
            new1.push(uniqueArr[i]);
        }
    }
    
    let sum = 0, avg;
    for (let i = 0; i < new1.length; i++) {
        sum = sum + new1[i];
    }
    avg = sum / new1.length;
    
    return avg;
}

const solution = f1([10, 20, 21, 22, 31, 41, 31, 21, 43]);

console.log('The Average is = ', solution);
 