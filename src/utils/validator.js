export function validatePhoneNumber(number) {
  const reg = /^(\+?\(61\)|\(\+?61\)|\+?61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){7,9}$/
  
  return reg.test(number)
}

 