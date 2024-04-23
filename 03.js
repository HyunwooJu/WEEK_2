// 단축 속성명 : property shorthand
const name = "asdc";
const age = "30";


// key - value // 배열같아 보이지만 객체이다. // key와 value가 동일한 스펠링이라면 생략할 수 있다.
const obj = { name, age };
const obj1 = { name: name, age: age };

// 전개 구문 = spread operator
// destructuring과 함께 가장 많이 사용되는 es6 문법 중 하나!
// let arr = [1, 2, 3];
// console.log(arr);
// console.log(...arr);

// let newArr = [...arr, 4]; // 이렇게 할 경우엔 일자로 쭉 스프레드 된다.
// console.log(arr);
// console.log(newArr);

// // 객체
// let user = {
//     name: "nsdw",
//     age: 30,
// };

// let user2 = {...user}; // 이렇게 할 경우에는 다시 괄호를 채워준다.

// console.log(user);
// console.log(user2);

// 나머지 매개변수(rest parameter)
function exampleFunc(a, b, c, ...args) {
    console.log(a, b, c);
    console.log(args);
}

exampleFunc(1, 2, 3, 4, 5, 6, 7);

// 템플릿 리터럴(Template Literal)
const testValue = "안녕하세요!"
console.log(`Hello World! ${testValue}`);

// 템플릿 리터럴은 멀티라인을 지원한다. 무슨말이냐 기본적으로 따옴표 기반의 문자열 표현은 멀티라인을 지원하지 않는다. 이 백틱으로 아래와 같이 표현이 가능하다.
console.log(`
    Hello
        My name is Javascript!!

        Nice to meet you!!!
`)