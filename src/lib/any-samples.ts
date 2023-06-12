export function anySamples(): void {
  console.log("---------- anySamples");

  assign();
  addNumberSample();
  canYouBeliveThis();
}

function assign() {
  console.log("-- assign");

  let a: any = 1;
  console.log(`a : any is a number : ${a}`);
  a = "hello world";
  console.log(`a : any is a string : ${a}`);
  a = (n1: number, n2: number) => n1 * n2;
  console.log(
    `a : any is a multiply function : ${a} , use a to multiply 2,4 :  ${a(
      2,
      4
    )}`
  );
  let num = 5;
  num = a;
  console.log("the following is super crazy but possible with any !!!!!!!!");
  console.log(`num : ${num}`);
}

function addNumberSample() {
  console.log("-- addNumberSample");

  const result = addNumbers(5, 10);
  console.log(`result = addNumbers(5, 10) : ${result}`); // Output: 15

  const invalidResult = addNumbers("5", 10); // Output: "510"
  console.log(`invalidResult = addNumbers("5", 10) : ${invalidResult}`);
}

function canYouBeliveThis(){
  let obj : any = "string";
  // this issue no error or warning on development
  try {
    obj.this.is.stupid.but.ok.with.ts();
  } catch (error) {
    console.log(`catch obj.this.is.stupid.but.ok.with.ts()`);
        
  }
}

function addNumbers(a: any, b: any): any {
  return a + b;
}
