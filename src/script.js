const combine = (...arrs) =>
    arrs.reduce((acc, arr, i) => {
        console.log(i)
        return arr.forEach((item, j) => {
            console.log(j);
            acc[j * arrs.length + i] = item }
        ), acc;
    }, []).filter(Boolean);

console.log(combine([33,44,55], [1, 2, 3, 4, 5], [6, 7], [8],[45, 66]))