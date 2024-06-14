function persistence(num) {

  function gets(num) {
    let count = 0;

    gete2(num);

    function gete2(num) {
      num.toString().split("").reduce((acc, value) => {
        if (acc * value.toString().split("").length === 1) {
          count++;
          return count;
        } else {
          count++;
          gets(acc * value);

        }
      })

    }


    return count;

  }
  //code me
  return gets(num);
}

console.log(persistence(39));