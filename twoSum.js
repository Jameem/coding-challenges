let temp = {}
let twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let minusValue = target - nums[i]

    if (temp[minusValue] !== undefined) {
      return [i, nums.indexOf(minusValue)]
    } else {
      temp[nums[i]] = nums[i]
    }
  }
}
let nums = [0, 4, 3, 0]

const result = twoSum(nums, 0)
