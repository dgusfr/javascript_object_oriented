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
  },
  {
    street: 'R. Cecilia Pipper',
    number: '525',
    complement: null
  },
  ]
}

for (let key in student) {
  const text = `The Key is: ${key} and the value is: ${student[key]}`;
  console.log(text);
}