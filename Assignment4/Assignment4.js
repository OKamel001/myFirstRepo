//Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

function findMax(x, y){
    return Math.max(x,y)
}

console.log(findMax(20,10));
document.getElementById("firstResult").innerText = `The result of the above Question is : ${findMax(20,10)}`
//----------------------------------------------------------------------------------------------------------------------------------------------
//Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function findMaxGroup(x, y, z){
    return Math.max(x,y,z)
}

console.log(findMaxGroup(5,4,44));
document.getElementById("firstResult2").innerText = `The result of the above Question is : ${findMaxGroup(5,4,44)}`

//---------------------------------------------------------------------------------------------------------------------------------------------
//Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(char){

    var isVowelChar = new Boolean(false);

    switch(char){
        case 'a':
            isVowelChar = true;
            break;
        case 'e':
            isVowelChar = true;
            break;
        case 'i':
            isVowelChar = true;
            break;
        case 'u':
            isVowelChar = true;
            break;
        case 'o':
            isVowelChar = true;
            break;

    }
    return isVowelChar;
}

console.log(isVowel('e'));
document.getElementById("firstResult3").innerText = `The result of the above Question is  (e): ${isVowel('e')}`
console.log(isVowel('y'));
document.getElementById("firstResult4").innerText = `The result of the above Question is  (y) : ${isVowel('y')}`
console.log(isVowel('a'));
document.getElementById("firstResult5").innerText = `The result of the above Question is  (a) : ${isVowel('a')}`

//---------------------------------------------------------------------------------------------------------------------------------------------------------
//Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
function sumOfArrayElements(...a){
    num = 0;
    for (let i = 0; i < a.length; i++) {
       num += a[i];
      }
      return num;
}

w = [1,2,3,4];
console.log(sumOfArrayElements(...w));
document.getElementById("firstResult6").innerText = `The result of the above Question is  (w = [1,2,3,4]): ${sumOfArrayElements(...w)}`

//-------------------------------------------------------------------------------------------------------------------------------------------------
function MultiplyOfArrayElements(...a){
    num = 1;
    for (let i = 0; i < a.length; i++) {
       num *= a[i];
      }
      return num;
}

w = [1,2,3,4];
console.log(MultiplyOfArrayElements(...w));
document.getElementById("firstResult7").innerText = `The result of the above Question is  (w = [1,2,3,4]): ${MultiplyOfArrayElements(...w)}`
//------------------------------------------------------------------------------------------------------------------------------------------------------
//Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

function reverse(str){
  
    if(str.length <= 1){
        return str;
    }
  
    else {
        return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1));
    }
}

   console.log(reverse("Osama"));
   document.getElementById("firstResult8").innerText = `The result of the above Question is  (Osama)): ${reverse("Osama")}`


   //------------------------------------------------------------------------------------------------------------------------------------------------
   //Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
   function longestWordInArray(q){
       LongestValue = q[0];

       for(let i = 0; i < q.length; i++){
           if(LongestValue.length < q[i].length ){
                LongestValue = q[i];
           }
       }

       return LongestValue.length;
   }

   arrayString = ["q","Osama", "ali", "IA", "q", "Kamelliiii"]
   console.log(longestWordInArray(arrayString));
   document.getElementById("firstResult9").innerText = `the length of the longest word in the array is (["q","Osama", "ali", "IA", "q", "Kamelliiii"])): ${longestWordInArray(arrayString)}`
   //-------------------------------------------------------------------------------------------------------------------------------------------------
//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(a, le){
    newArray = [];
    counter = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i].length > le){
            newArray[counter] = a[i];
            counter ++;
        }
    }
    return newArray;
}

arrayString2 = ["q","Osama", "ali", "IA", "q", "Kamelliiii"]
console.log(filterLongWords(arrayString2, 3));
document.getElementById("firstResult10").innerText = `array of words that length bigber than 3 is (["q","Osama", "ali", "IA", "q", "Kamelliiii"])): ${filterLongWords(arrayString2, 3)}`
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//8: i

const a = [1, 3, 5, 3, 3];

const b = a.map(function (elem, i, array) {

  return elem * 10;

});



//8: ii

const c = a.filter(function (elem, i, array) {

  return elem === 3;

});



//8: iii

const d = a.reduce(function (accumulator, elem) {

  return accumulator * elem;

}, 1);



console.log(" ===> " + b);
document.getElementById("firstResult11").innerText = `multiply each element in the array a = [1, 3, 5, 3, 3] by 10: ${b}`


console.log(" ===> " + c);
document.getElementById("firstResult12").innerText = `return array a = [1, 3, 5, 3, 3] with all elements  equal to 3: ${c}`

console.log(" ===> " + d);
document.getElementById("firstResult13").innerText = `return the product of all elementsa = [1, 3, 5, 3, 3] : ${d}`
