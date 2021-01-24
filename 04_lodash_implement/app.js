const _ = {
    // Implement .clamp() of lodash.js library
      clamp(number, lower, upper){
        const lowerClampValue = Math.max(number, lower);
        const ClampValue = Math.min(lowerClampValue, upper);
        return ClampValue;
      },
    
    // Implement .inRange() of lodash.js library 
      inRange(number, start, end){
        if(end === undefined) {
          end = start;
          start = 0;
        } if(start > end){
          var temp = end;
          end = start;
          start = temp;
        }
        var isInRange = start <= number && number < end
        return isInRange
      },
    
    // Implement .words() of lodash.js library 
      words(string){
        let words = string.split(' ');
        return words
      },
    
    // Implement .pad() of lodash.js library 
      pad(string, length){
        if(string.length >= length){
          return string;
        };
        const startPaddingLength = Math.floor((length - string.length)/2);
        const endPaddingLength = length - string.length -  startPaddingLength;
        return ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
      },
    // Implement .has() of lodash.js library 
      has(object, key){
        const hasValue = (object[key] !== undefined);
        return hasValue;
      },
    // Implement .invert() of lodash.js library 
      invert(object) {
        let invertedObject = {};
        for(let k in object){
          const originalValue = object[k];
          invertedObject[originalValue] = k; 
          // invertedObject = {originalValue: k};
        }
        return invertedObject;
      },
    // Implement .findKey() of lodash.js library 
      findKey(object, predicate){
        for(let k in object){
          const value = object[k];
          const predicateReturnValue = predicate(value);
          if(predicateReturnValue){
            return k;
          }
        }
        return undefined;
      },
    // Implement .drop() of lodash.js library 
      drop(array, n){
        if(n === undefined){
          n = 1;
        }
        let droppedArray = array.slice(n, array.length);
        return droppedArray;
      },
    // Implement .dropWhile() of lodash.js library 
    dropWhile(array, predicate){
      let callBackFun = (element, index) => {
        return !predicate(element, index, array)
      }
      let dropNumber = array.findIndex(callBackFun);
      let droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    },
    // Implement .chunk() of lodash.js library 
    chunk(array, size = 1){
      let arrayChunks = [];
      for(let i = 0; i < array.length; i+= size){
        let arrayChunk = array.slice(i, i + size);
        arrayChunks.push(arrayChunk);
      }
      return arrayChunks;
    }
    };
    
    
    
    
    
    // Do not write or modify code below this line.
    module.exports = _;