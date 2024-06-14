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

export default data;

function addDate() {

}

export function deleteData(id) {
  data = data.filter(item => item.id != id);
  return data;

}