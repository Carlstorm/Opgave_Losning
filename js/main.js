$(document).ready(function () {
  getUsers();
});


function InitSlick() {
  $('.reviewSection__reviewWrap').slick({
    centerMode: true,
    infinite: true,
    variableWidth: true,
    appendArrows: $('.reviewSection__directions'),
    prevArrow: `<img src="./icons/arrow.svg" class="slickbutt slick-newprev">`,
    nextArrow: `<img src="./icons/arrow.svg" class="slickbutt slick-newnext">`
  });
}

let Reviews = "";
async function getUsers() {
  data2 = await fetch("https://randomuser.me/api/?results=20")
    .then((response) => response.json())
    .then(function (data) {
      for (let i = 0; i < data.results.length; i++) {
        Reviews += `
              <div>
              <div class="reviewSection__profileImageBg"></div>
              <div class="reviewSection__profileImageImg" style="background: url(${data.results[i].picture.thumbnail})"></div>
              <div class="reviewSection__reviewContent">
                <div class="reviewSection__reviewContent-headerWrap">
                  <div>
                    <p class="reviewSection__headerText reviewSection__headerText--Orange">${data.results[i].name.first} ${data.results[i].name.last}</p>
                    <p class="reviewSection__headerText reviewSection__headerText--small">profession</p>
                  </div>
                  <div class="reviewSection__rating">
                    <img src="./icons/stars.svg" alt="rating" style="clip-path: inset(0px ${randomIntFromInterval(7, 10)}% 0px 0%)">
                    <img class="bgrating" src="./icons/stars.svg" alt="rating">
                  </div>
                </div>
                <div class="reviewSection__reviewContent-tekst"><p>An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable</p></div>
              </div>
          </div>
              `
      }
      $('.reviewSection__reviewWrap').html(Reviews)
      $('.reviewSection__reviewWrap').css("opacity", "1")
      InitSlick();
    })
}


async function getUsersTESTING() {
      for (let i = 0; i < 20; i++) {
        Reviews += `
              <div>
              <div class="reviewSection__profileImageBg"></div>
              <div class="reviewSection__profileImageImg"></div>
              <div class="reviewSection__reviewContent">
                <div class="reviewSection__reviewContent-headerWrap">
                  <div>
                    <p class="reviewSection__headerText reviewSection__headerText--Orange">navn navnsen</p>
                    <p class="reviewSection__headerText reviewSection__headerText--small">profession</p>
                  </div>
                  <div class="reviewSection__rating">
                    <img src="./icons/stars.svg" alt="rating" style="clip-path: inset(0px 10% 0px 0%)">
                    <img class="bgrating" src="./icons/stars.svg" alt="rating">
                  </div>
                </div>
                <div class="reviewSection__reviewContent-tekst"><p>An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable</p></div>
              </div>
          </div>
              `
      }
      $('.reviewSection__reviewWrap').html(Reviews)
      $('.reviewSection__reviewWrap').css("opacity", "1")
      InitSlick();
}




function randomIntFromInterval(min, max) {
  let randomrating = Math.random() * (max - min + 1) + min;
  if (randomrating > 10) {
    randomrating = 10;
  }
  convertedrating = 100 - (randomrating * 10)
  return convertedrating;
}
