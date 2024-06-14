// Select the elements
const exampleDiv = document.getElementById('example');
const updateButton = document.getElementById('updateButton');
const showDataButton = document.getElementById('showDataButton');


// Step 1: Access custom data attributes
console.log('Initial data-info:', exampleDiv.dataset.info);
console.log('Initial data-count:', exampleDiv.dataset.count);

// Step 2: Update custom data attributes
updateButton.addEventListener('click', () => {
  exampleDiv.dataset.info = 'Updated info text';
  exampleDiv.dataset.count = parseInt(exampleDiv.dataset.count) + 1;
  console.log('Data attributes updated.');
});

// / Step 3: Display updated data attributes
showDataButton.addEventListener('click', () => {
  alert(`Data Info: ${exampleDiv.dataset.info}\nData Count: ${exampleDiv.dataset.count}`);
});
