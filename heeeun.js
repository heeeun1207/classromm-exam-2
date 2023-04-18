  //! 1  
  //위의 basicData를 참고하여 매개변수를 작성하시오.
  //매개변수 count는 랜덤함수를 실행하는 횟수를 의미한다. //* 실행하는 횟수 
  //랜덤함수를 실행하는 횟수만큼 반복문을 실행한다. //* 반복문 
  //랜덤함수가 실행되어 도출될 결과 값을 배열에 추가하고 배열에 리턴하는 로직을 작성해라. //*Math.random()
  //실수(float)로 도출된 경우 난수, 소숫점 두자리까지 표현된 값을 배열에 추가하시오. 
  //* Math.random() 0이상 1미만의 값을 무작위로 생성함.
  //! 설명 쓰면서 이해하기. 
  let basicData = {
    count: 10,
    min: 1,
    max: 10,
    divideNumber: 5,
  }
  function exampleOne(count, min, max) {
    const exampleArr = [];
    for (let i = 0; i < count; i++) {
      const randomValue = Math.random() * (max - min) + min;
      exampleArr.push(parseFloat(randomValue.toFixed(2)));
      //*  parseFloat()
      //parseFloat() 함수는 문자열을 부동소수점 숫자로 변환하는 JavaScript 내장 함수.
      //매개변수로 전달된 문자열을 해석하여 부동소수점 숫자로 반환 
      //* toFixed()
      //toFixed() 메소드를 사용하여 소숫점 두 자리까지 표현된 문자열을 생성하고,
      //해당 문자열은 여전히 문자열 형태이므로 -> parseFloat() 함수를 사용해서 
      //문자열을 부동소수점 숫자로 변환한다. 
    }
    return exampleArr;
  }
  // basicData 에서 exampleOne 함수 호출
  const result = exampleOne(basicData.count, basicData.min, basicData.max);
  console.log(result);
  
  //! 2 
  // 0번째 매개변수 array는 숫자(실수)로 이루어진 배열이다.
  // 1번째 매개변수는 정수만을 입력하도록 타입을 제어하고,
  // 매개변수 divideNumber보다 작은수는 a배열에 , 큰수는 b 배열에 추가하는 로직을 작성해라. 
  // divideNumber 는 basucData 객체의 divideNumber 속성값을 사용한다. 
  function exampleTwo(array, divideNumber) {
    if (!Array.isArray(array)) {
      throw new Error("매개변수는 배열 "); // 배열이 아닐 경우 에러 throw
    }
    // 배열의 요소가 모두 정수인지 체크
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] !== "number" || !Number.isInteger(array[i])) {//숫자,정수 
        throw new Error("배열의 요소는 정수만 입력"); // 정수가 아닌 요소가 있을 경우 에러 throw
      }
    }
    let exampleObject = {
      a: [],
      b: [],
    }
    // divideNumber 보다 작은 요소는 a 배열에, 큰 요소는 b 배열에 추가
    for (let i = 0; i < array.length; i++) {
      if (array[i] < divideNumber) {
        exampleObject.a.push(array[i]);
      } else {
        exampleObject.b.push(array[i]);
      }
    }
    return exampleObject;
  }
  // let array = [1, 3.3, 5, 7, 9];
  let array = [1, 3, 5, 7, 9];
  let divideNumber = 5;
  let resultTwo = exampleTwo(array, divideNumber);
  console.log("a 배열: ", resultTwo.a); // a 배열:  [1, 3]
  console.log("b 배열: ", resultTwo.b); // b 배열:  [5, 7, 9]
  
  //! 3 매개변수 array의 모든 매개변수를 더하는 로직을 작성하시오.
  function exampleThree(array) {
    let value = 0; // 더한 결과 값을 저장하는 변수이고 , 초기값은 0으로 설정함. 
    for (let i = 0; i < array.length; i++) {
      // 배열의 모든 요소를 반복하면서 더한다. 
      // 각 요소는 array[i]로 접근 가능 
      value += array[i]; //! 현재 요소의 값을 누적하여 더한다.
    }
    console.log("모든 요소 합: ", value); // 더한 결과 값을 콘솔에 출력한다.
    return value; // 더한 결과 값을 반환한다.
  }
  let tarray = [1, 2, 3, 4, 5]; // 더할 배열
  let tresult = exampleThree(tarray); // exampleThree 함수 호출하여 결과 값을 result 변수에 저장
  console.log("모든 요소 합: ", tresult); // 더한 결과 값을 콘솔에 출력
  
  //! 4
  // 매개변수 object의 프로퍼티가 배열인지 검사한 후 , 
  // 배열의 요소가 모두 숫자형태인지 검사하는 로직을 작성하시오.
  // 지역변수에 검사결과를 boolean 타입으로 할당 후 리턴하시오. 
  function exampleFour(object) {
    let value = false; // 검사 결과를 저장하는 변수이다. 초기값은 false로 설정한다.
  
    // 매개변수 object가 객체인지 검사한다.
    if (typeof object === 'object' && object !== null) {
      // object가 객체인지 검사한다.
  
      if (Array.isArray(object)) {
        // object가 배열인지 검사한다.
        // Array.isArray() 함수를 사용하여 배열인지 확인한다.
  
        // 배열의 요소가 모두 숫자 형태인지 검사한다.
        value = object.every(item => typeof item === 'number');
        // every() 함수를 사용하여 배열의 모든 요소가 숫자인지 검사한다.
        // 배열의 모든 요소가 숫자 형태이면 true, 그렇지 않으면 false가 반환된다.
      }
    }
    console.log("배열의 요소가 모두 숫자인지 검사 결과: ", value); // 검사 결과를 콘솔에 출력한다.
    return value; // 검사 결과를 반환한다.
  }
  let object1 = [1, 2, 3, 4, 5]; // 검사할 배열
  let object2 = [1, 2, '3', 4, 5]; // 검사할 배열
  let result1 = exampleFour(object1);  // true
  let result2 = exampleFour(object2);  // false 
  
  //! 잘모르겠어서.. 다시볼게요 !! 
  //! 5 
  //objectOne 매개변수는 최상단 basicData 객체가 인자로 들어올 것을 가정한다.
  //objectTwo 는 exampleTwo 함수의 리턴값이 인자로 들어올 것을 가정한다.
  //objectOne , objectTwo 모두 각각 프로퍼티의 값을 더한 뒤,
  //위의 지역변수 value에 총합을 생성하여 리턴하는 로직을 작성하시오 . 
  function exampleFive(objectOne, objectTwo) {
    let value; // 더한 결과 값을 저장하는 변수이다.
    // objectOne이 basicData 객체인지 검사한다.
    if (typeof objectOne === 'object' && objectOne !== null) {
      // objectTwo가 exampleTwo 함수의 리턴값인지 검사한다.
      if (typeof objectTwo === 'number') {
        // objectOne과 objectTwo의 프로퍼티 값을 더한다.
        value = objectOne.value + objectTwo;
        // objectOne의 value 프로퍼티와 objectTwo를 더하여 결과를 value 변수에 할당한다.
      }
    }
    console.log("두 객체의 프로퍼티 값을 더한 결과: ", value); // 결과를 콘솔에 출력한다.
  
    return value; // 더한 결과 값을 반환한다.
  }
  
  // basicData 객체와 exampleTwo() 함수의 리턴값을 인자로 전달하여 exampleFive() 함수 호출
  console.log(exampleFive(basicData, exampleTwo(/* exampleOne 함수의 리턴값 및 구성 */)));
  
  
 
