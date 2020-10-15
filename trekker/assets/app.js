const fp= flatpickr("#date-picker", {
  dateFormat: "Y-m-d",
  minDate: "2012-08-06",
  maxDate: "today"
});

const app = {};
// apiKey = 'afrud3GRuDZkeJflvjMdez2cmcd4gBD9cXQWakst'
app.key = 'DEMO_KEY';
roverName = "Curiosity";
dateCode = "2015-10-1";
// example: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY

$(() => {
  $('#search-form').on('submit', function(e) {
    e.preventDefault();
    const dateCode = $('#date-picker').val();
    const roverName = $('#rover-name').val();
    if (dateCode !== '') {
      $('#date-picker').val('');
      }
    console.log(`What did I get ${dateCode} and ${roverName}`)
    app.getImages(dateCode);
  });
});



app.showImages = images => {
  images.forEach(image => {
    const imgCard = `
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img src="${image.photos.img_src}">
        <div class="card-body">
          <p class="card-text">${image.photos.full_name}</p>
        </div>
      </div>
    </div>
    `;

    $('.gallery').append(imgCard);
  });
}

app.getImages = () => {
  $.ajax({
    url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/photos?',
    method: 'GET',
    dataType: 'json',
    data: {
      api_key: app.key,
      earth_date: dateCode
    }
  }).then(result => {
    app.showImages(result);
  });
};

app.init = () => {
  app.getImages();
};

$(function () {
  app.init();
});
