/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = function(nums, target) {
    let minDiff = undefined, closeOne;
    for (let i = 0; i < nums.length; i++) {
        for (let j= 1; j < nums.length; j++) {
            for (let k = 2; k < nums.length; k++) {
                if (k !== i && j !== i && k !== j) {
                    let sum = nums[i]+nums[j]+nums[k];
                    let absDiff = Math.abs(sum-target);
                    if (minDiff === undefined) {
                      minDiff = absDiff;
                      closeOne = sum;
                    } else {
                      if (absDiff < minDiff) {
                        minDiff = absDiff;
                        closeOne = sum;
                      } else continue;
                    }
                }
                else continue;
            }
        }
    }
    return closeOne;
};
let result = threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82);
console.log(result);
