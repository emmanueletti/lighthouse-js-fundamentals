/* INITIAL THOUGHTS
- lots of helper functions?
- need function logic for what to do with each formate type
- based on format type run string through that
- if format type is an array
- loop throgh array and administe each matching case type
- how to get result not to be overwritten?
*/

// HELPER FUNCTIONS
function camel (input, result) {

  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      result;
    } else if (input[i - 1] === ' ') {
      result += input[i].toUpperCase();
    } else {
      result += input[i];
    }
  }
  return result;
}
function pascal (input, result) {
  
  let step1 = camel(input, result);
  for (let i = 0; i < step1.length; i++) {
    if (i === 0) {
      result += step1[i].toUpperCase();
    } else {
      result += step1[i];
    }
  }
  return result;
}
function snake (input, result) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      result += '_';
    } else {
      result += input[i];
    }
  }
  return result;
}
function kebab (input, result) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      result += '-';
    } else {
      result += input[i];
    }
  }
  return result;
}
function vowel (input, result) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
      result += input[i].toUpperCase();
    } else {
      result += input[i];
    }
  }
  return result;
}
function consonant (input, result) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
      result += input[i];
    } else {
      result += input[i].toUpperCase();
    }
  }
  return result;
}
function title(input, result) {
  for (let i = 0; i < input.length; i++) {
    if (input[i-1] === ' ') {
      result += input[i].toUpperCase();
    } else {
      result += input[i];
    }
  }
  return result;
}
function upper (input, result) {
  for (let i = 0; i < input.length; i++) {
    result += input[i].toUpperCase();
  }
  return result;
}
function lower (input, result) {
  for (let i = 0; i < input.length; i++) {
    result += input[i].toLowerCase();
  }
  return result;
}

