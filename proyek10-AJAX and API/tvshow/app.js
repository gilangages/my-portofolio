const form = document.querySelector('#search-form');
const div = document.querySelector('div');


form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  document.querySelectorAll('img').forEach((img) => img.remove());

  const keyword = form.elements.query.value;
  const config = {
    params: { q: keyword },
  };
  const res = await axios.get("https://api.tvmaze.com/search/shows", config);
  getImages(res.data);
  form.elements.query.value = '';
});

const getImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement('img');
      img.src = result.show.image.medium;
      div.append(img);
    }
  }
};