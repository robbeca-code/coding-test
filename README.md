# Coding Test
### 📝사용한 언어📝
- <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>
***

### [1. 120924](120924.js)
- 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.
***

### [2. 120923](120923.js)
- 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다.
- 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. Array.from()</h4>
      ✏️ Array.from('kdo')를 하면 ['k', 'd', 'o']로 새로운 객체를 생성합니다.
    <h4>2. Math.floor()</h4>
      ✏️ Math.floor(3/2)를 하면 내림이 자동으로 이루어져서 결과 1을 반환합니다.
    <h4>3. Math.ceil()</h4>
      ✏️ Math.ceil(3.5)를 하면 크거나 같은 숫자 중 가장 작은 숫자 4를 반환합니다.
  </div>
</details>

***

### [3. 120922](120922.js)
- 머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다. 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.
- 정수 M, N이 매개변수로 주어질 때, M x N 크기의 종이를 최소로 가위질 해야하는 횟수를 return 하도록 solution 함수를 완성해보세요.
***

### [4. 120921](120921.js)
- 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다.
- 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  
  <div markdown="1">
    <h4>1. Array.from()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from">Array.from() 정의보기</a>
    <h4>2. unshift()</h4>
      ✏️ arr.unshift(인자)를 하면 인자를 arr라는 배열 맨 앞에 추가하고 그 길이를 반환합니다.
    <h4>3. pop()</h4>
      ✏️ 배열의 마지막 요소를 제거하고  문자를 반환합니다.
    <h4>4. join()</h4>
      ✏️ join(인자)를 하면 인자를 기준으로 배열의 각 요소를 구분해서 문자열을 반환합니다.
  </div>
</details>

***

### [5. 120913](120913.js)
- 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. slice()</h4>
    ✏️ str.slice(시작, 끝)을 하면 시작 인덱스부터 (끝 - 1) 인덱스까지 문자열을 자르고 반환합니다. 원본 문자열은 바뀌지 않습니다.
    <h4>2. push()</h4>
    ✏️ array.push(인자)을 하면 array 맨 마지막에 인자가 삽입됩니다.
  </div>
</details>

***

### [6. 120912](120912.js)
- 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. forEach()</h4>
      ✏️ array.forEach((인자, {인덱스}) => console.log(인자))를 하면 array의 각각의 값이 인자로 넘어가게 되고 console창에 하나씩 출력됩니다. 항상 undefined를 반환합니다.
    <h4>2. map()</h4>
      ✏️ array.map((인자, {인덱스}) => console.log(인자))를 하면 forEach와 동일하게 console창에 하나씩 출력되지만, map은 항상 새로운 배열을 만들어 반환합니다.
    <h4>3. join()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join">join() 정의보기</a>
  </div>
</details>

***

### [7. 120911](120911.js)
- 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때,
- my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. toLowerCase()</h4>
      ✏️ str.toLowerCase()를 하면 문자열 전체를 소문자로 변환해줍니다.
    <h4>2. Array.from()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from">Array.from() 정의보기</a>
    <h4>3. sort()</h4>
      ✏️ array.sort()를 하면 숫자는 작은 수 부터 큰 수 순서로 정렬되고, 문자는 유니코드 중 앞 쪽부터 순서대로 정렬됩니다.
    <h4>4. join()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join">join() 정의보기</a>
  </div>
</details>

***

### [8. 120910](120910.js)
- 어떤 세균은 1시간에 두배만큼 증식한다고 합니다.
- 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.
***

### [9. 120909](120909.js)
- 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다.
- 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. Math.sqrt()</h4>
      ✏️ Math.sqrt(144)를 하면 12를 반환하고, Math.sqrt(2)를 하면 1.4142... 를 반환해서 해당 숫자의 제곱근을 확인할 수 있습니다.
  </div>
</details>

***

### [10. 120908](120908.js)
- 문자열 str1, str2가 매개변수로 주어집니다.
- str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. includes()</h4>
      ✏️ str.includes('인자')을 했을 때 str안에 인자로 넣은 문자열이 있다면 true를 반환하고, 없다면 false를 반환합니다.
  </div>
</details>

***

### [11. 120907](120907.js)
- 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다.
- 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. map()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map">map() 정의보기</a>
    <h4>2. split()</h4>
      ✏️ str.split(" ")를 하면 " "을 기준으로 문자열을 나눠서 배열로 반환합니다.
    <h4>3. (new Function('return ' +))()</h4>
      ✏️ (new Function('return ' + 변수))()를 하면 eval처럼 입력 받은 변수를 코드로 인식하고 결과를 반환합니다. <strong>eval()를 사용해야 할 때 대체하기 좋습니다.</strong>
  </div>
</details>

***

