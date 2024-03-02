/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(n>0){
        [2,3,5].forEach((prime) => {
        while(n % prime === 0){
            n = Math.round(n/prime)
        }
    })

    return n === 1;
    } 
    return false;
};
