import data from '../data.json' with { type: 'json' };

const option_daily = document.querySelector('.option--daily');
const option_weekly = document.querySelector('.option--weekly');
const option_monthly = document.querySelector('.option--monthly');

// get the option to render the corresponding page
const options = document.querySelectorAll('.nav_option');
options.forEach(item => item.addEventListener('click', () => {
  const currentOption = item.textContent;
  render(currentOption);

}))

// option_daily.addEventListener('click',()=>{
//   option_daily
// })




const wrapper = document.getElementById('wrapper');

// render page from the json file
function render(option = 'weekly') {
  const cards = document.getElementById('cards');
  cards.innerHTML = '';
  if (option.trim().toLowerCase() == 'daily') {

    data.forEach((item, index) => {
      let title = item.title.toLowerCase();
      if (title === 'self care') {
        title = 'self-care'
      }

      cards.innerHTML += `
   <div class="card card-item-${index}"  style="background-image: url(../images/icon-${title}.svg)">
        <div class="card__details">
          <div class="card__details-top">
            <p class="title">${item.title}</p>
            <p>...</p>
          </div>
          <div class="card__details-bottom">
            <div class="current">${item.timeframes.weekly.current}hrs</div>
            <div class="previous">Last Day - ${item.timeframes.weekly.previous}hrs</div>
          </div>
        </div>
      </div>
  
  `



    })
    const inactive = '#7078C9';
    option_weekly.setAttribute('style', inactive);
    option_daily.setAttribute('style', 'color:white');
    option_monthly.setAttribute('style', inactive);



  }
  else if (option.trim().toLowerCase() == 'monthly') {
    data.forEach((item, index) => {
      let title = item.title.toLowerCase();
      if (title === 'self care') {
        title = 'self-care'
      }
      cards.innerHTML += `
   <div class="card card-item-${index}" style="background-image: url(../images/icon-${title}.svg)">
        <div class="card__details">
          <div class="card__details-top">
            <p class="title">${item.title}</p>
            <p>...</p>
          </div>
          <div class="card__details-bottom">
            <div class="current">${item.timeframes.monthly.current}hrs</div>
            <div class="previous">Last Month - ${item.timeframes.monthly.previous}hrs</div>
          </div>
        </div>
      </div>
  
  `

    })
    const inactive = '#7078C9';
    option_weekly.setAttribute('style', inactive);
    option_daily.setAttribute('style', inactive);
    option_monthly.setAttribute('style', 'color:white');
  }
  else {
    {
      data.forEach((item, index) => {
        let title = item.title.toLowerCase();
        console.log(title);
        if (title === 'self care') {
          title = 'self-care'
        }
        cards.innerHTML += `
   <div class="card card-item-${index}" style="background-image: url(../images/icon-${title}.svg)">
        <div class="card__details">
          <div class="card__details-top">
            <p class="title">${item.title}</p>
            <p>...</p>
          </div>
          <div class="card__details-bottom">
            <div class="current">${item.timeframes.weekly.current}hrs</div>
            <div class="previous">Last Week - ${item.timeframes.weekly.previous}hrs</div>
          </div>
        </div>
      </div>
  
  `

      })
    }
    // option_weekly.setAttribute('style', 'color:white');
    const inactive = '#7078C9';
    option_weekly.setAttribute('style', 'color:white');
    option_daily.setAttribute('style', inactive);
    option_monthly.setAttribute('style', inactive);
  }
}

render();