### [12. 120906](120906.js)
- 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. String()</h4>
      ✏️ String(123)을 하면 문자열 '123'으로 반환합니다.
    <h4>2. for..of</h4>
      ✏️ for(let item of array){}를 하면 array에 있는 값을 item으로 전달하면서 {} 안에 있는 명령문을 반복적으로 실행합니다.
  </div>
</details>

***

### [13. 120905](120905.js)
- 정수 n과 정수 배열 numlist가 매개변수로 주어질 때,
- numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. forEach()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach() 정의보기</a>
    <h4>2. filter()</h4>
      ✏️ array.filter(item => item > 1)을 하면 **item > 1** 이라는 조건문에 참인 값만으로 새로운 배열을 만들어 반환합니다.
  </div>
</details>

***

### [14. 120904](120904.js)
- 정수 num과 k가 매개변수로 주어질 때,
- num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. String()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String">String() 정의보기</a>
    <h4>2. indexOf()</h4>
      ✏️ str.indexOf(찾는 문자)를 하면 str에 찾는 문자와 일치하는 첫 번째 index를 반환하고, 만약 없다면 -1을 반환합니다.
  </div>
</details>

***

### [15. 120903](120903.js)
- 두 배열이 얼마나 유사한지 확인해보려고 합니다.
- 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. concat()</h4>
      ✏️ str.concat(인자)를 하면 문자열에 인자를 합쳐서 새로운 문자열을 반환합니다. 배열도 가능합니다.
    <h4>2. Set()</h4>
      ✏️ let newArr = new Set(arr)를 했을 때 arr에서 중복되는 값을 제거한 뒤 새로운 배열을 반환합니다.
    <h4>3. size()</h4>
      ✏️ newArr.size()는 length와 똑같은 기능을 하지만 Set 객체의 원소의 개수를 반환하는 것이 특징입니다.
  </div>
  </details>
  
***

### [16. 120902](120902.js)
- my_string은 "3 + 5"처럼 문자열로 된 수식입니다.
- 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. (new Function('return ' +))()</h4>
      ✏️ (new Function('return ' + 변수))()를 하면 eval처럼 입력 받은 변수를 코드로 인식하고 결과를 반환합니다.
    <h4>2. split()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split">split() 정의보기</a>
    <h4>3. filter()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">filter() 정의보기</a>
    <h4>4. unshift()</h4>
      ✏️ arr.unshift(인자)를 하면 arr의 맨 앞쪽에 인자가 삽입됩니다.
    <h4>5. shift()</h4>
    ✏️ arr.shift()를 하면 arr의 맨 앞쪽에 있는 값을 제거하고 헤당 값을 반환합니다.
  </div>
</details>

***

### [17. 120899](120899.js)
- 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. Math.max()</h4>
      ✏️ Math.max(1, 5, 3)을 하면 넘겨받은 인자 중 가장 큰 수인 5를 반환합니다.
    <h4>2. indexOf()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf() 정의보기</a>
  </div>
</details>

***

### [18. 120897](120897.js)
- 정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
***

### [19. 120896](120896.js)
- 문자열 s가 매개변수로 주어집니다.
- s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
- 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. filter()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">filter() 정의보기</a>
    <h4>2. indexOf()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf() 정의보기</a>
    <h4>3. lastIndexOf()</h4>
      ✏️ array.lastIndexOf(인자)를 하면 array 뒤쪽에서 부터 인자가 있는 가장 첫 번째 인덱스를 반환합니다.
    <h4>4. sort()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">sort() 정의보기</a>
    <h4>5. join()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join">join() 정의보기</a>
  </div>
</details>

***

### [20. 120895](120895.js)
- 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때,
- my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. split()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split">split() 정의보기</a>
    <h4>2. join()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join">join() 정의보기</a>
  </div>
</details>

***

### [21. 120895](120895.js)
- 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다.
- 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. forEach()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach() 정의보기</a>
    <h4>2. split()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split">split() 정의보기</a>
    <h4>3. join()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join">join() 정의보기</a>
    <h4>4. replaceAll()</h4>
      ✏️ str.replaceAll('dog', 'cat')했을 때 str 안에 있는 모든 dog를 cat으로 변환해줍니다.
    <h4>5. Number()</h4>
      ✏️ Number('123')를 하면 숫자 123이 반환됩니다.
  </div>
</details>

***

### [22. 120893](120893.js)
- 문자열 my_string이 매개변수로 주어질 때,
- 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. Array.from()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from">Array.from() 정의보기</a>
    <h4>2. forEach()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach() 정의보기</a>
    <h4>3. toUpperCase()</h4>
      ✏️ string.toUpperCase()를 하면 문자 또는 문자열 전체를 <strong>대문자로 변환해 반환합니다.</strong>
    <h4>4. toLowerCase()</h4>
      ✏️ string.toLowerCase()를 하면 문자 또는 문자열 전체를 <strong>소문자로 변환해 반환합니다.</strong>
    <h4>5. join()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join">join() 정의보기</a>
  </div>
</details>

***

