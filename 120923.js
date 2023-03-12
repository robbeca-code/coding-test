function solution(num, total) {
  let answer = [];

  // 값의 중간값
  let mid = total/num;

  // 개수의 중간값
  let count = Math.floor(num/2);

  // 초기값
  let intiValue = Math.ceil(mid - count);

  // {length: num}을 하면 num의 개수만큼 반복된다.
  // 단, v는 undefined이 출력되므로 index를 활용한다.
  return Array.from({length: num}, (v, i) => {answer.push(intiValue + i)});
}
