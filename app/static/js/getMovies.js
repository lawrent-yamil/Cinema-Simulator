export class GetMovies {
  constructor() {
    this.apiKey = 'cf4c380b756d8276ed0231c545ee4cba';
    this.url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=es-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    this.div = document.querySelector('.movies');
  }

  async getMovies() {
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      this.renderMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  renderMovies(movies) {
    movies.forEach(movie => {
      const div = document.createElement('div');
      const fragment = document.createDocumentFragment();
      div.classList.add('col');
      div.innerHTML = `
      <div class="card h-100">
        <img src="https://image.tmdb.org/t/p/w500/${movie.backdrop_path}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">${movie.overview}</p>
        </div>
      </div>
      `;
      fragment.appendChild(div);
      this.div.appendChild(fragment);
    });
  }
}

const getMovies = new GetMovies();
getMovies.getMovies();