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
