function insertionSort(){
    let atual;
    let vetor = [1, 5, 2, 7, 4, 3, 8, 6, 9]
        
    for (let i = 1; i < vetor.length; i++){
        let j = i - 1;
        atual = vetor[i];
        while(j >= 0 && atual < vetor[j]){
            vetor[j+1] = vetor[j];
            j--;
        }
        vetor[j+1] = atual;
    }
    return vetor;  
}

console.log(insertionSort());