const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(results){
    const novaTag = document.createElement("div");
    const conteudoNovo = document.createTextNode(results);
    novaTag.appendChild(conteudoNovo);
    document.body.insertAdjacentElement("beforebegin", novaTag);

}

function kata1() {
    let results = [];
    for (let i = 0; i<25; i++){
        results[i] = (i+1)+' ';
        
 }
    showResults(results)
    return results;
}
kata1();

function kata2() {
    let results = [];
    let contador = 25
    for (let i = 0; i<25; i++){
        results[i] = (contador)+' ';
        contador = contador-1   
    }
    showResults(results);
    return results;
}
kata2();

function kata3() {
    let results = [];
    let contador = -1
    for (let i = 0; i<25; i++){
        results[i] = (contador)+' ';
        contador = contador - 1   
 }
    showResults(results);
    return results;
}

kata3();

function kata4() {
    let results = [];
    let contador = -25
    for (let i = 0; i<25; i++){
        results[i] = (contador)+' ';
        contador = contador + 1;   
 }
    showResults(results)
    return results;
}
kata4();

function kata5() {
    let results = [];
    let contador = 0;
    for (i = -25; i <= 25; i++ ){
        if (i % 2 !== 0){
            results[contador] = i +' ';
            contador = contador + 1; 
        }
    }
    showResults(results);
     return results;
}
kata5();

function kata6() {
    let results = [];
    let = contador = 0
    for (i = 0; i < 100; i++ ){
        if (i % 3 ===0 ){
            results[contador] = i + ' ';
            contador = contador + 1 
        }
    }
    
    showResults(results) 
     return results;
}
kata6();

function kata7() {
    let results = [];
    let = contador = 0
    for (i = 0; i < 100; i++ ){
        if (i % 7 ===0 ){
            results[contador] = i + ' ';
            contador = contador + 1 
        }
    }
    
   showResults(results) 
   return results;
}
kata7();

function kata8() {
    let results = [];
    let = contador = 0
    for (i = 100; i > 0; i-- ){
        if ((i % 7 ===0) || (i % 3 ===0)){
            results[contador] = i + ' ';
            contador = contador + 1; 
        }
    }
   showResults(results)
   return results;
}
kata8();

function kata9() {
    let results = [];
    let = contador = 0
    for (i = 0; i <= 100; i++ ){
        if ((i % 2 !==0) && (i % 5 ===0)){
            results[contador] = i + ' ';
            contador = contador + 1; 
        }
    }
   showResults(results) 
   return results;
}
kata9()

function kata10() {
    let results = sampleArray;
    showResults(results);
    return results;
}
kata10()

function kata11() {
   let results = [];
   let contador = 0;
   for (i = 0; i <= sampleArray.length; i++){
       if (sampleArray[i] % 2 ===0 ){
           results[contador] = sampleArray[i];
           contador = contador + 1; 
        }
    }
    showResults(results);
    return results;
}
kata11();

function kata12() {
    let results = [];
    let contador = 0;
    for (i = 0; i <= sampleArray.length; i++){
        if (sampleArray[i] % 2 !==0 ){
            results[contador] = sampleArray[i];
            contador = contador + 1; 
         }
     }
    showResults(results);
    return results;
 }
kata12();

function kata13() {
    let results = [];
    let contador = 0;
    for (i = 0; i <= sampleArray.length; i++){
        if (sampleArray[i] % 8 ===0 ){
            results[contador] = sampleArray[i];
            contador = contador + 1; 
         }
     }
     showResults(results);
     return results;
 }
kata13();

function kata14() {
    let results = [];
    for (i = 0; i <= sampleArray.length; i++){
            results[i] = sampleArray[i] * sampleArray[i];
         }
     showResults(results);
     return results;
 }
kata14();

function kata15() {
   let results = 0;
   for (i = 0; i <= 20; i++){
   results =  results + i;
   }
     showResults(results);
     return results;
}
kata15();

function kata16() {
    let results = 0 ;
    for (i = 0; i <= (sampleArray.length - 1); i++){
    results =  results + sampleArray[i];
    }
     showResults(results);
     return results;
 }
 kata16();


function kata17() {
    let results = sampleArray[0];
    for (i = 0; i <= sampleArray.length; i++){
        if (results > sampleArray[i]){
            results = sampleArray [i]; 
        }  
    }
     showResults(results);
     return results;
}
kata17();

function kata18() {
    let results = sampleArray[0];
    for (i = 0; i <= sampleArray.length; i++){
        if (results < sampleArray[i]){
            results = sampleArray [i]; 
        }  
    }
     showResults(results);
     return results;
}
kata18();


/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
   
}
function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
