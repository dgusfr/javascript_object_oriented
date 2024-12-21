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

const keysOfObject = Object.keys(student);
console.log(keysOfObject);