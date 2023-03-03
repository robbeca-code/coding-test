function solution(quiz) {
  // map으로 O X를 배열로 만들어서 반환합니다.
  return quiz.map(item => {
  
    // ' = '를 기준으로 식과 결과로 나눠서 변수에 저장합니다.
    let [math, result] = item.split(" = ");

    // eval()를 new Function으로 바꿔서 사용했습니다. eval()과 동일하게 식 결과를 숫자로 반환합니다.
    // 문자열*1을 하면 숫자로 변경되기 때문에 result*1로 해서 서로 비교할 수 있도록 했습니다.
    return (new Function('return ' + math))() === result*1 ? 'O' : 'X';
  });
}
