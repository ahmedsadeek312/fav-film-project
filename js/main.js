document.title = "film & series list";

// view a screen that want information about your project
let img_input = document.querySelector(".input_img");
let film_name = document.querySelector(".head_input");
let film_disc = document.querySelector(".disc_input");
let submit_but = document.querySelector(".submit_film");
let add_film = document.querySelector(".film_form");
let film_but = document.querySelector(".add_film_but");
film_but.addEventListener("click", function () {
  add_film.style.visibility = "visible";
  
});
submit_but.addEventListener("click", function (e) {
  e.preventDefault();
  add_film.style.visibility = "hidden";
  document.querySelector('.add_films').innerHTML = `
  <div class="card bg-success col col-sm-3">
    <img
    class="main_photo card-img-top"
    src="${img_input.value}"
    alt="card_img"
    width="200rem"
    height="400rem"/>
    <div class="card-body">
            <h3 class="head text-uppercase">${film_name.value}</h3>
            <p class="info">${film_disc.value}</p>
          </div>
  </div>
  `

});

// series

let series_img = document.querySelector('.input_img_series');
let series_title = document.querySelector('.head_input_series');
let series_disc = document.querySelector('.disc_input_series');
let episodes = document.querySelector('.episodes_number');
let add_series_section = document.querySelector('.add_series');

let add_series = document.querySelector('.series_form');
let series_but = document.querySelector('.add_series_but');
series_but.addEventListener('click',function(){
  add_series.style.visibility = 'visible';
})
submit_series = document.querySelector('.submit_series');
submit_series.addEventListener('click',function(e){
  e.preventDefault();
  add_series.style.visibility = 'hidden';
  document.querySelector('.add_series').innerHTML = `
        <div class="card bg-info col col-sm-3">
          <img
            class="main_photo card-img-top"
            src="${series_img.value}"
            alt="series_img"
            width="200rem"
            height="400rem"
          />
          <div class="card-body">
            <h3 class="head text-uppercase">${series_title.value}</h3>
            <p class="info">${series_disc.value}</p>
            <p class="text-warning text-uppercase">number of episodes is ${episodes.value} </p>
          </div>
        </div>
        `;
        
});
