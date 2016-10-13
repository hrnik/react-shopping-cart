/**
 * Merge sort
 * https://www.youtube.com/watch?v=XaqR3G_NVoo =)
 * @param array
 * @param compare
 */
const mergeSort = (array, compare) => {
	//array contains one element - is sorted array
	if (array.length < 2){
		return array;
	}

	let median = Math.floor(array.length / 2),
		leftArray = array.slice(0, median),
		rightArray = array.slice(median);

	return merge(mergeSort(leftArray, compare), mergeSort(rightArray, compare), compare);
};

/**
 * inner function for merge 2 array
 * @param left
 * @param right
 * @param compare
 */
const merge = (left, right, compare) => {
	let result = [],
		leftIndex = 0,
		rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (compare(left[leftIndex], right[rightIndex]) <= 0) {
			result.push(left[leftIndex++]);
		} else {
			result.push(right[rightIndex++]);
		}
	}

	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};


export default mergeSort;