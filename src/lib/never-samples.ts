export function neverSamples(): void {
  console.log("---------- neverSamples");

  try {
    throwError("sample of never return type");
  } catch (error) {
    console.log("exception is caught");
  }
}

function throwError(message: string): never {
  throw new Error(message);
}
