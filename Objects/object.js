const student = {
  name: 'José',
  age: 27,
  cpf: '12345678912',
  position: 'developer'
}

console.log(student.name)

function infoStudent(objstudent, infoStudent){
  return objstudent[infoStudent]
}