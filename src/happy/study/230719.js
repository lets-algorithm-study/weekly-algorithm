/**
 Q. 1
    매개변수 num(number)을 받아서
    num이 2의 배수이면, "2의 배수입니다." 출력하고
    num이 3의 배수이면, "3의 배수입니다." 출력하고
    num이 5의 배수이면, "5의 배수입니다." 출력하고
    num이 7의 배수이면, "7의 배수입니다." 출력하는
    
    printMultiple 함수를 만들어라.

    ex.1) num=4 >>> "2의 배수입니다."
    ex.2) num=3 >>> "3의 배수입니다."
    ex.3) num=115 >>> "5의 배수입니다."
 */

function printMultiple(num) {
  if (num % 2 === 0) console.log('2의 배수입니다.');
  if (num % 3 === 0) console.log('3의 배수입니다.');
  if (num % 5 === 0) console.log('5의 배수입니다.');
  if (num % 7 === 0) console.log('7의 배수입니다.');
}

/**
 Q. 2
    매개변수 num(number 혹은 string)을 받아서 문자열로 변환하는 함수 changeString을 만들어라.

    단, 매개변수 num이 숫자 혹은 문자열이 아닌 경우, '숫자랑 문자열이 아닙니다.' 에러 문구를 반환해라

    ex.1) num=9999 >>> "9999"
    ex.2) num=1919 >>> "1919"
    ex.3) num=119 >>> "119"
    ex.3) num="119" >>> "119"
    ex.3) num=false >>> '숫자랑 문자열이 아닙니다.'
 */

function changeString(num) {
  if (typeof num !== 'number' && typeof num !== 'string') throw new Error('숫자가 아닙니다.');

  return num.toString();
}

/**
Q. 3
    매개변수 num(number)을 받아서 매개변수 num에서 숫자 9의 총 개수를 구하는 find9 함수를 만들어라

    단, 매개변수 num이 숫자가 아닌 경우, '숫자가 아닙니다.' 에러 문구를 반환해라.

    힌트) toString, split 메서드 사용하기

    ex.1) num=9999 >>> 4
    ex.2) num=1919 >>> 2
    ex.3) num=119 >>> 2
    ex.3) num="119" >>> 숫자가 아닙니다.
 */

// S. 1
function find9(num) {
  if (typeof num !== 'number') throw new Error('숫자가 아닙니다.');

  let result = 0;
  num
    .toString()
    .split('')
    .forEach(item => {
      if (item === '9') result += 1;
    });

  return result;
}

/**
Q. 4
    매개변수 str(string)을 받아서 매개변수 문자열 중에 "t", 'e", "s"을 제거한 문자열을 반환하는
    함수 changeString을 만들어라

    단, 매개변수 str이 문자열이 아닌 경우, '문자열이 아닙니다.' 에러 문구를 반환해라

    ex.1) str="test2" >>> "2"
    ex.2) str="totoro" >>> "ooro"
    ex.3) str=223 >>> error
 */

// S. 1 - split, for 사용시, 답안
function changeString(name) {
  if (typeof name !== 'string') throw new Error('문자열이 아닙니다.');
  const tmp = name.split('');

  let result = '';

  for (let i = 0; i < tmp.length; i++) {
    let item = tmp[i];

    if (item !== 't' && item !== 'e' && item !== 's') {
      result += item;
    }
  }

  return result;
}

// S. 1 - split, forEach 사용시, 답안
function changeString2(name) {
  if (typeof name !== 'string') throw new Error('문자열이 아닙니다.');
  const tmp = name.split('');

  let result = '';

  tmp.forEach(item => {
    if (item !== 't' && item !== 'e' && item !== 's') {
      result += item;
    }
  });

  return result;
}

// S. 1 - split, filter 사용시, 답안
function changeString3(name) {
  if (typeof name !== 'string') throw new Error('문자열이 아닙니다.');
  const tmp = name.split('');

  let result = tmp.filter(item => item !== 't' && item !== 'e' && item !== 's');

  return result.join('');
}