### [23. 120892](120892.js)
- 군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.
- 암호화된 문자열 cipher를 주고받습니다.
- 그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
- 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. for...in</h4>
      ✏️ for(let i in array){}를 하면 array의 인덱스를 i에 반복적으로 넘기는 for문입니다.
  </div>
</details>

***

### [24. 120891](120891.js)
- 머쓱이는 친구들과 369게임을 하고 있습니다.
- 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다.
- 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. for...of</h4>
      ✏️ for(let v of string){}를 하면 string 안에 있는 값을 v에 반복적으로 넘기는 반복문입니다.
    <h4>2. split</h4>
      ✏️ str.split(/[123]/)으로 정규표현식(//) 사용도 가능합니다. 1 또는 2 또는 3을 기준으로 문자열을 나눠서 배열로 변환합니다.
  </div>
</details>

***

### [25. 120890](120890.js)
- 정수 배열 array와 정수 n이 매개변수로 주어질 때,
- array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. push()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push">push() 정의보기</a>
    <h4>2. sort()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">sort() 정의보기</a>
    <h4>3. indexOf()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf() 정의보기</a>
    <h4>4. Math.min()</h4>
      ✏️ Math.min(2, 5)를 했을 때 2와 5 중 작은 2를 반환합니다.
    <h4>5. reduce()</h4>
      ✏️ array.reduce((a, c) => {...})를 하면 a에는 c의 이전 값이 들어있고, c에는 현재값이 들어가 있습니다.
  </div>
</details>

***

### [26. 120889](120889.js)
- 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
- 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
- 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다.
- 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. sort()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">sort() 정의보기</a>
    <h4>2. splice()</h4>
      ✏️ array.splice(인덱스, 개수)를 하면 인덱스부터 시작해서 개수까지 해당 값을 삭제할 수 있습니다. 이 메서드는 해당 배열에 영향을 줍니다.
    <h4>3. indexOf()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf() 정의보기</a>
    <h4>4. Math.max()</h4>
      ✏️ Math.max(199, 72, 222)를 하면 222를 반환합니다.
  </div>
</details>

***

### [27. 120888](120888.js)
- 문자열 my_string이 매개변수로 주어집니다.
- my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. Set()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set">Set() 정의보기</a>
    <h4>2. Array.from()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from">Array.from() 정의보기</a>
    <h4>3. join()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join">join() 정의보기</a>
    <h4>4. filter()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">filter() 정의보기</a>
    <h4>5. indexOf()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf() 정의보기</a>
  </div>
</details>

***

### [28. 120887](120887.js)
- 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다.
- 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. toString()</h4>
      ✏️ num.toString()을 하면 숫자 또는 다른 데이터형식을 문자열로 변환해줍니다.
    <h4>2. indexOf()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf() 정의보기</a>
    <h4>3. filter()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">filter() 정의보기</a>
    <h4>4. split()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split">split() 정의보기</a>
  </div>
</details>

***

### [29. 120886](120886.js)
- 문자열 before와 after가 매개변수로 주어질 때,
- before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. forEach()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach() 정의보기</a>
    <h4>2. indexOf()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf() 정의보기</a>
    <h4>3. splice()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice">splice() 정의보기</a>
    <h4>4. split()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split">split() 정의보기</a>
    <h4>4. sort()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">sort() 정의보기</a>
    <h4>4. join()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join">join() 정의보기</a>
  </div>
</details>

***

### [30. 120884](120884.js)
- 프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다.
- 쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다.
- 시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. Math.floor()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor">Math.floor() 정의보기</a>
  </div>
</details>

***

### [30. 120883](120883.js)
- 머쓱이는 프로그래머스에 로그인하려고 합니다.
- 머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와 회원들의 정보가 담긴 2차원 배열 db가 주어질 때,
- 다음과 같이 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요.
- 아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다.
- 로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를, 아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return 합니다.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. forEach()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach() 정의보기</a>
    <h4>2. new Map()</h4>
      ✏️ const myMap = new Map()를 하면 myMap이라는 Map 객체를 생성합니다. 값을 넣을 땐 set을 활용해서 합니다.
    <h4>3. Map.prototype.has()</h4>
      ✏️ map1.has('value')를 하면 map1에 value가 있을 때 true, 없으면 false를 반환합니다.
    <h4>4. Map.prototype.get()</h4>
      ✏️ map1.get('key')를 하면 key가 참조하는 value를 반환합니다.
  </div>
</details>

***

### [31. 120882](120882.js)
- 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다.
- 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때,
- 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. Array()</h4>
      ✏️ Array(5)를 하면 5개의 길이를 가진 배열을 생성할 수 있습니다.
    <h4>2. fill()</h4>
      ✏️ Array(5).fill(1)을 하면 배열의 값을 전부 1로 초기화해서 5개의 배열을 만들어줍니다.
    <h4>3. map()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map">map() 정의보기</a>
    <h4>4. length()</h4>
      ✏️ arr.length()를 하면 arr의 길이를 반환합니다.
    <h4>5. slice()</h4>
      ✏️ arr.slice()를 하면 arr의 전체를 잘라줍니다. 이때 **arr에는 영향을 주지 않습니다.**
    <h4>6. sort()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">sort() 정의보기</a>
    <h4>7. indexOf()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf() 정의보기</a>
  </div>
</details>

***

### [32. 120878](120878.js)
- 소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다.
- 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다.
- 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.
- 기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
- 두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. Math.floor()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor">Math.floor() 정의보기</a>
    <h4>2. indexOf()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf() 정의보기</a>
    <h4>3. Math.min()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/min">Math.min() 정의보기</a>
  </div>
</details>

***

### [33. 120875](120875.js)
- 점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.
- [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
- 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. indexOf()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf() 정의보기</a>
  </div>
</details>

***

### [34. 120869](120869.js)
- PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다.
- 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다.
- spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. includes()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes">includes() 정의보기</a>
    <h4>2. filter()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">filter() 정의보기</a>
    <h4>3. for..of()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of">for..of() 정의보기</a>
    <h4>4. some()</h4>
      ✏️ array.some(v => v > 10)를 했을 때 조건문에 참이 하나라도 있다면 true를 반환하고, 그렇지 않으면 false를 반환합니다.
  </div>
</details>

***

### [35. 120868](120868.js)
- 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
- 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
- 삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다.
- 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. sort()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">sort() 정의보기</a>
  </div>
</details>

***

### [36. 120864](120864.js)
- 문자열 my_string이 매개변수로 주어집니다.
- my_string은 소문자, 대문자, 자연수로만 구성되어있습니다.
- my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. split()</h4>
      ✏️ str.split(/[A-z]/)를 하면 str 안에 A~z까지 문자열을 기준을 의미하는 정규표현식을 사용해서 문자열을 나눠서 배열로 반환합니다.
    <h4>2. for..of()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of">for..of() 정의보기</a>
  </div>
</details>

***

### [37. 120863](120863.js)
- 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다.
- 다항식을 계산할 때는 동류항끼리 계산해 정리합니다.
- 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요.
- 같은 식이라면 가장 짧은 수식을 return 합니다.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. split()</h4>
      ✏️ str.split(/[A-z]/)를 하면 str 안에 A~z까지 문자열을 기준을 의미하는 정규표현식을 사용해서 문자열을 나눠서 배열로 반환합니다.
    <h4>2. forEach()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach() 정의보기</a>
    <h4>3. indexOf()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf() 정의보기</a>
    <h4>4. parseInt()</h4>
      ✏️ num = parseInt('1234', 10)으로 하면 '1234'를 1234라는 정수로 반환합니다.
    <h4>5. join()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join">join() 정의보기</a>
  </div>
</details>

***

### [38. 120862](120862.js)
- 정수 배열 numbers가 매개변수로 주어집니다.
- numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. sort()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">sort() 정의보기</a>
    <h4>2. Math.max()</h4>
      ✏️ Math.max(-12, 5)를 하면 가장 큰 수인 5를 반환합니다.
  </div>
</details>

***

### [39. 120861](120861.js)
- 머쓱이는 RPG게임을 하고 있습니다.
- 게임에는 up, down, left, right 방향키가 있으며 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다.
- 예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1], down을 누른다면 [0, -1], left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다.
- 머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다.
- 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.
- [0, 0]은 board의 정 중앙에 위치합니다.
- 예를 들어 board의 가로 크기가 9라면 캐릭터는 왼쪽으로 최대 [-4, 0]까지 오른쪽으로 최대 [4, 0]까지 이동할 수 있습니다.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. Math.floor()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor">Math.floor() 정의보기</a>
    <h4>2. Math.abs()</h4>
      ✏️ Math.abs(-12)를 하면 -12의 절대값인 12를 반환해줍니다.
  </div>
</details>

***

### [40. 120860](120860.js)
- 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다.
- 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때,
- 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. Math.max()</h4>
      ✏️ Math.max(...[1, 2, 3])을 하면 ...로 배열의 값만 가져와서 큰 수인 3을 반환해줍니다.
    <h4>2. Math.min()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/min">Math.min() 정의보기</a>
    <h4>2. map()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map">map() 정의보기</a>
  </div>
</details>

***

### [41. 120854](120854.js)
- 문자열 배열 strlist가 매개변수로 주어집니다.
- strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. map()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map">map() 정의보기</a>
  </div>
</details>

***

### [42. 120853](120853.js)
- 숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다.
- 문자열에 있는 숫자를 차례대로 더하려고 합니다.
- 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다.
- 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. split()</h4>
      ✏️ str.split(' ')을 하면 ' '을 기준으로 문자열을 나눠서 새로운 배열을 반환합니다.
    <h4>2. reduce()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map">map() 정의보기</a>
    <h4>3. Number()</h4>
      ✏️ Number('123')을 하면 문자열을 숫자로 변환해서 123을 반환합니다.
    <h4>4. forEach()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach() 정의보기</a>
    <h4>5. pop()</h4>
      ✏️ arr.pop()을 하면 arr의 맨 뒤에 있는 값을 삭제해줍니다.
    <h4>6. push()</h4>
      ✏️ arr.push(12)를 하면 arr의 맨 뒤에 12를 삽입해줍니다.
  </div>
</details>

***

### [43. 120852](120852.js)
- 소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다.
- 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다.
- 따라서 12의 소인수는 2와 3입니다.
- 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. Math.floor()</h4>
      ✏️ Math.floor(12.3)을 하면 12.3보다 작거나 같은 정수 중에서 큰 수를 반환해주기 때문에 12를 반환합니다.
    <h4>2. new Set()</h4>
      ✏️ <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set">new Set() 정의보기</a>
  </div>
</details>

***

### [44. 120851](120851.js)
- 문자열 my_string이 매개변수로 주어집니다.
- my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. split()</h4>
      ✏️ str.split(' ')을 하면 공백을 기준으로 문자열을 나눠서 새로운 배열로 반환합니다.
    <h4>2. filter()</h4>
      ✏️ arr.filter(v => v > 0)하면 조건문인 'v > 0'을 만족하는 값들만 모아서 새로운 배열로 반환합니다.
    <h4>3. reduce()</h4>
      ✏️ arr.reduce((a, c) => a + c, 0)을 하면 초기값은 0이고, arr의 현재 값이 c에 전달되고, a에 그동안 합한 수를 저장하는 변수입니다. 최종적으로 a를 반환합니다.
  </div>
</details>

***

### [45. 120850](120850.js)
- 문자열 my_string이 매개변수로 주어질 때,
- my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. split()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split">split() 정의보기</a>
    <h4>2. map()</h4>
      ✏️ arr.map(v => v > 0 ? v : null)) 을 했을 때 조건문에 맞으면 알맞은 값을 반환해서 새로운 배열로 만들어줍니다.
    <h4>3. filter()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">filter() 정의보기</a>
  </div>
