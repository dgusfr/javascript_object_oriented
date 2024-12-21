const student = {
  name: 'José',
  age: 27,
  cpf: '12345678912',
  position: 'developer'
}

function infoStudent(objstudent, infoStudent){
  return objstudent[infoStudent]
}

console.log(infoStudent(student, 'name'))
console.log(student['position'])
console.log(student.cpf)