# Coding Test
### ๐์ฌ์ฉํ ์ธ์ด๐
- <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>
***

### [1. 120924](120924.js)
- ๋ฑ์ฐจ์์ด ํน์ ๋ฑ๋น์์ด common์ด ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋, ๋ง์ง๋ง ์์ ๋ค์์ผ๋ก ์ฌ ์ซ์๋ฅผ return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด๋ณด์ธ์.
***

### [2. 120923](120923.js)
- ์ฐ์๋ ์ธ ๊ฐ์ ์ ์๋ฅผ ๋ํด 12๊ฐ ๋๋ ๊ฒฝ์ฐ๋ 3, 4, 5์๋๋ค. ๋ ์ ์ num๊ณผ total์ด ์ฃผ์ด์ง๋๋ค.
- ์ฐ์๋ ์ num๊ฐ๋ฅผ ๋ํ ๊ฐ์ด total์ด ๋  ๋, ์ ์ ๋ฐฐ์ด์ ์ค๋ฆ์ฐจ์์ผ๋ก ๋ด์ returnํ๋๋ก solutionํจ์๋ฅผ ์์ฑํด๋ณด์ธ์.
</br>

<details>
  <summary><strong>์ฌ์ฉ๋ ๋ฉ์๋</strong></summary>
  <div markdown="1">
    <h4>1. Array.from()</h4>
      โ๏ธ Array.from('kdo')๋ฅผ ํ๋ฉด ['k', 'd', 'o']๋ก ์๋ก์ด ๊ฐ์ฒด๋ฅผ ์์ฑํฉ๋๋ค.
    <h4>2. Math.floor()</h4>
      โ๏ธ Math.floor(3/2)๋ฅผ ํ๋ฉด ๋ด๋ฆผ์ด ์๋์ผ๋ก ์ด๋ฃจ์ด์ ธ์ ๊ฒฐ๊ณผ 1์ ๋ฐํํฉ๋๋ค.
    <h4>3. Math.ceil()</h4>
      โ๏ธ Math.ceil(3.5)๋ฅผ ํ๋ฉด ํฌ๊ฑฐ๋ ๊ฐ์ ์ซ์ ์ค ๊ฐ์ฅ ์์ ์ซ์ 4๋ฅผ ๋ฐํํฉ๋๋ค.
  </div>
</details>

***

### [3. 120922](120922.js)
- ๋จธ์ฑ์ด๋ ํฐ ์ข์ด๋ฅผ 1 x 1 ํฌ๊ธฐ๋ก ์๋ฅด๋ ค๊ณ  ํฉ๋๋ค. ์๋ฅผ ๋ค์ด 2 x 2 ํฌ๊ธฐ์ ์ข์ด๋ฅผ 1 x 1 ํฌ๊ธฐ๋ก ์๋ฅด๋ ค๋ฉด ์ต์ ๊ฐ์์ง ์ธ ๋ฒ์ด ํ์ํฉ๋๋ค.
- ์ ์ M, N์ด ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋, M x N ํฌ๊ธฐ์ ์ข์ด๋ฅผ ์ต์๋ก ๊ฐ์์ง ํด์ผํ๋ ํ์๋ฅผ return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด๋ณด์ธ์.
***

### [4. 120921](120921.js)
- ๋ฌธ์์ด "hello"์์ ๊ฐ ๋ฌธ์๋ฅผ ์ค๋ฅธ์ชฝ์ผ๋ก ํ ์นธ์ฉ ๋ฐ๊ณ  ๋ง์ง๋ง ๋ฌธ์๋ ๋งจ ์์ผ๋ก ์ด๋์ํค๋ฉด "ohell"์ด ๋ฉ๋๋ค.
- ์ด๊ฒ์ ๋ฌธ์์ด์ ๋ฏผ๋ค๊ณ  ์ ์ํ๋ค๋ฉด ๋ฌธ์์ด A์ B๊ฐ ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋, A๋ฅผ ๋ฐ์ด์ B๊ฐ ๋  ์ ์๋ค๋ฉด ๋ฐ์ด์ผ ํ๋ ์ต์ ํ์๋ฅผ returnํ๊ณ  ๋ฐ์ด์ B๊ฐ ๋  ์ ์์ผ๋ฉด -1์ return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด๋ณด์ธ์.
</br>

