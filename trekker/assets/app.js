const fp= flatpickr("#date-picker", {
  dateFormat: "Y-m-d",
  minDate: "2012-08-06",
  maxDate: "today"
});

const app = {};
dateCode = "2015-10-1";
app.key = 'afrud3GRuDZkeJflvjMdez2cmcd4gBD9cXQWakst';
// roverName = "Curiosity";

// example: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY

app.init = () => {
  app.getImages();
};

$(function () {
  app.init();
});

$(() => {
  $('#search-form').on('submit', function(e) {
    e.preventDefault();
    const dateCode = $('#date-picker').val();
    const roverName = $('#rover-name').val();
    if (dateCode !== '') {
      $('#date-picker').val('');
      }
    console.log(`What did I get ${dateCode} and ${roverName}`)
    app.getImages(roverName);
  });
});

app.getImages = roverName => {
  $.ajax({
    url: `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?`,
    method: 'GET',
    dataType: 'json',
    data: {
      earth_date: dateCode,
      api_key: app.key,
    }
  }).then(gallery => {
    app.showImages(gallery.data);
  });
};

app.showImages = gallery => {
  gallery.forEach(image => {
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