// BUILD
const makeCase = function (input, caseType) {
  
  let result = '';
  
  // if case type is an array (object)
  if (typeof caseType === 'object') {
    
    let result = '';

    //re-arrange the array to be sorted based on case hierarchy
    let arranged = [];
    for (let i = 0; i < caseType.length; i++) {
      if (caseType[i] === 'camel' || caseType[i] === 'pascal' || caseType[i] === 'snake' || caseType[i] === 'kebab' || caseType[i] === 'title') {
        arranged.unshift(caseType[i]);
      } else if (caseType[i] === 'vowel' || caseType[i] === 'consonant') {
        arranged.splice((aranged.length/2), 0, caseType[i]);
      } else if (caseType[i] === 'upper' || caseType[i] === 'lower') {
        arranged.push(caseType[i]);
      }
    }

    //then use sorted array (instead of original caseType array) to build the string we want based on the heirarchy

    // first check for the first set of case options
    for (let i = 0; i < arranged.length; i++) {
      
      if (arranged[i] === 'camel') {
        result = camel(input, result);
        //if first tier found, check for the second tier and third tier of case options
        let nextResult = '';
        for (let j = i; j < arranged.length; j++) {
          if (arranged[j] === 'vowel') {
            nextResult = vowel(result, nextResult);

            // if second tier found, check for last tier of case options
            let finalStep = '';
            for (let k = j; k < arranged.length; k++) {
              if (arranged[k] === 'upper') {
                finalStep = upper(nextResult, finalStep);
                return finalStep;
              } else if (arranged[k] === 'lower') {
                finalStep = lower(nextResult, finalStep);
                return finalStep;
              }
            }
            return nextResult;
          } else if (arranged[j] === 'consonant') {
            nextResult = consonant(result, nextResult);

            // check for last tier of case options
            let finalStep = '';
            for (let k = j; k < arranged.length; k++) {
              if (arranged[k] === 'upper') {
                finalStep = upper(nextResult, finalStep);
                return finalStep;
              } else if (arranged[k] === 'lower') {
                finalStep = lower(nextResult, finalStep);
                return finalStep;
              }
            }
            return nextResult;
          } else if (arranged[j] === 'upper') {
            nextResult = upper(result, nextResult);
            return nextResult;
          } else if (arranged[j] === 'lower') {
            nextResult = lower(result, nextResult);
            return nextResult;
          }
        }
      } else if (arranged[i] === 'pascal') {
        result = pascal(input, result);
        //if first tier found, check for the second tier and third tier of case options
        let nextResult = '';
        for (let j = i; j < arranged.length; j++) {
          if (arranged[j] === 'vowel') {
            nextResult = vowel(result, nextResult);

            // if second tier found, check for last tier of case options
            let finalStep = '';
            for (let k = j; k < arranged.length; k++) {
              if (arranged[k] === 'upper') {
                finalStep = upper(nextResult, finalStep);
                return finalStep;
              } else if (arranged[k] === 'lower') {
                finalStep = lower(nextResult, finalStep);
                return finalStep;
              }
            }
            return nextResult;
          } else if (arranged[j] === 'consonant') {
            nextResult = consonant(result, nextResult);

            // check for last tier of case options
            let finalStep = '';
            for (let k = j; k < arranged.length; k++) {
              if (arranged[k] === 'upper') {
                finalStep = upper(nextResult, finalStep);
                return finalStep;
              } else if (arranged[k] === 'lower') {
                finalStep = lower(nextResult, finalStep);
                return finalStep;
              }
            }
            return nextResult;
          } else if (arranged[j] === 'upper') {
            nextResult = upper(result, nextResult);
            return nextResult;
          } else if (arranged[j] === 'lower') {
            nextResult = lower(result, nextResult);
            return nextResult;
          }
        }
      } else if (arranged[i] === 'snake') {
        result = snake(input, result);
        //if first tier found, check for the second tier and third tier of case options
        let nextResult = '';
        for (let j = i; j < arranged.length; j++) {
          if (arranged[j] === 'vowel') {
            nextResult = vowel(result, nextResult);

            // if second tier found, check for last tier of case options
            let finalStep = '';
            for (let k = j; k < arranged.length; k++) {
              if (arranged[k] === 'upper') {
                finalStep = upper(nextResult, finalStep);
                return finalStep;
              } else if (arranged[k] === 'lower') {
                finalStep = lower(nextResult, finalStep);
                return finalStep;
              }
            }
            return nextResult;
          } else if (arranged[j] === 'consonant') {
            nextResult = consonant(result, nextResult);

            // check for last tier of case options
            let finalStep = '';
            for (let k = j; k < arranged.length; k++) {
              if (arranged[k] === 'upper') {
                finalStep = upper(nextResult, finalStep);
                return finalStep;
              } else if (arranged[k] === 'lower') {
                finalStep = lower(nextResult, finalStep);
                return finalStep;
              }
            }
            return nextResult;
          } else if (arranged[j] === 'upper') {
            nextResult = upper(result, nextResult);
            return nextResult;
          } else if (arranged[j] === 'lower') {
            nextResult = lower(result, nextResult);
            return nextResult;
          }
        }
      } else if (arranged[i] === 'kebab') {
        result = kebab(input, result);
        //if first tier found, check for the second tier and third tier of case options
        let nextResult = '';
        for (let j = i; j < arranged.length; j++) {
          if (arranged[j] === 'vowel') {
            nextResult = vowel(result, nextResult);

            // if second tier found, check for last tier of case options
            let finalStep = '';
            for (let k = j; k < arranged.length; k++) {
              if (arranged[k] === 'upper') {
                finalStep = upper(nextResult, finalStep);
                return finalStep;
              } else if (arranged[k] === 'lower') {
                finalStep = lower(nextResult, finalStep);
                return finalStep;
              }
            }
            return nextResult;
          } else if (arranged[j] === 'consonant') {
            nextResult = consonant(result, nextResult);

            // check for last tier of case options
            let finalStep = '';
            for (let k = j; k < arranged.length; k++) {
              if (arranged[k] === 'upper') {
                finalStep = upper(nextResult, finalStep);
                return finalStep;
              } else if (arranged[k] === 'lower') {
                finalStep = lower(nextResult, finalStep);
                return finalStep;
              }
            }
            return nextResult;
          } else if (arranged[j] === 'upper') {
            nextResult = upper(result, nextResult);
            return nextResult;
          } else if (arranged[j] === 'lower') {
            nextResult = lower(result, nextResult);
            return nextResult;
          }
        }

      } else if (arranged[i] === 'title') {
        result = title(input, result);
        //if first tier found, check for the second tier and third tier of case options
        let nextResult = '';
        for (let j = i; j < arranged.length; j++) {
          if (arranged[j] === 'vowel') {
            nextResult = vowel(result, nextResult);

            // if second tier found, check for last tier of case options
            let finalStep = '';
            for (let k = j; k < arranged.length; k++) {
              if (arranged[k] === 'upper') {
                finalStep = upper(nextResult, finalStep);
                return finalStep;
              } else if (arranged[k] === 'lower') {
                finalStep = lower(nextResult, finalStep);
                return finalStep;
              }
            }
            return nextResult;
          } else if (arranged[j] === 'consonant') {
            nextResult = consonant(result, nextResult);

            // check for last tier of case options
            let finalStep = '';
            for (let k = j; k < arranged.length; k++) {
              if (arranged[k] === 'upper') {
                finalStep = upper(nextResult, finalStep);
                return finalStep;
              } else if (arranged[k] === 'lower') {
                finalStep = lower(nextResult, finalStep);
                return finalStep;
              }
            }
            return nextResult;
          } else if (arranged[j] === 'upper') {
            nextResult = upper(result, nextResult);
            return nextResult;
          } else if (arranged[j] === 'lower') {
            nextResult = lower(result, nextResult);
            return nextResult;
          }
        }
      }

    }

    // if first tier of case options not present at all, then check for second tier
    for (let i = 0; i < arranged.length; i++) {
      if (arranged[i] === 'vowel') {
        result = vowel(input, result)
        // if second tier found, check for third tier
        let nextResult = '';
        for (let j = i; j < arranged[i]; j++) {
          if (arranged[j] === 'upper') {
            nextResult = upper(result, nextResult);
            return nextResult;
          } else if (arranged[j] === 'lower') {
            nextResult = lower(result, nextResult);
            return nextResult;
          }
        }
      } else if (arranged[i] === 'consonant') {
        result = consonant(input, result);
        // if second tier found, check for third tier
        let nextResult = '';
        for (let j = i; j < arranged[i]; j++) {
          if (arranged[j] === 'upper') {
            nextResult = upper(result, nextResult);
            return nextResult;
          } else if (arranged[j] === 'lower') {
            nextResult = lower(result, nextResult);
            return nextResult;
          }
        }
      }
    }

    // if second tier of case options not present at all, then check for third tier
    for (let i = 0; i < arranged.length; i++) {
      if (arranged[i] === 'upper') {
        result = upper(input, result);
        return result;
      } else if (arranged[i] === 'lower') {
        result = lower(input, result);
        return result;
      }
    }
    return result;
    
  } else {

    // if case type if not an array (object)
    if (caseType === 'camel') {
      result = camel(input, result);
    } else if (caseType === 'pascal') {
      result = pascal(input, result);
    } else if (caseType === 'snake') {
      result = snake(input, result);
    } else if (caseType === 'kebab') {
      result = kebab(input, result);
    } else if (caseType === 'title') {
      result = title(input, result);
    } else if (caseType === 'vowel') {
      result = vowel(input, result);
    } else if (caseType === 'consonant') {
      result = consonant(input, result);
    } else if (caseType === 'upper') {
      result = upper(input, result);
    } else if (caseType === 'lower') {
      result = lower(input, result);
    }

  }
  return result;
}

// TEST
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));


/* ISSUES WITH SOLUTION
- code is SUPER ugly, messy, and hard to reac ... but it works!
- in desperate need of simplifiaction
- needs less confusing parameter naming, hard to tell was "result" and "input" are in some case
- had to change the original "case" param to "caseType", since "case" was throwing an error
- ALOT of repeating code that probably could be packaged up into helper functions
- 100% will have no idea what i did when i look back at this in a few months
*/