<details>
  <summary><strong>์ฌ์ฉ๋ ๋ฉ์๋</strong></summary>
  
  <div markdown="1">
    <h4>1. Array.from()</h4>
      โ๏ธ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from">Array.from() ์ ์๋ณด๊ธฐ</a>
    <h4>2. unshift()</h4>
      โ๏ธ arr.unshift(์ธ์)๋ฅผ ํ๋ฉด ์ธ์๋ฅผ arr๋ผ๋ ๋ฐฐ์ด ๋งจ ์์ ์ถ๊ฐํ๊ณ  ๊ทธ ๊ธธ์ด๋ฅผ ๋ฐํํฉ๋๋ค.
    <h4>3. pop()</h4>
      โ๏ธ ๋ฐฐ์ด์ ๋ง์ง๋ง ์์๋ฅผ ์ ๊ฑฐํ๊ณ   ๋ฌธ์๋ฅผ ๋ฐํํฉ๋๋ค.
    <h4>4. join()</h4>
      โ๏ธ join(์ธ์)๋ฅผ ํ๋ฉด ์ธ์๋ฅผ ๊ธฐ์ค์ผ๋ก ๋ฐฐ์ด์ ๊ฐ ์์๋ฅผ ๊ตฌ๋ถํด์ ๋ฌธ์์ด์ ๋ฐํํฉ๋๋ค.
  </div>
</details>

***

### [5. 120913](120913.js)
- ๋ฌธ์์ด my_str๊ณผ n์ด ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋, my_str์ ๊ธธ์ด n์ฉ ์๋ผ์ ์ ์ฅํ ๋ฐฐ์ด์ returnํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์.
</br>

<details>
  <summary><strong>์ฌ์ฉ๋ ๋ฉ์๋</strong></summary>
  <div markdown="1">
    <h4>1. slice()</h4>
    โ๏ธ str.slice(์์, ๋)์ ํ๋ฉด ์์ ์ธ๋ฑ์ค๋ถํฐ (๋ - 1) ์ธ๋ฑ์ค๊น์ง ๋ฌธ์์ด์ ์๋ฅด๊ณ  ๋ฐํํฉ๋๋ค. ์๋ณธ ๋ฌธ์์ด์ ๋ฐ๋์ง ์์ต๋๋ค.
    <h4>2. push()</h4>
    โ๏ธ array.push(์ธ์)์ ํ๋ฉด array ๋งจ ๋ง์ง๋ง์ ์ธ์๊ฐ ์ฝ์๋ฉ๋๋ค.
  </div>
</details>

***

### [6. 120912](120912.js)
- ๋จธ์ฑ์ด๋ ํ์ด์ ์ซ์ 7์ ๊ฐ์ฅ ์ข์ํฉ๋๋ค. ์ ์ ๋ฐฐ์ด array๊ฐ ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋, 7์ด ์ด ๋ช ๊ฐ ์๋์ง return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด๋ณด์ธ์.
</br>

<details>
  <summary><strong>์ฌ์ฉ๋ ๋ฉ์๋</strong></summary>
  <div markdown="1">
    <h4>1. forEach()</h4>
      โ๏ธ array.forEach((์ธ์, {์ธ๋ฑ์ค}) => console.log(์ธ์))๋ฅผ ํ๋ฉด array์ ๊ฐ๊ฐ์ ๊ฐ์ด ์ธ์๋ก ๋์ด๊ฐ๊ฒ ๋๊ณ  console์ฐฝ์ ํ๋์ฉ ์ถ๋ ฅ๋ฉ๋๋ค. ํญ์ undefined๋ฅผ ๋ฐํํฉ๋๋ค.
    <h4>2. map()</h4>
      โ๏ธ array.map((์ธ์, {์ธ๋ฑ์ค}) => console.log(์ธ์))๋ฅผ ํ๋ฉด forEach์ ๋์ผํ๊ฒ console์ฐฝ์ ํ๋์ฉ ์ถ๋ ฅ๋์ง๋ง, map์ ํญ์ ์๋ก์ด ๋ฐฐ์ด์ ๋ง๋ค์ด ๋ฐํํฉ๋๋ค.
    <h4>3. join()</h4>
      โ๏ธ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join">join() ์ ์๋ณด๊ธฐ</a>
  </div>
