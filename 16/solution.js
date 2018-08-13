/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = function(nums, target) {
    let closeSets = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j= 1; j < nums.length; j++) {
            for (let k = 2; k < nums.length; k++) {
                if (k !== i && j !== i && k !== j) {
                    let sum = nums[i]+nums[j]+nums[k];
                    closeSets.push({sum: sum, diff: sum-target});
                }
                else continue;
            }
        }
    }
    // console.log(closeSets);
    let minDiff = undefined, closeOne;
    for (let e=0; e<closeSets.length; e++) {
      let val = closeSets[e];
      let absDiff = Math.abs(val.diff);
      if (minDiff === undefined) {
        minDiff = absDiff;
        closeOne = val.sum;
      } else {
        if (absDiff < minDiff) {
          minDiff = absDiff;
          closeOne = val.sum;
        } else continue;
      }
    }
    return closeOne;
};
let result = threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82);
console.log(result);
