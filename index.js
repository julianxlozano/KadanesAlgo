//let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

/*function largestSubarraySum(a){
    let local_maximums = []    
    const add = arr => arr.reduce((a,b)=>a+b)

    for (let i = 0; i < a.length; i++){
       let new_a = a.slice(i)
       let sum = add(new_a)
       local_maximums.push(sum)
    }
    let maxSumOfSums = Math.max(...local_maximums)
    return maxSumOfSums
}*/


function largestSubarraySum(array){

    let local_max = 0;
    let global_max = Number.NEGATIVE_INFINITY
  

    for (let i = 0; i < array.length; i++){
        local_max = Math.max(array[i],array[i] + local_max)
        if (local_max > global_max){
            global_max = local_max
        }

    }

return global_max
  
}

