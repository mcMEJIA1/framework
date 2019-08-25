export var addUserInstruments = (newI) => {
  instruments.push(newI)
  console.log(newI)
  console.log(instruments)
  return true
}

let instruments = []
