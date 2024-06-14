function findNeedle(haystack) {
  // your code here

  return `found the needle at position ${haystack.findIndex(x => x === 'needle') + 1}`;



}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));;

