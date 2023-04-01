function solution(polynomial) {
  let answer = [];
  let x = 0;
  let constant = 0;
  
  // + 를 기준으로 문자열을 나눠 배열로 변환합니다. 
  polynomial = polynomial.split(' + ');

  polynomial.forEach(v => {
    // 값에 'x'가 있을 때
    // 'x'를 ''으로 바꿔서 숫자만 남겨놓습니다. 이때 x만 있었다면 ''이 되므로 이땐 1로 변환합니다.
    // x 변수에 정수로 변환한 값을 더합니다.
    if(v.indexOf('x') !== -1) {
      let temp = v.replace('x', '');
      if(temp === '') temp = '1';
      x += parseInt(temp, 10);
    }
    
    // 상수값을 constant 변수에 더합니다.
    else {
      constant += parseInt(v, 10);
    }
  });

  // x가 존재하면서 1보다 클 때와 1일 때를 구분해서 answer에 저장합니다.
  if(x > 0) {
    answer.push(x > 1 ? `${x}x` : 'x');
  }
  
  // 상수항이 존재할 때만 answer에 값을 저장합니다.
  // 상수항이 항상 마지막에 위치해야되기 때문에 x 다음에 answer에 저장합니다.
  if(constant > 0) {
    answer.push(constant);
  }

  // 배열을 문자열로 변환하고 return 합니다.
  return answer.join(" + ");
}
