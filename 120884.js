function solution(chicken) {
  let answer = 0;

  // chicken이 9보다 작아지면 서비스 치킨을 못시키기 때문에 해당 조건문을 활용한 while문을 사용합니다.
  while(chicken > 9) {
    
    // answer에는 서비스 치킨을 더하고
    answer += Math.floor(chicken / 10);
    
    // chicken은 서비스 치킨에서 받은 쿠폰과, 서비스 치킨에 쓰고 남은 쿠폰을 합해서 활용합니다.
    chicken = Math.floor((chicken / 10) + ( chicken % 10));
  }

  return answer;
}
