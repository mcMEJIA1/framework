export const functions = (petitionType, newI) => {
  if (petitionType === 'get') {
    return returnList()
  } else if (petitionType === 'post') {
    return addUserInstruments(newI)
  }
}
const addUserInstruments = (newI) => {
  instruments1.push(newI)
  console.log(newI)
  console.log(instruments1)
  return true
}

const returnList = () => {
  return instruments1
}

let instruments1 = [{
  'id': 1,
  'name': 'primer instrumento',
  'rules': ['regla', 'regla', 'regla'],
  'objectives': ['obj1', 'obj2', 'obj3', 'obj4'],
  'rols': ['rol1', 'rol2', 'rol3', 'rol4', 'rol5'],
  'goals': ['goal1', 'goal2']
}, {
  'id': 2,
  'name': 'segundo instrumento',
  'rules': ['regla1', 'regla2', 'regla3'],
  'objectives': ['obj1', 'obj2', 'obj3', 'obj4'],
  'rols': ['rol1', 'rol2', 'rol3', 'rol4', 'rol5'],
  'goals': ['goal1', 'goal2']
}
]
