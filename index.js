var intersection = function(nums1, nums2) {
  const nums = [...new Set(nums1)].concat([...new Set(nums2)]);
  return nums.filter((num, index) => nums.indexOf(num) !== index);
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
