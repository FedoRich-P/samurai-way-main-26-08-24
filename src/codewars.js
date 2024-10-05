function spinWords(string){
   return string.split(' ').map(el => (
      el.length >= 5 ? el.split('').reverse().join('') : el
   )).join(' ')
}

console.log(spinWords("Welcome"))//, "emocleW");
console.log(spinWords("Hey fellow warriors"))//, "Hey wollef sroirraw");
console.log(spinWords("This is a test")) //, "This is a test");
console.log(spinWords("This is another test")) //, "This is rehtona test");