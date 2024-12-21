const student = {
  name: 'José',
  age: 27,
  cpf: '12345678912',
  position: 'developer',
  telephone: ['5511999999999', '5511888888888'],
  address: [ {
    street: 'R. Joseph Climper',
    number: '45',
    complement: 'apt. 43'
  }]
}

//Adding a new address to the student
student.address.push({street: 'Av. Paulista', number: '1230'});
console.log(student.address);

const addressWithComplement = student.address.filter((address) => {
  return address.complement;
});
