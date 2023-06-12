export function unknownSamples(): void {
  console.log("---------- unknownSamples");

  let a: unknown = 1; // -- ok
  console.log(`a : any is a number : ${a}`);
  a = "hello world"; // -- ok
  a = 4; // -- ok
  //let num : number = a; --->  error !!!!!! you can not assign

  canYouBeliveThisItsOk();
}

function canYouBeliveThisItsOk() {
  let obj: unknown = "string";
  // this issue no error or warning on development

  // --> this give error because no this property in unknown
  // obj.this.is.stupid.but.ok.with.ts(); 
}