</details>

***

### [46. 178871](178871.js)
- 얀에서는 매년 달리기 경주가 열립니다.
- 해설진들은 선수들이 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부릅니다.
- 예를 들어 1등부터 3등까지 "mumu", "soe", "poe" 선수들이 순서대로 달리고 있을 때, 해설진이 "soe"선수를 불렀다면 2등인 "soe" 선수가 1등인 "mumu" 선수를 추월했다는 것입니다
- 즉 "soe" 선수가 1등, "mumu" 선수가 2등으로 바뀝니다.
- 선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players와 해설진이 부른 이름을 담은 문자열 배열 callings가 매개변수로 주어질 때,
- 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아 return 하는 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. new Map()</h4>
      ✏️ let maps = new Map()로 키-값 쌍으로 이루어진 Map 객체를 생성할 수 있습니다.
    <h4>2. set() [new Map()에서 사용]</h4>
      ✏️ maps.set('key1', 'value1')으로 'key1'이 존재하지 않을 때만 키-값 쌍으로 데이터를 삽입할 수 있습니다.
    <h4>3. get() [new Map()에서 사용]</h4>
      ✏️ maps.get('key1')을 하면 값('value1')을 반환합니다. 만약 존재하지 않는다면 undefined를 반환합니다.
    <h4>4. delete() [new Map()에서 사용]</h4>
      ✏️ maps.delete('key1')을 하면 해당 데이터 전체를 삭제해줍니다. 삭제가 가능하다면 true, 그렇지 않다면 false를 반환합니다.
    <h4>5. forEach()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach() 정의보기</a>
  </div>
