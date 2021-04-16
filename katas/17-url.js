/*
To safely send data in a URL, the data first has to be encoded to convert any special characters to URL safe characters. For this assignment we will only focus on the following URL encoding rules:

%20 represents a space character.
Key-value pairs are represented using an = character: key=value
Multiple key-value pairs are separated using a & character: key1=value1&key2=value2
*/

/* INITIAL THOUGHTS
- create an empty object
- read through the provided string
- from begining to the first "=" should be saved as a variable and initialized into the empty object as a property
- from that point to the next "&" should be saved into a variable and added to the object as a value of the first property
- from an "&" to "=" should be another property
- any any point, if a %20 is encountered then input a space


SUMMARY
- properties = begining to "=", "&" to "="
- values = "=" to "&"
- space = " "

if these can be turned into helper functions then

- read through provided string
- run properties function from beginning to "="
- skip equal sign
- run values function from "=" to "&"
- skip "&"
- run properties function from "&" to "="
*/

//BUILD
const urlDecode = function (text) {
  let obj = {};

  for (let i = 0; i < text.length; i++) {
    if (text[i] === '=') {
      
    }
  }

  return obj;
};


// TEST

console.log(urlDecode("duck=rubber"));
// console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);