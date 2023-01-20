try {
  console.log(a);
  let a = 3;
} catch {
  alert(new Error("let must be declared before use"))
}
  
try {
  const b = 1 / 0;
  if (b == infinity) {
    throw Error()
  }
} catch {
  alert(new Error("cannot be divided by zero"))
}