function capitalize(string){
    let stringNormal = string.toLowerCase();
    let firstLetterChanged = stringNormal.charAt(0).toUpperCase() + stringNormal.slice(1);
    return firstLetterChanged;
}



function reverseString(string){
    return string.split('').reverse().join('');
    

}

const calculator = {
    Add : function(a, b){
        return a + b;
    },
    Subtract : function(a, b){
        return a - b;
    },
    Divide : function(a, b){
        return a / b;
    },
    Multiply : function(a, b){
        return a * b;
    }
}

function ceasarCipher(str, num){
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
        'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]
    let wordLower = str.toLowerCase();
    let wordArr = wordLower.split('');
    let newWordArr = [];
    let newWord;
    
    wordArr.forEach(element => {
        let letterIndex =  letters.indexOf(element);

        if(letterIndex === -1){
          newWordArr.push(element);
        }
        else{
            let newIndex = (letterIndex + num) % 26;
            newWordArr.push(letters[newIndex]);
        }

        
      });

      newWord = newWordArr.join('');

      return newWord;

}

function analyseArray(arr){

   let obj = {  
        average: avg(arr),
        min: minV(arr), 
        max: maxV(arr),
        length: lengthA(arr)
    };

    function avg(arr){

        let sum = arr.reduce((acc, curr) => acc + curr, 0);
        return sum / arr.length;
    }

    function minV(arr){
        let minVal = Math.min(...arr)
        return minVal;
    }

    function maxV(arr){
        let maxVal = Math.max(...arr);
        return maxVal
    }

    function lengthA(arr){
        return arr.length;
    }

    return obj;
}
module.exports = {capitalize, reverseString, calculator, ceasarCipher, analyseArray};