export function unknownSamples(): void {
  console.log("---------- unknownSamples");

  let a : unknown = 1; // -- ok 
  console.log(`a : any is a number : ${a}`);
  a = "hello world"; // -- ok 
  a = 4; // -- ok 
  //let num : number = a; --->  error !!!!!! you can not assign 
}


