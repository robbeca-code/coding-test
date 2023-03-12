function solution(n, t) {
  // 1시간에 두배만큼 세균이 증식하므로 2의 거듭제곱으로 구하면 됩니다.
  let answer = n * (2**t);
  return answer;
}
