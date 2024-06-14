function getCount(str) {
  //   let count =0;

  return (str.split('').map(item => {
    if (item === 'a' || item === 'd' || item === 'i' || item === 'o' || item === 'u')
      return item;
  })).length
  //   expect ['a,'b,'c','d','e']

  //   return 0;
}