//!4   - every 예제문 
// 지역변수에 검사결과를 boolean 타입으로 할당 후 리턴하시오 . 
//! every() 함수는 자바스크립트의 배열 메서드 중 하나로, 배열의 모든 요소가 주어진 조건을 만족하는지를 검사하는 기능
//배열의 각 요소에 대해 콜백 함수를 실행하고, 
// 모든 요소가 콜백 함수의 조건을 만족하면 true를 반환하고, 그렇지 않으면 false를 반환
const array1 = [1, 2, 3, 4, 5]; // 모든 요소가 숫자인 배열
const array2 = [1, 2, 3, 'four', 5]; // 숫자가 아닌 요소가 있는 배열

// 배열의 모든 요소가 숫자인지 검사
const areAllNumbers = (arr) => {
  return arr.every(item => typeof item === 'number');
};

console.log(areAllNumbers(array1)); // true
console.log(areAllNumbers(array2)); // false
