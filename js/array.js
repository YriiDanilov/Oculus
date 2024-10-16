'use strict'

/* 1) Реализуйте функцию getWeekends(), которая возвращает массив из двух элементов – названий выходных дней на английском. Функция принимает на вход параметр – формат возврата. Всего есть два возможных значения:

'long' (по умолчанию) – вернётся массив, содержащий значения saturday и sunday
'short' – вернётся массив со значениями sat и sun */

// Возвращаемое значение не демонстрируем, так как это равносильно ответу
// getWeekends();
// getWeekends('long'); // Аналог вызова без аргументов (long — формат по умолчанию)
// getWeekends('short'); // Вызов вернёт массив с короткими значениями

const getWeekend = (option) => {
  return option === 'long' ? ['saturday', 'monday'] : ['sat', 'sun'];
};

// console.log(getWeekend('short'))

//2) Реализуйте функцию swap(), которая меняет местами первый и последний элемент массива. Если массив содержит меньше двух элементов, то он возвращается как есть:

const swap = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  // Решение через третью переменную
  /* const first = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = first; */

  [arr[0],arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr
}

// console.log(swap([])); // []
// console.log(swap([1])); // [1]
// console.log(swap([1, 2])); // [2, 1]
// console.log(swap(['one', 'two', 'three'])); // ['three', 'two', 'one']
// console.log(swap(['one', 'two', 'three', 'four']));


//3) Реализуйте функцию, которая извлекает из массива элемент по указанному индексу, если индекс существует, либо возвращает значение по умолчанию. Функция принимает на вход три аргумента:

// Массив
// Индекс
// Значение по умолчанию (равно null)

const get = (cities, i, paramDefault = null) => {
  if (i >= cities.length || i < 0) {
    return paramDefault;
  };

  return cities[i];
}

// const cities = ['moscow', 'london', 'berlin', 'porto'];

// console.log(get(cities, 1)); // 'london'
// console.log(get(cities, 4)); // null
// console.log(get(cities, 10, 'paris')); // 'paris'
// console.log(get(cities, -1, 'oops')); // 'oops'

//4) Реализуйте функцию, которая принимает на вход массив и строковой префикс. Эта функция должна возвращать новый массив, в котором к каждому элементу исходного массива добавляется переданный префикc и фамилия начинется в большой буквы. Функция предназначена для работы со строковыми элементами. После префикса должен добавляться пробел.

const addPrefix = (arrNames) => {
  const newArrNames = new Array;
  for (let i = 0; i < arrNames.length; ++i) {
    const prefix = `Mr`;
    newArrNames[i] = `${prefix} ${arrNames[i].slice(0, 1).toUpperCase()}${arrNames[i].slice(1)}`
  }
  return newArrNames;
}



// const names = ['john', 'smith', 'karl'];

// const newNames = addPrefix(names, 'Mr');
// console.log(newNames);
// // => ['Mr john', 'Mr smith', 'Mr karl'];

// console.log(names); // Старый массив не меняется!
// // => ['john', 'smith', 'karl'];

// Реализуйте и экспортируйте функцию reverse(), которая принимает на вход массив и располагает элементы исходного массива в обратном порядке. Функция должна мутировать переданный в нее массив. Новый массив из нее возвращать не надо.
// Решение этой задачи подразумевает самостоятельную реализацию функции без использования встроенного метода reverse().

const reverse = (arr) => {
  for (let i = 0; i < arr.length / 2; i += 1) {
    // Решение через 3ю переменную:
    /* let first = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = first; */

    // Деструктуризация:
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
}

/* const names = ['john', 'smith', 'karl'];

reverse(names);
console.log(names); // => ['karl', 'smith', 'john']

reverse(names);
console.log(names); // => ['john', 'smith', 'karl']  */


// Найдите Max число в массиве

const arrNum = [1,9,2,3,4,5,6,7,8];

const maxNum = (arr) => {
  if (arr.lemgth === 0) {
    return null;
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }

  return max;
}

// Реализуйте функцию. Она должна высчитывать сумму всех элементов массива, которые делятся без остатка на три:

const calculateSum = (arr) => {
  if (arr.length < 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] % 3 === 0) {
      sum += arr[i];
    }
    
  }
  return sum;
}

/* const coll1 = [8, 9, 21, 19, 18, 22, 7];
console.log(calculateSum(coll1)); // 48 */

// Оператор нулевого слияния/присваивания ?? / ??=

//перепешите код используя 

let num1 = 10,
    num2 = 20,
    result;

if (result === null || result === undefined) {
  if (num1 !== null && num1 !== undefined) {
    result = num1;
  } else {
    result = num2;
  }
}

result ??= num1 ?? num2


