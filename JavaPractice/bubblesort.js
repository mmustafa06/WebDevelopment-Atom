function bubbleSort(inputArr) {
    let n = inputArr.length;// dizinin uzunluğunu (dizinin kaç elemanlı olduğunu) hesaplıyoruz.
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            // karşılaştırma ve yer yerdeğiştirme işlemini yapmamız gerekiyor
            // eğer soldaki eleman sağdaki elemandan büyük ise yer değiştirme işlemi yapıyoruz.
             //yer değiştirme işlemi yaparken veri kaybı olmaması için tmp değişkenini kullanıyoruz
             //ilk önce atama yapılacak konudaki değeri tmp değişkenine atıyoruz.
             // daha sonra yerdeğiştirme işlemi yapıyoruz. ardından yerdeğiştirdiğimiz elamanın konumuna
             // tmp değişkeninde sakladığımız değeri yerleştiriyoruz.
            if(inputArr[j] > inputArr[j+1]){
                let t = inputArr[j];
                inputArr[j] = inputArr[j+1];
                inputArr[j+1] = t;
            }
        }
    }
    return inputArr; // elde ettiğimiz yeni diziyi sonuç olarak geri dönüyoruz.
}

let inputArr = [5, 1, 4, 2, 8, 3, 11, 7, 9, 17, 23, 10, 13]; //dizimizi tanımladık
bubbleSort(inputArr); // dizimizi fonksiyonumuza gönderiyoruz.
console.log(inputArr); // fonksiyonumuz içerisinde sıralı hale gelen diziyi konsola yazdırıyoruz.