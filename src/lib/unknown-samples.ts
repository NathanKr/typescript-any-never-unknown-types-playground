export function unknownSamples(): void {
  console.log("---------- unknownSamples");

  youCanAssignAnythingToUnknown();
  youCanAssignUnknownOnlyTo_any();

  canYouBeliveThisItsOk();
  logWithProblemFix([1,2,3]);
  try {
    logWithProblemFix("hello");  // throw
  } catch (err) {
    console.log(err);
    
  }
  
}

function logWithProblemFix(array: unknown) {
  if (Array.isArray(array)) {
    console.log(`array.length : ${array.length}`);
  }
  else{
    throw Error('no array')
  }
}

function youCanAssignUnknownOnlyTo_any() {
  const val: unknown = 11;
  // const num : number = val; ---> error you can assign unknown to nothing beside any
  // console.log(num);
  const a: any = val; // --- pnly any can be assign to unknown
  console.log(a);
}

function youCanAssignAnythingToUnknown() {
  let a: unknown = 1; // -- ok
  console.log(`a : any is a number : ${a}`);
  a = "hello world"; // -- ok
  a = 4;
}

function canYouBeliveThisItsOk() {
  let obj: unknown = "string";
  // this issue no error or warning on development

  // --> this give error because no this property in unknown
  // obj.this.is.stupid.but.ok.with.ts();
}
