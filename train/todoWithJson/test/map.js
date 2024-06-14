let data = [
  {
    "id": '1718149937834',
    "value": "second issue"
  },
  {
    "id": '1718149941332',
    "value": "first issue"
  },
  {
    "id": '1718149941333',
    "value": "third issue"
  }
];

const b = data.filter(item => item.id != '1718149941333');
// console.log(b);
// console.log(data);