</details>

***

### [7. 120911](120911.js)
- ์์ด ๋์๋ฌธ์๋ก ์ด๋ฃจ์ด์ง ๋ฌธ์์ด my_string์ด ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋,
- my_string์ ๋ชจ๋ ์๋ฌธ์๋ก ๋ฐ๊พธ๊ณ  ์ํ๋ฒณ ์์๋๋ก ์ ๋ ฌํ ๋ฌธ์์ด์ return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด๋ณด์ธ์.
</br>

<details>
  <summary><strong>์ฌ์ฉ๋ ๋ฉ์๋</strong></summary>
  <div markdown="1">
    <h4>1. toLowerCase()</h4>
      โ๏ธ str.toLowerCase()๋ฅผ ํ๋ฉด ๋ฌธ์์ด ์ ์ฒด๋ฅผ ์๋ฌธ์๋ก ๋ณํํด์ค๋๋ค.
    <h4>2. Array.from()</h4>
      โ๏ธ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from">Array.from() ์ ์๋ณด๊ธฐ</a>
    <h4>3. sort()</h4>
      โ๏ธ array.sort()๋ฅผ ํ๋ฉด ์ซ์๋ ์์ ์ ๋ถํฐ ํฐ ์ ์์๋ก ์ ๋ ฌ๋๊ณ , ๋ฌธ์๋ ์ ๋์ฝ๋ ์ค ์ ์ชฝ๋ถํฐ ์์๋๋ก ์ ๋ ฌ๋ฉ๋๋ค.
    <h4>4. join()</h4>
      โ๏ธ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join">join() ์ ์๋ณด๊ธฐ</a>
  </div>
</details>

***

### [8. 120910](120910.js)
- ์ด๋ค ์ธ๊ท ์ 1์๊ฐ์ ๋๋ฐฐ๋งํผ ์ฆ์ํ๋ค๊ณ  ํฉ๋๋ค.
- ์ฒ์ ์ธ๊ท ์ ๋ง๋ฆฌ์ n๊ณผ ๊ฒฝ๊ณผํ ์๊ฐ t๊ฐ ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋ t์๊ฐ ํ ์ธ๊ท ์ ์๋ฅผ returnํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์.
***

### [9. 120909](120909.js)
- ์ด๋ค ์์ฐ์๋ฅผ ์ ๊ณฑํ์ ๋ ๋์ค๋ ์ ์๋ฅผ ์ ๊ณฑ์๋ผ๊ณ  ํฉ๋๋ค.
- ์ ์ n์ด ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋, n์ด ์ ๊ณฑ์๋ผ๋ฉด 1์ ์๋๋ผ๋ฉด 2๋ฅผ returnํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์.
</br>

<details>
  <summary><strong>์ฌ์ฉ๋ ๋ฉ์๋</strong></summary>
  <div markdown="1">
    <h4>1. Math.sqrt()</h4>
      โ๏ธ Math.sqrt(144)๋ฅผ ํ๋ฉด 12๋ฅผ ๋ฐํํ๊ณ , Math.sqrt(2)๋ฅผ ํ๋ฉด 1.4142... ๋ฅผ ๋ฐํํด์ ํด๋น ์ซ์์ ์ ๊ณฑ๊ทผ์ ํ์ธํ  ์ ์์ต๋๋ค.
  </div>
</details>

***

### [10. 120908](120908.js)
- ๋ฌธ์์ด str1, str2๊ฐ ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง๋๋ค.
- str1 ์์ str2๊ฐ ์๋ค๋ฉด 1์ ์๋ค๋ฉด 2๋ฅผ returnํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์.
</br>

<details>
  <summary><strong>์ฌ์ฉ๋ ๋ฉ์๋</strong></summary>
  <div markdown="1">
    <h4>1. includes()</h4>
      โ๏ธ str.includes('์ธ์')์ ํ์ ๋ str์์ ์ธ์๋ก ๋ฃ์ ๋ฌธ์์ด์ด ์๋ค๋ฉด true๋ฅผ ๋ฐํํ๊ณ , ์๋ค๋ฉด false๋ฅผ ๋ฐํํฉ๋๋ค.
  </div>
