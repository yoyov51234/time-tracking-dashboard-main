let loadData = [];
let selectionCurrent = 'Daily';
const selection = document.getElementById('selection');
selection.addEventListener('click', (e) => {

  selectionCurrent = e.target.dataset.title;
  render();

})

render();

function render() {

  fetch("./data.json")
    .then(response => response.json())
    .then(data => {
      loadData = data;


      const wrapper = document.getElementById('wrapper');
      wrapper.innerHTML = '';

      loadData.forEach(e => {
        if (selectionCurrent.toLowerCase() === 'weekly') {
          wrapper.innerHTML += `
    <div class="card"  >
      <div class="card__details">
        <div class="card__details-top">
          <p class="title">${e.title}</p>
          <p>...</p>
        </div>
        <div class="card__details-bottom">
          <div class="current">${e.timeframes.weekly.current}hrs</div>
          <div class="previous">Last Week - ${e.timeframes.weekly.previous}hrs</div >
        </div >
      </div >


    </div >
  `
        } else if (selectionCurrent.toLowerCase() === 'monthly') {
          wrapper.innerHTML += `
    <div class="card" >
      <div class="card__details">
        <div class="card__details-top">
          <p class="title">${e.title}</p>
          <p>...</p>
        </div>
        <div class="card__details-bottom">
          <div class="current">${e.timeframes.monthly.current}hrs</div>
          <div class="previous">Last Month - ${e.timeframes.monthly.previous}hrs</div >
        </div >
      </div >


    </div >
  `

        } else if (selectionCurrent.toLowerCase() === 'daily') {
          wrapper.innerHTML += `
    <div class="card" >
      <div class="card__details">
        <div class="card__details-top">
          <p class="title">${e.title}</p>
          <p>...</p>
        </div>
        <div class="card__details-bottom">
          <div class="current">${e.timeframes.daily.current}hrs</div>
          <div class="previous">Yesterday - ${e.timeframes.daily.previous}hrs</div >
        </div >
      </div >
    </div>
  `
        }
        // wrapper.innerHTML += a;
        // console.log(wrapper.innerHTML);

      })
    })
    .catch(error => {
      console.log(error);
      console.log(loadData);
    }
    )
}
