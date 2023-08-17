function solution(n, arr1, arr2) {
  let answer = [];

  // arr에 있는 수를 이진수로 표현했을 때 0은 ' '으로, 1은 '#'으로 변경하는 함수입니다.
  // 만약 result의 길이가 n보다 작다면 앞에 ' '을 추가하기 위해 reverse를 활용했습니다.
  const changedItem = (array) => {
    let result = [];
    
    for(let item of array) {
      if(item === '1') {
        result.push('#');
      } else {
        result.push(' ');
      }
    }
    
    if(result.length < n) {
      const interval = n - result.length;
      let temp = result.reverse();
      
      for(let i=0; i<interval; i++) {
        temp.push(' ');
      }
      result = temp.reverse();
    }
    
    return result;
  };

  // 두 개의 배열을 비교하면서 '#'인 부분은 '#'으로, 둘 다 ' '이라면 ' '으로 result에 값을 추가합니다.
  const combinedArr = (array1, array2) => {
    let result = [];
    
    for(let i=0; i<n; i++) {
      if(array1[i] === '#' || array2[i] === '#') {
        result.push('#');
      } else if(array1[i] === ' ' && array2[i] === ' ') {
        result.push(' ');
      }
    }
    
    return result.join('');
  };
  
  for(let i=0; i<n; i++) {
    // 10진수를 2진수로 표현합니다.
    let arr1_item = arr1[i].toString(2).split('');
    let arr2_item = arr2[i].toString(2).split('');
    
    arr1_item = changedItem(arr1_item);
    arr2_item = changedItem(arr2_item);
    answer.push(combinedArr(arr1_item, arr2_item));
  }
  
  return answer;
}
