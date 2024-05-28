function twoSum(nums, target) {
    
    const numIndices = {};

    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const comp = target - num;

        
        if (numIndices.hasOwnProperty(comp)) {
            return [numIndices[comp], i];
        }

        numIndices[num] = i;
    }

}

const nums = [3,2,4];

const target = 6;
const result = twoSum(nums,target);

console.log(result); 
