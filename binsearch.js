const binarySearch = (arr, target) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (target === arr[middleIndex]) {
            return middleIndex;
        }

        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }

    return -1;
};

const arr = [-3, 1, 56, 5435, 912934];

console.log(binarySearch(arr, 56));
