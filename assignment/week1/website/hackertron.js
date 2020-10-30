myArray = [1,3,9,9,27,81];
rr = 3;

console.log(countTriplets(myArray, rr));

function countTriplets(arr, r) {
    totalCount = 0;
    const possibility = {};
    const combos = {};
    

    arr.forEach((number) => {
        
        totalCount += (combos[number] || 0);
      
        const nextNumber = number * r;
       
        combos[nextNumber] = (
            (combos[nextNumber] || 0) + (possibility[number] || 0)
        );
       
        possibility[nextNumber] = (possibility[nextNumber] || 0) + 1;
      
      
    });

    

    return totalCount;
}