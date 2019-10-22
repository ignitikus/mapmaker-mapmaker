function doubleAll(arr) {
  const doubledNumbers = [];
  for (let i = 0; i < arr.length; i++){
    doubledNumbers.push(arr[i]*2)
  }return doubledNumbers;
}

function absoluteValues(arr) {
  const absoluteNumbers = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < 0) {
      absoluteNumbers.push(arr[i]* (-1));
    } else {
      absoluteNumbers.push(arr[i]);
    }
  }return absoluteNumbers;
}

function yelledGreetings(arr) {
  const yelledWords = [];
  for (let i = 0; i < arr.length; i++){
    yelledWords.push(arr[i] + '!')
  } return yelledWords;
}

function changeToInitials(arr) {
  const justInitials = [];
  for (let i = 0; i < arr.length; i++){
    let oneName = arr[i];
    let letter = '';
    for (let i = 0; i < oneName.length; i++){
    if (i===0 || oneName[i-1] === ' '){
      letter += oneName[i];
    } 
  }justInitials.push(letter)
  }return justInitials
}

function doubleOdd(arr) {
  const doubledOddNumbers = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i]<0 && arr[i]%2 === -1){
    doubledOddNumbers.push(arr[i]*2);
    } else if (arr[i]<0 && arr[i]%2 < 0){
      doubledOddNumbers.push(arr[i]);
    } else if (arr[i]%2 >= 1){
      doubledOddNumbers.push(arr[i]*2);
    } else{
      doubledOddNumbers.push(arr[i]);
    }
  }return doubledOddNumbers;
}

function upperCaseFirstLetters(arr) {
  const newNames = [];
  for (let i = 0; i < arr.length; i++){
      let newStr = '';
      const oneName = arr[i];
      for (let i = 0; i<oneName.length; i++){
        if (i === 0){
          newStr += oneName[0].toUpperCase();
        }else {
          newStr += oneName[i].toLowerCase();
        }  
      } newNames.push(newStr)
    }return newNames
  }

  function add1ToLeft(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++){
      if (arr[i]<0){
        let num = arr[i].toString();
        let newNum = '';
        for (let i = 0; i < num.length; i++){
          if (num[i] === '-'){
          newNum += num[i]+'1';
          } else{
          newNum += num[i]
          }
        } newArr.push(parseInt(newNum));
      } else {
      newArr.push(parseInt('1' + arr[i]));
      }
    }return newArr;
  }


module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}