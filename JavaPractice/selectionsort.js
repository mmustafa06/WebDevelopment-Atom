function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // dizide yer alan elemanların en küçüğünü bulmamız gerekiyor.
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // eleman yer değiştirme işlemi
             // geçiçi olarak i'nci elamanı saklamamız gerekiyor. 
             //çünkü min değer i elemanının konumuna yerleştirilecek
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min]; // min değeri i elamanının yerine yerleştirdik
             inputArr[min] = tmp;  // i'nci sırada olan elemanı min olan elamanın konumuna yerleştiriyoruz   
        }
    }
    return inputArr; // elde ettiğimiz yeni diziyi sonuç olarak geri dönüyoruz.
}

let inputArr = [5, 2, 4, 6, 1, 3, 6, 9, 7, 8, 13, 16, 12, 10,]; // dizimizi tanımladık
selectionSort(inputArr); // dizimizi fonksiyonumuza gönderiyoruz.
console.log(inputArr); // fonksiyonumuz içerisinde sıralı hale gelen diziyi konsola yazdırıyoruz.