</details>

***

### [47. 176963](176963.js)
- 사진들을 보며 추억에 젖어 있던 루는 사진별로 추억 점수를 매길려고 합니다. 
- 사진 속에 나오는 인물의 그리움 점수를 모두 합산한 값이 해당 사진의 추억 점수가 됩니다.
- 예를 들어 사진 속 인물의 이름이 ["may", "kein", "kain"]이고 각 인물의 그리움 점수가 [5점, 10점, 1점]일 때 해당 사진의 추억 점수는 16(5 + 10 + 1)점이 됩니다.
- 다른 사진 속 인물의 이름이 ["kali", "mari", "don", "tony"]이고 ["kali", "mari", "don"]의 그리움 점수가 각각 [11점, 1점, 55점]]이고,
- "tony"는 그리움 점수가 없을 때, 이 사진의 추억 점수는 3명의 그리움 점수를 합한 67(11 + 1 + 55)점입니다.
- 그리워하는 사람의 이름을 담은 문자열 배열 name, 각 사람별 그리움 점수를 담은 정수 배열 yearning, 각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열 photo가 매개변수로 주어질 때,
- 사진들의 추억 점수를 photo에 주어진 순서대로 배열에 담아 return하는 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. new Map()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map">new Map() 정의보기</a>
    <h4>2. forEach()</h4>
      ✏️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach() 정의보기</a>
  </div>