</details>

***

### [11. 120907](120907.js)
- ๋ง์, ๋บ์ ์์๋ค์ด 'X [์ฐ์ฐ์] Y = Z' ํํ๋ก ๋ค์ด์๋ ๋ฌธ์์ด ๋ฐฐ์ด quiz๊ฐ ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง๋๋ค.
- ์์์ด ์ณ๋ค๋ฉด "O"๋ฅผ ํ๋ฆฌ๋ค๋ฉด "X"๋ฅผ ์์๋๋ก ๋ด์ ๋ฐฐ์ด์ returnํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์.
</br>

<details>
  <summary><strong>์ฌ์ฉ๋ ๋ฉ์๋</strong></summary>
  <div markdown="1">
    <h4>1. map()</h4>
      โ๏ธ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map">map() ์ ์๋ณด๊ธฐ</a>
    <h4>2. split()</h4>
      โ๏ธ str.split(" ")๋ฅผ ํ๋ฉด " "์ ๊ธฐ์ค์ผ๋ก ๋ฌธ์์ด์ ๋๋ ์ ๋ฐฐ์ด๋ก ๋ฐํํฉ๋๋ค.
    <h4>3. (new Function('return ' +))()</h4>
      โ๏ธ (new Function('return ' + ๋ณ์))()๋ฅผ ํ๋ฉด eval์ฒ๋ผ ์๋ ฅ ๋ฐ์ ๋ณ์๋ฅผ ์ฝ๋๋ก ์ธ์ํ๊ณ  ๊ฒฐ๊ณผ๋ฅผ ๋ฐํํฉ๋๋ค. <strong>eval()๋ฅผ ์ฌ์ฉํด์ผ ํ  ๋ ๋์ฒดํ๊ธฐ ์ข์ต๋๋ค.</strong>
  </div>
</details>

***

### [12. 120906](120906.js)
- ์ ์ n์ด ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋ n์ ๊ฐ ์๋ฆฌ ์ซ์์ ํฉ์ returnํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์.
</br>

<details>
  <summary><strong>์ฌ์ฉ๋ ๋ฉ์๋</strong></summary>
  <div markdown="1">
    <h4>1. String()</h4>
      โ๏ธ String(123)์ ํ๋ฉด ๋ฌธ์์ด '123'์ผ๋ก ๋ฐํํฉ๋๋ค.
    <h4>2. for..of</h4>
      โ๏ธ for(let item of array){}๋ฅผ ํ๋ฉด array์ ์๋ ๊ฐ์ item์ผ๋ก ์ ๋ฌํ๋ฉด์ {} ์์ ์๋ ๋ช๋ น๋ฌธ์ ๋ฐ๋ณต์ ์ผ๋ก ์คํํฉ๋๋ค.
  </div>
</details>

***

### [13. 120905](120905.js)
- ์ ์ n๊ณผ ์ ์ ๋ฐฐ์ด numlist๊ฐ ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋,
- numlist์์ n์ ๋ฐฐ์๊ฐ ์๋ ์๋ค์ ์ ๊ฑฐํ ๋ฐฐ์ด์ returnํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์.
</br>

<details>
  <summary><strong>์ฌ์ฉ๋ ๋ฉ์๋</strong></summary>
  <div markdown="1">
    <h4>1. forEach()</h4>
      โ๏ธ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach() ์ ์๋ณด๊ธฐ</a>
    <h4>2. filter()</h4>
      โ๏ธ array.filter(item => item > 1)์ ํ๋ฉด **item > 1** ์ด๋ผ๋ ์กฐ๊ฑด๋ฌธ์ ์ฐธ์ธ ๊ฐ๋ง์ผ๋ก ์๋ก์ด ๋ฐฐ์ด์ ๋ง๋ค์ด ๋ฐํํฉ๋๋ค.
  </div>
</details>

***

### [14. 120904](120904.js)
- ์ ์ num๊ณผ k๊ฐ ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋,
- num์ ์ด๋ฃจ๋ ์ซ์ ์ค์ k๊ฐ ์์ผ๋ฉด num์ ๊ทธ ์ซ์๊ฐ ์๋ ์๋ฆฌ ์๋ฅผ returnํ๊ณ  ์์ผ๋ฉด -1์ return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด๋ณด์ธ์.
</br>

