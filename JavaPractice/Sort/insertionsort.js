function insertionSort(inputArr) {
    let n = inputArr.length; //dizinin eleman sayısı bulunmalı!!
        for (let i = 1; i < n; i++) {
            // sıralı olmayan dizide ilk elemanın seçilmesi
            let current = inputArr[i];
            
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}

let inputArr = [5, 2, 4, 6, 1, 3, 8, 12 , 9, 18, 21, 7, 11, 10];
insertionSort(inputArr);
console.log(inputArr);