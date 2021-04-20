/*
To safely send data in a URL, the data first has to be encoded to convert any special characters to URL safe characters. For this assignment we will only focus on the following URL encoding rules:

%20 represents a space character.
Key-value pairs are represented using an = character: key=value
Multiple key-value pairs are separated using a & character: key1=value1&key2=value2
*/

/* INITIAL PLAN
- read through string from begining to end
- the first characters will be a string added to an empty object as a property name
- when a '=' is seen, switch to creating a value
- when a '&' is seen, add the value to the last property created and switch to creating another property name


SUMMARY
- properties = begining to "=", "&" to "="
- values = "=" to "&"
- space = " "
*/

//BUILD
const urlDecode = function (text) {
  
  //first clean text by adding an end marker, and converting '%20' to 'space'
  let cleanText = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '%' || text[i] === '2') {
      cleanText;
    } else if (text [i] === '0') {
      cleanText += ' ';
    } else {
      cleanText += text[i];
    }
  }

  //then create a mode switcher that gets updated in the loop 
  cleanText += '&';
  let obj = {};
  let mode = 'property';
  let property = '';
  let value = '';

  for (let i = 0; i < cleanText.length; i++) {
    
    if (mode === 'property') {
      if (cleanText[i] === '=') {
        obj[property] = '';
        mode = 'value';
      } else {
        property += cleanText[i];
      }

    } else if (mode === 'value') {
      if (cleanText[i] === '&') {
        obj[property] = value;
        property = '';
        value = '';
        mode = 'property';
      } else {
        value += cleanText[i];
      }
    }

  }
  
  return obj;
};


// TEST

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);