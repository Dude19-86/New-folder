// const combine = (...arrs) =>
//     arrs.reduce((acc, arr, i) => {
//         console.log(i)
//         return arr.forEach((item, j) => {
//             console.log(j);
//             acc[j * arrs.length + i] = item }
//         ), acc;
//     }, []).filter(Boolean);
//
// console.log(combine([33,44,55], [1, 2, 3, 4, 5], [6, 7], [8],[45, 66]))


// function squareOrSquareRoot(array) {
//     return array.map(e => Math.sqrt(e) % 1 === 0 ? Math.sqrt(e) : Math.pow(e, 2));
// }
//
// console.log(squareOrSquareRoot([3,9,25,49,16,5]))

function min(arr, toReturn) {
    let minNum = arr[0];
    let minInd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i];
            minInd = i;
        }
    }
    return toReturn === 'value' ? minNum : minInd
}

console.log(min([6,3,4,5], 'index'))