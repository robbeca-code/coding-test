function solution(A, B) {
  // A를 옮기지 않았는데도 B와 동일하면 0을 반환한다.
  if(A === B) {
      return 0;
  }

  // unshift와 pop을 사용하기 위해 배열로 변환
  let arr = Array.from(A);

  // unshift를 사용해서 맨 뒤에 있는 문자를 맨 앞에 추가하고
  // pop으로 옮긴 문자를 삭제
  // join('')을 사용해서 문자열로 변환한 뒤, B와 비교
  for(let i=0; i<arr.length; i++) {
    arr.unshift(arr[arr.length - 1]);
    arr.pop();
    let newStr = arr.join('');
    
    // 문자를 옮긴 숫자만큼 반환한다.
    if(newStr === B) {
        return i + 1;
    }
  }

  // A와 B가 같은 경우가 없을 때 -1을 반환한다.
  return -1;
}
