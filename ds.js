function hello(x) {
    x.h = 3;
    console.log(x);
}
// hello();
var y = { h: 5 };
hello(y);

console.log('y :>> ', y);