<details>
  <summary><strong>์ฌ์ฉ๋ ๋ฉ์๋</strong></summary>
  <div markdown="1">
    <h4>1. String()</h4>
      โ๏ธ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String">String() ์ ์๋ณด๊ธฐ</a>
    <h4>2. indexOf()</h4>
      โ๏ธ str.indexOf(์ฐพ๋ ๋ฌธ์)๋ฅผ ํ๋ฉด str์ ์ฐพ๋ ๋ฌธ์์ ์ผ์นํ๋ ์ฒซ ๋ฒ์งธ index๋ฅผ ๋ฐํํ๊ณ , ๋ง์ฝ ์๋ค๋ฉด -1์ ๋ฐํํฉ๋๋ค.
  </div>
</details>

***

### [15. 120903](120903.js)
- ๋ ๋ฐฐ์ด์ด ์ผ๋ง๋ ์ ์ฌํ์ง ํ์ธํด๋ณด๋ ค๊ณ  ํฉ๋๋ค.
- ๋ฌธ์์ด ๋ฐฐ์ด s1๊ณผ s2๊ฐ ์ฃผ์ด์ง ๋ ๊ฐ์ ์์์ ๊ฐ์๋ฅผ returnํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์.
</br>

<details>
  <summary><strong>์ฌ์ฉ๋ ๋ฉ์๋</strong></summary>
  <div markdown="1">
    <h4>1. concat()</h4>
      โ๏ธ str.concat(์ธ์)๋ฅผ ํ๋ฉด ๋ฌธ์์ด์ ์ธ์๋ฅผ ํฉ์ณ์ ์๋ก์ด ๋ฌธ์์ด์ ๋ฐํํฉ๋๋ค. ๋ฐฐ์ด๋ ๊ฐ๋ฅํฉ๋๋ค.
    <h4>2. Set()</h4>
      โ๏ธ let newArr = new Set(arr)๋ฅผ ํ์ ๋ arr์์ ์ค๋ณต๋๋ ๊ฐ์ ์ ๊ฑฐํ ๋ค ์๋ก์ด ๋ฐฐ์ด์ ๋ฐํํฉ๋๋ค.
    <h4>3. size()</h4>
      โ๏ธ newArr.size()๋ length์ ๋๊ฐ์ ๊ธฐ๋ฅ์ ํ์ง๋ง Set ๊ฐ์ฒด์ ์์์ ๊ฐ์๋ฅผ ๋ฐํํ๋ ๊ฒ์ด ํน์ง์๋๋ค.
  </div>
  </details>
  
***

### [16. 120902](120902.js)
- my_string์ "3 + 5"์ฒ๋ผ ๋ฌธ์์ด๋ก ๋ ์์์๋๋ค.
- ๋ฌธ์์ด my_string์ด ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋, ์์์ ๊ณ์ฐํ ๊ฐ์ return ํ๋ solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์.
</br>

<details>
  <summary><strong>์ฌ์ฉ๋ ๋ฉ์๋</strong></summary>
  <div markdown="1">
    <h4>1. (new Function('return ' +))()</h4>
      โ๏ธ (new Function('return ' + ๋ณ์))()๋ฅผ ํ๋ฉด eval์ฒ๋ผ ์๋ ฅ ๋ฐ์ ๋ณ์๋ฅผ ์ฝ๋๋ก ์ธ์ํ๊ณ  ๊ฒฐ๊ณผ๋ฅผ ๋ฐํํฉ๋๋ค.
    <h4>2. split()</h4>
      โ๏ธ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split">split() ์ ์๋ณด๊ธฐ</a>
    <h4>3. filter()</h4>
      โ๏ธ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">filter() ์ ์๋ณด๊ธฐ</a>
    <h4>4. unshift()</h4>
      โ๏ธ arr.unshift(์ธ์)๋ฅผ ํ๋ฉด arr์ ๋งจ ์์ชฝ์ ์ธ์๊ฐ ์ฝ์๋ฉ๋๋ค.
    <h4>5. shift()</h4>
    โ๏ธ arr.shift()๋ฅผ ํ๋ฉด arr์ ๋งจ ์์ชฝ์ ์๋ ๊ฐ์ ์ ๊ฑฐํ๊ณ  ํค๋น ๊ฐ์ ๋ฐํํฉ๋๋ค.
  </div>
