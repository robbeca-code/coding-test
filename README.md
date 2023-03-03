# coding-test

**1. 120924**
- 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.
***

**2. 120923**
- 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다.
- 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

*사용된 메서드*
1. Array.from()
  `Array.from('kdo')를 하면 ['k', 'd', 'o']로 새로운 객체를 생성합니다.`
2. Math.floor()
  `Math.floor(3/2)를 하면 내림이 자동으로 이루어져서 결과 1을 반환합니다..`
3. Math.ceil()
  `Math.ceil(3.5)를 하면 크거나 같은 숫자 중 가장 작은 숫자 4를 반환합니다.`
***

**3. 120922**
- 머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다. 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.
- 정수 M, N이 매개변수로 주어질 때, M x N 크기의 종이를 최소로 가위질 해야하는 횟수를 return 하도록 solution 함수를 완성해보세요.
***

**4. 120921**
- 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다.
- 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

*사용된 메서드*
1. Array.from()
  `생략`
2. unshift()
  `arr.unshift(인자)를 하면 인자를 arr라는 배열 맨 앞에 추가하고 그 길이를 반환합니다.`
3. pop()
  `배열의 마지막 요소를 제거하고  문자를 반환합니다.`
4. join()
`join(인자)를 하면 인자를 기준으로 배열의 각 요소를 구분해서 문자열을 반환합니다.`
***

**5. 120913**
- 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

*사용된 메서드*
1. slice()
`str.slice(시작, 끝)을 하면 시작 인덱스부터 (끝 - 1) 인덱스까지 문자열을 자르고 반환합니다. 원본 문자열은 바뀌지 않습니다..`
2. push()
`array.push(인자)을 하면 array 맨 마지막에 인자가 삽입됩니다.`
***

**6. 120912**
- 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

*사용된 메서드*
1. forEach()
`array.forEach((인자, {인덱스}) => console.log(인자))를 하면 array의 각각의 값이 인자로 넘어가게 되고 console창에 하나씩 출력됩니다. 항상 undefined를 반환합니다.`
2. map()
`array.map((인자, {인덱스}) => console.log(인자))를 하면 forEach와 동일하게 console창에 하나씩 출력되지만, map은 항상 새로운 배열을 만들어 반환합니다.`
3. join()
`생략`
***

**6. 120911**
- 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때,
- my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.

*사용된 메서드*
1. toLowerCase()
`str.toLowerCase()를 하면 문자열 전체를 소문자로 변환해줍니다.`
2. Array.from()
`생략`
3. sort()
`array.sort()를 하면 숫자는 작은 수 부터 큰 수 순서로 정렬되고, 문자는 유니코드 중 앞 쪽부터 순서대로 정렬됩니다.`
4. join()
`생략`
***

**5. 120910**
- 어떤 세균은 1시간에 두배만큼 증식한다고 합니다.
- 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.
***

**6. 120909**
- 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다.
- 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

*사용된 메서드*
1. Math.sqrt()
`Math.sqrt(144)를 하면 12를 반환하고, Math.sqrt(2)를 하면 1.4142... 를 반환해서 해당 숫자의 제곱근을 확인할 수 있습니다.`
***

**7. 120908**
- 문자열 str1, str2가 매개변수로 주어집니다.
- str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

*사용된 메서드*
1. includes()
`str.includes('인자')을 했을 때 str안에 인자로 넣은 문자열이 있다면 true를 반환하고, 없다면 false를 반환합니다.`
