// function bind(fn, context) {
//   return () => {
//     fn.call(context);
//   };
// }

const obj = {
  title: 'this is bound title'
}

function logTitle() {
  console.log(this.title)
}

const fn = bind(logTitle, obj);

fn(); // this is bound title

////////////////////////////////////////

function bind(fn, context, ...args) {
  return (...item) => {
    return fn.apply(context, [...args, ...item]);
  };
}

function add (a, b, c) {
  return a + b + c + this.age;
}

const obj2 = {
  age: 5
}

const fn2 = bind(add, obj2, 1, 2, 1);

const result = fn2(4, 5);

console.log(result) // 9