</details>

***

### [48. 172928](172928.js)
- 지나다니는 길을 'O', 장애물을 'X'로 나타낸 직사각형 격자 모양의 공원에서 로봇 강아지가 산책을 하려합니다.
- 산책은 로봇 강아지에 미리 입력된 명령에 따라 진행하며, 명령은 다음과 같은 형식으로 주어집니다.
- 예를 들어 "E 5"는 로봇 강아지가 현재 위치에서 동쪽으로 5칸 이동했다는 의미입니다
- 로봇 강아지는 명령을 수행하기 전에 다음 두 가지를 먼저 확인합니다.
- 1️⃣주어진 방향으로 이동할 때 공원을 벗어나는지 확인합니다. 2️⃣주어진 방향으로 이동 중 장애물을 만나는지 확인합니다.
- 위 두 가지중 어느 하나라도 해당된다면, 로봇 강아지는 해당 명령을 무시하고 다음 명령을 수행합니다.
- 공원의 가로 길이가 W, 세로 길이가 H라고 할 때, 공원의 좌측 상단의 좌표는 (0, 0), 우측 하단의 좌표는 (H - 1, W - 1) 입니다.
- 공원을 나타내는 문자열 배열 park, 로봇 강아지가 수행할 명령이 담긴 문자열 배열 routes가 매개변수로 주어질 때,
- 로봇 강아지가 모든 명령을 수행 후 놓인 위치를 [세로 방향 좌표, 가로 방향 좌표] 순으로 배열에 담아 return 하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드와 제어문</strong></summary>
  <div markdown="1">
    <h4>1. indexOf()</h4>
      ✏️ indexOf를 활용해서 park에서 시작지점['S']를 찾는 것에 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf() 정의보기</a>
    <h4>2. forEach()</h4>
      ✏️ park에서 시작지점을 찾기 위해 각 값을 반복할 때 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach() 정의보기</a>
    <h4>3. for..of</h4>
      ✏️ routes의 값을 반복하기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of">for...of 정의보기</a>
    <h4>4. switch</h4>
      ✏️ case는 방향을 기준으로 정의해서 routes에서 방향과 알맞는 case로 이동되고 그 안에서 좌표 이동 코드가 구현되도록 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/switch">switch 정의보기</a>
  </div>
</details>

***

### [49. 161990](161990.js)
- 머쓱이는 본인의 컴퓨터 바탕화면이 너무 지저분하다고 생각해서 저장해 둔 파일들을 전부 삭제하기로 했습니다.
- 머쓱이의 컴퓨터 바탕화면의 상태를 나타내는 문자열 배열 wallpaper가 매개변수로 주어질 때,
- 바탕화면의 파일들을 한 번에 삭제하기 위해 최소한의 이동거리를 갖는 드래그의 시작점과 끝점을 담은 정수 배열을 return하는 solution 함수를 작성해 주세요.
- 드래그의 시작점이 (lux, luy), 끝점이 (rdx, rdy)라면 정수 배열 [lux, luy, rdx, rdy]를 return하면 됩니다.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. indexOf()</h4>
      ✏️ indexOf를 활용해서 wallpaper의 y좌표와 x좌표가 되는 모든 경우의 수를 찾는 것에 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf() 정의보기</a>
    <h4>2. forEach()</h4>
      ✏️ wallpaper에서 #이 어디있는지 찾을 때 반복문으로 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach() 정의보기</a>
    <h4>3. lastIndexOf()</h4>
      ✏️ indexOf()는 가장 앞에 있는 것만 반환하기 때문에 마지막에 있는 '#'를 찾지 못할 경우를 대비하기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf">lastIndexOf() 정의보기</a>
    <h4>4. Set()</h4>
      ✏️ x 좌표에 저장된 값들 중 중복된 것을 제거하는 것에 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set">Set 정의보기</a>
    <h4>5. Math.min()</h4>
      ✏️ 첫 번째 y좌표와 x좌표를 찾는 것에 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/min">Math.min() 정의보기</a>
    <h4>6. Math.max()</h4>
      ✏️ 마지막 y좌표와 x좌표를 찾는 것에 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/max">Math.max() 정의보기</a>
  </div>
</details>

***