</details>

***

### [17. 120899](120899.js)
- ์ ์ ๋ฐฐ์ด array๊ฐ ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋, ๊ฐ์ฅ ํฐ ์์ ๊ทธ ์์ ์ธ๋ฑ์ค๋ฅผ ๋ด์ ๋ฐฐ์ด์ return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด๋ณด์ธ์.
</br>

<details>
  <summary><strong>์ฌ์ฉ๋ ๋ฉ์๋</strong></summary>
  <div markdown="1">
    <h4>1. Math.max()</h4>
      โ๏ธ Math.max(1, 5, 3)์ ํ๋ฉด ๋๊ฒจ๋ฐ์ ์ธ์ ์ค ๊ฐ์ฅ ํฐ ์์ธ 5๋ฅผ ๋ฐํํฉ๋๋ค.
    <h4>2. indexOf()</h4>
      โ๏ธ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf() ์ ์๋ณด๊ธฐ</a>
  </div>
</details>

***

### [18. 120897](120897.js)
- ์ ์ n์ด ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋, n์ ์ฝ์๋ฅผ ์ค๋ฆ์ฐจ์์ผ๋ก ๋ด์ ๋ฐฐ์ด์ returnํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์.
***

### [19. 120896](120896.js)
- ๋ฌธ์์ด s๊ฐ ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง๋๋ค.
- s์์ ํ ๋ฒ๋ง ๋ฑ์ฅํ๋ ๋ฌธ์๋ฅผ ์ฌ์  ์์ผ๋ก ์ ๋ ฌํ ๋ฌธ์์ด์ return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด๋ณด์ธ์.
- ํ ๋ฒ๋ง ๋ฑ์ฅํ๋ ๋ฌธ์๊ฐ ์์ ๊ฒฝ์ฐ ๋น ๋ฌธ์์ด์ return ํฉ๋๋ค.
</br>

<details>
  <summary><strong>์ฌ์ฉ๋ ๋ฉ์๋</strong></summary>
  <div markdown="1">
    <h4>1. filter()</h4>
      โ๏ธ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">filter() ์ ์๋ณด๊ธฐ</a>
    <h4>2. indexOf()</h4>
      โ๏ธ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf() ์ ์๋ณด๊ธฐ</a>
    <h4>3. lastIndexOf()</h4>
      โ๏ธ array.lastIndexOf(์ธ์)๋ฅผ ํ๋ฉด array ๋ค์ชฝ์์ ๋ถํฐ ์ธ์๊ฐ ์๋ ๊ฐ์ฅ ์ฒซ ๋ฒ์งธ ์ธ๋ฑ์ค๋ฅผ ๋ฐํํฉ๋๋ค.
    <h4>4. sort()</h4>
      โ๏ธ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">sort() ์ ์๋ณด๊ธฐ</a>
    <h4>5. join()</h4>
      โ๏ธ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join">join() ์ ์๋ณด๊ธฐ</a>
  </div>
</details>

***

### [20. 120895](120895.js)
- ๋ฌธ์์ด my_string๊ณผ ์ ์ num1, num2๊ฐ ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋,
- my_string์์ ์ธ๋ฑ์ค num1๊ณผ ์ธ๋ฑ์ค num2์ ํด๋นํ๋ ๋ฌธ์๋ฅผ ๋ฐ๊พผ ๋ฌธ์์ด์ return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด๋ณด์ธ์.
</br>

<details>
  <summary><strong>์ฌ์ฉ๋ ๋ฉ์๋</strong></summary>
  <div markdown="1">
    <h4>1. split()</h4>
      โ๏ธ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split">split() ์ ์๋ณด๊ธฐ</a>
    <h4>2. join()</h4>
      โ๏ธ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join">join() ์ ์๋ณด๊ธฐ</a>
  </div>
</details>

***

### [21. 120895](120895.js)
- ์์ด๊ฐ ์ซ์ ๋จธ์ฑ์ด๋ ์์ด๋ก ํ๊ธฐ๋์ด์๋ ์ซ์๋ฅผ ์๋ก ๋ฐ๊พธ๋ ค๊ณ  ํฉ๋๋ค.
- ๋ฌธ์์ด numbers๊ฐ ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋, numbers๋ฅผ ์ ์๋ก ๋ฐ๊ฟ return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด ์ฃผ์ธ์.
</br>

