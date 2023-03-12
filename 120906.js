function solution(n) {
  let sum = 0;
  let n_string = String(n);

  for(let item of n_string) {
    sum += (item * 1);
  }

  return sum;
}