### [50. 150370](150370.js)
- 수집된 개인정보는 유효기간 전까지만 보관 가능하며, 유효기간이 지났다면 반드시 파기해야 합니다.
- 오늘 날짜를 의미하는 문자열 today, 약관의 유효기간을 담은 1차원 문자열 배열 terms와 수집된 개인정보의 정보를 담은 1차원 문자열 배열 privacies가 매개변수로 주어집니다.
- 이때 파기해야 할 개인정보의 번호를 오름차순으로 1차원 정수 배열에 담아 return 하도록 solution 함수를 완성해 주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. set()</h4>
      ✏️ terms에서 유효기간 타입을 key로, 유효기간을 value로 Map()에 저장하는데 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map/set">set() 정의보기</a>
    <h4>2. get() [Map()에서 사용]</h4>
      ✏️ privacies에서 유효기간 타입이 terms를 저장한 Map()에 있는지 값을 반환할 때 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map/get">get() 정의보기</a>
    <h4>3. split()</h4>
      ✏️ today와 terms, privacies 안에서 같은 정보끼리 나누어서 새로운 배열로 만들 때 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split">split() 정의보기</a>
    <h4>4. Math.floor()</h4>
      ✏️ 유효기간에서 연도를 나눌 때 나머지는 내림하고 몫만 사용하기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor">Math.floor() 정의보기</a>
  </div>
</details>

***

### [51. 161989](161989.js)
- 어느 학교에 페인트가 칠해진 길이가 n미터인 벽이 있습니다.
- 롤러가 벽에서 벗어나면 안 되고 구역의 일부분만 포함되도록 칠하면 안 됩니다.
- 정수 n, m과 다시 페인트를 칠하기로 정한 구역들의 번호가 담긴 정수 배열 section이 매개변수로 주어질 때,
- 롤러로 페인트칠해야 하는 최소 횟수를 return 하는 solution 함수를 작성해 주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. fill()</h4>
      ✏️ 배열을 초기화하기 위해 fill을 사용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill">fill() 정의보기</a>
    <h4>2. slice()</h4>
      ✏️ 벽에서 롤러가 칠할 수 있는 최대값을 찾기 위해 slice를 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice">slice() 정의보기</a>
    <h4>3. indexOf()</h4>
      ✏️ 칠해진 벽인지 아닌지 구분하기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf() 정의보기</a>
  </div>
</details>

***

### [52. 133502](133502.js)
- 함께 일을 하는 다른 직원들이 햄버거에 들어갈 재료를 조리해 주면 조리된 순서대로 상수의 앞에 아래서부터 위로 쌓이게 되고,
- 상수는 순서에 맞게 쌓여서 완성된 햄버거를 따로 옮겨 포장을 하게 됩니다.
- 상수가 일하는 가게는 정해진 순서(아래서부터, 빵 – 야채 – 고기 - 빵)로 쌓인 햄버거만 포장을 합니다.
- 상수에게 전해지는 재료의 정보를 나타내는 정수 배열 ingredient가 주어졌을 때, 상수가 포장하는 햄버거의 개수를 return 하도록 solution 함수를 완성하시오.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. forEach()</h4>
      ✏️ ingredient의 데이터들을 순차적으로 사용하기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach() 정의보기</a>
    <h4>2. push()</h4>
      ✏️ 배열 stack에 식재료를 저장하기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push">push() 정의보기</a>
    <h4>3. pop()</h4>
      ✏️ stack에서 사용한 식재료를 제거하기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/pop">pop() 정의보기</a>
  </div>
</details>

***

### [53. 131128](131128.js)
- 두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다.
- X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다.
- X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.
- X = 3403이고 Y = 13203이라면, X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다.
- 두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드와 제어문</strong></summary>
  <div markdown="1">
    <h4>1. split()</h4>
      ✏️ X와 Y가 문자열이기 때문에 배열로 변환하기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split">split() 정의보기</a>
    <h4>2. sort()</h4>
      ✏️ X와 Y를 배열로 변환하고 오름차순과 내림차순을 하고, 마지막에 값을 반환할 때 가장 큰 수로 만들기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">sort() 정의보기</a>
    <h4>3. while()</h4>
      ✏️ X와 Y에서 일치하는 숫자를 찾기 위해 반복문으로 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/while">while() 정의보기</a>
    <h4>4. join()</h4>
      ✏️ 마지막에 값을 반환할 때 배열로 되어있는 것을 문자열로 변환하기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join">join() 정의보기</a>
  </div>
</details>

***

### [54. 86491](86491.js)
- 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다.
- 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다.
- 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. Math.max()</h4>
      ✏️ 가로와 세로의 길이를 저장한 배열에서 가장 큰 수를 가져오기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/max">Math.max() 정의보기</a>
    <h4>2. forEach()</h4>
      ✏️ sizes에서 가로와 세로의 길이를 비교하기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach() 정의보기</a>
    <h4>3. push()</h4>
      ✏️ 가로 길이와 세로 길이를 저장하는 배열에 값을 넣기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push">push() 정의보기</a>
  </div>
</details>

***

### [55. 87389](87389.js)
- 자연수 n이 매개변수로 주어집니다.
- n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요.
- 답이 항상 존재함은 증명될 수 있습니다.
</br>