<details>
  <summary><strong>์ฌ์ฉ๋ ๋ฉ์๋</strong></summary>
  <div markdown="1">
    <h4>1. forEach()</h4>
      โ๏ธ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach() ์ ์๋ณด๊ธฐ</a>
    <h4>2. split()</h4>
      โ๏ธ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split">split() ์ ์๋ณด๊ธฐ</a>
    <h4>3. join()</h4>
      โ๏ธ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join">join() ์ ์๋ณด๊ธฐ</a>
    <h4>4. replaceAll()</h4>
      โ๏ธ str.replaceAll('dog', 'cat')ํ์ ๋ str ์์ ์๋ ๋ชจ๋  dog๋ฅผ cat์ผ๋ก ๋ณํํด์ค๋๋ค.
    <h4>5. Number()</h4>
      โ๏ธ Number('123')๋ฅผ ํ๋ฉด ์ซ์ 123์ด ๋ฐํ๋ฉ๋๋ค.
  </div>
</details>

***

### [22. 120893](120893.js)
- ๋ฌธ์์ด my_string์ด ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋,
- ๋๋ฌธ์๋ ์๋ฌธ์๋ก ์๋ฌธ์๋ ๋๋ฌธ์๋ก ๋ณํํ ๋ฌธ์์ด์ returnํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์.
</br>

<details>
  <summary><strong>์ฌ์ฉ๋ ๋ฉ์๋</strong></summary>
  <div markdown="1">
    <h4>1. Array.from()</h4>
      โ๏ธ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from">Array.from() ์ ์๋ณด๊ธฐ</a>
    <h4>2. forEach()</h4>
      โ๏ธ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach() ์ ์๋ณด๊ธฐ</a>
    <h4>3. toUpperCase()</h4>
      โ๏ธ string.toUpperCase()๋ฅผ ํ๋ฉด ๋ฌธ์ ๋๋ ๋ฌธ์์ด ์ ์ฒด๋ฅผ <strong>๋๋ฌธ์๋ก ๋ณํํด ๋ฐํํฉ๋๋ค.</strong>
    <h4>4. toLowerCase()</h4>
      โ๏ธ string.toLowerCase()๋ฅผ ํ๋ฉด ๋ฌธ์ ๋๋ ๋ฌธ์์ด ์ ์ฒด๋ฅผ <strong>์๋ฌธ์๋ก ๋ณํํด ๋ฐํํฉ๋๋ค.</strong>
    <h4>5. join()</h4>
      โ๏ธ <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join">join() ์ ์๋ณด๊ธฐ</a>
  </div>
</details>

***

### [23. 120892](120892.js)
- ๊ตฐ ์ ๋ต๊ฐ ๋จธ์ฑ์ด๋ ์ ์ ์ค ์ ๊ตฐ์ด ๋ค์๊ณผ ๊ฐ์ ์ํธ ์ฒด๊ณ๋ฅผ ์ฌ์ฉํ๋ค๋ ๊ฒ์ ์์๋์ต๋๋ค.
- ์ํธํ๋ ๋ฌธ์์ด cipher๋ฅผ ์ฃผ๊ณ ๋ฐ์ต๋๋ค.
- ๊ทธ ๋ฌธ์์ด์์ code์ ๋ฐฐ์ ๋ฒ์งธ ๊ธ์๋ง ์ง์ง ์ํธ์๋๋ค.
- ๋ฌธ์์ด cipher์ ์ ์ code๊ฐ ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋ ํด๋๋ ์ํธ ๋ฌธ์์ด์ returnํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์.
</br>

<details>
  <summary><strong>์ฌ์ฉ๋ ๋ฉ์๋</strong></summary>
  <div markdown="1">
    <h4>1. for...in</h4>
      โ๏ธ for(let i in array){}๋ฅผ ํ๋ฉด array์ ์ธ๋ฑ์ค๋ฅผ i์ ๋ฐ๋ณต์ ์ผ๋ก ๋๊ธฐ๋ for๋ฌธ์๋๋ค.
  </div>
</details>
