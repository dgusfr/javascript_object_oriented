const student = {
  name: 'José',
  age: 27,
  cpf: '12345678912',
  position: 'developer'
}

// Accessing Properties
function infoStudent(objstudent, infoStudent){
  return objstudent[infoStudent]
}

console.log(infoStudent(student, 'name'))
console.log(student['position'])
console.log(student.cpf)

// Changing Properties
student.telephone = '5511999999999'
console.log(student.telephone)