<details>
  <summary><strong>사용된 제어문</strong></summary>
  <div markdown="1">
    <h4>1. for</h4>
      ✏️ n에서 -1을 한 값만큼 반복해서 해당 값과 나눴을 때 0이 되는 수를 찾기 위해 반복문을 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for">for 정의보기</a>
  </div>
</details>

***

### [56. 140108](140108.js)
- 먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
- 이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다.
- 처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.
- s에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 남은 부분이 없다면 종료합니다.
- 만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료합니다.
- 문자열 s가 매개변수로 주어질 때, 위 과정과 같이 문자열들로 분해하고, 분해한 문자열의 개수를 return 하는 함수 solution을 완성하세요.
</br>

<details>
  <summary><strong>사용된 제어문</strong></summary>
  <div markdown="1">
    <h4>1. while</h4>
      ✏️ s에 저장된 문자를 1개씩 순차적으로 반복하기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/while">while 정의보기</a>
  </div>
</details>

***

### [57. 155652](155652.js)
- 두 문자열 s와 skip, 그리고 자연수 index가 주어질 때, 다음 규칙에 따라 문자열을 만들려 합니다.
- 문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다.
- index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아갑니다.
- skip에 있는 알파벳은 제외하고 건너뜁니다.
- 두 문자열 s와 skip, 그리고 자연수 index가 매개변수로 주어질 때 위 규칙대로 s를 변환한 결과를 return하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. charCodeAt()</h4>
      ✏️ 알파벳을 아스키 코드로 변환하기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt">charCodeAt() 정의보기</a>
    <h4>2. fromCodePoint()</h4>
      ✏️ 아스키 코드를 다시 알파벳으로 변환하기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint">fromCodePoint() 정의보기</a>
    <h4>3. filter()</h4>
      ✏️ skip에 해당하지 않는 문자만 가져오기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">filter() 정의보기</a>
    <h4>4. indexOf()</h4>
      ✏️ index만큼 알파벳을 가져왔을 때 skip에 해당하는 문자가 있는지 확인하기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf() 정의보기</a>
  </div>
</details>

***

### [58. 138477](138477.js)
- 이 프로그램에서는 매일 "명예의 전당"의 최하위 점수를 발표합니다.
- 예를 들어, k = 3이고, 7일 동안 진행된 가수의 점수가 [10, 100, 20, 150, 1, 100, 200]이라면,
- 명예의 전당에서 발표된 점수는 아래의 그림과 같이 [10, 10, 10, 20, 20, 100, 100]입니다.
- 명예의 전당 목록의 점수의 개수 k, 1일부터 마지막 날까지 출연한 가수들의 점수인 score가 주어졌을 때,
- 매일 발표된 명예의 전당의 최하위 점수를 return하는 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. Math.min()</h4>
      ✏️ k개 만큼 점수를 저장했을 때 가장 작은 점수를 찾기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/min">Math.min() 정의보기</a>
    <h4>2. splice()</h4>
      ✏️ 점수를 저장하고 해당 길이가 k개 보다 클 때, 작은 수를 배열에서 삭제하기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice">splice() 정의보기</a>
    <h4>3. indexOf()</h4>
      ✏️ 점수를 저장하고 해당 길이가 k개 보다 클 때, 가장 작은 수를 찾고 해당 인덱스가 무엇인지 알기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf() 정의보기</a>
  </div>
</details>

***

### [59. 81301](81301.js)
- 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.
- 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.
- 1478 → "one4seveneight", 234567 → "23four5six7", 10203 → "1zerotwozero3"
- 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다.
- s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. push()</h4>
      ✏️ answer라는 배열에 숫자를 삽입하기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push">push() 정의보기</a>
    <h4>2. join()</h4>
      ✏️ 마지막에 정답을 반환할 때 숫자형으로 변환해야하기 때문에 배열을 문자열로 변환하고 1을 곱해줬을 때 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join">join() 정의보기</a>
  </div>
</details>

***

### [60. 42862](42862.js)
- 점심시간에 도둑이 들어, 체육복을 도난당한 학생들에게 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다.
- 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
- 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다.
- 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때,
- 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.
</br>

<details>
  <summary><strong>사용된 메서드</strong></summary>
  <div markdown="1">
    <h4>1. filter()</h4>
      ✏️ reserve와 lost에서 서로 겹치는 값이 있을 경우 제거하기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">filter() 정의보기</a>
    <h4>2. indexOf()</h4>
      ✏️ reserve에서 -1 또는 +1을 했을 때 lost에 해당 값이 있는지 확인하기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf() 정의보기</a>
    <h4>3. splice()</h4>
      ✏️ lost에서 체육복을 빌린 학생을 제거하기 위해 활용했습니다.
      ➡️ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice">splice() 정의보기</a>
  </div>
</details>
