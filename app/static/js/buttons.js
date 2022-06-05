import { GetMovies } from './getMovies.js';

class GetMoviesToButtons extends GetMovies {
  constructor() {
    super();
    this.terror = document.querySelector('#terror').addEventListener('click', this.renderMoviesToTerror.bind(this));
    this.comedia = document.querySelector('#comedia').addEventListener('click', this.renderMoviesToComedia.bind(this));
    this.drama = document.querySelector('#drama').addEventListener('click', this.renderMoviesToDrama.bind(this));
    this.accion = document.querySelector('#accion').addEventListener('click', this.renderMoviesToAccion.bind(this));
    this.documental = document.querySelector('#documental').addEventListener('click', this.renderMoviesToDocumental.bind(this));
  }

  async getMoviesToButtons() {|
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.log(error);
    }
  }

  async renderMoviesToTerror(e) {
    e.preventDefault();
    const movies = await this.getMoviesToButtons();
    this.div.innerHTML = '';
    movies.forEach(movie => {
      if (movie.genre_ids.includes(27)) {
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
      }
    });

    if (this.div.innerHTML === '') {
      const div = document.createElement('div');
      const fragment = document.createDocumentFragment();
      div.classList.add('col');
      div.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">No hay peliculas de Terror</h5>
        </div>
      </div>
      `;
      fragment.appendChild(div);
      this.div.appendChild(fragment);
    }
  }

  async renderMoviesToComedia(e) {
    e.preventDefault();
    const movies = await this.getMoviesToButtons();
    this.div.innerHTML = '';
    movies.forEach(movie => {
      if (movie.genre_ids.includes(35)) {
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
      }
    });

    if (this.div.innerHTML === '') {
      const div = document.createElement('div');
      const fragment = document.createDocumentFragment();
      div.classList.add('col');
      div.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">No hay peliculas de Comedia</h5>
        </div>
      </div>
      `;
      fragment.appendChild(div);
      this.div.appendChild(fragment);
    }
  }

  async renderMoviesToDrama(e) {
    e.preventDefault();
    const movies = await this.getMoviesToButtons();
    this.div.innerHTML = '';
    movies.forEach(movie => {
      if (movie.genre_ids.includes(18)) {
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
      }
    });

    if (this.div.innerHTML === '') {
      const div = document.createElement('div');
      const fragment = document.createDocumentFragment();
      div.classList.add('col');
      div.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">No hay peliculas de Drama</h5>
        </div>
      </div>
      `;
      fragment.appendChild(div);
      this.div.appendChild(fragment);
    }
  }

  async renderMoviesToAccion(e) {
    e.preventDefault();
    const movies = await this.getMoviesToButtons();
    this.div.innerHTML = '';
    movies.forEach(movie => {
      if (movie.genre_ids.includes(28)) {
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
      }
    });
    if (this.div.innerHTML === '') {
      const div = document.createElement('div');
      const fragment = document.createDocumentFragment();
      div.classList.add('col');
      div.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">No hay peliculas de Acción</h5>
        </div>
      </div>
      `;
      fragment.appendChild(div);
      this.div.appendChild(fragment);
    }
  }

  async renderMoviesToDocumental(e) {
    e.preventDefault();
    const movies = await this.getMoviesToButtons();
    this.div.innerHTML = '';
    movies.forEach(movie => {
      if (movie.genre_ids.includes(99)) {
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
      }
    });

    if (this.div.innerHTML === '') {
      const div = document.createElement('div');
      const fragment = document.createDocumentFragment();
      div.classList.add('col');
      div.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">No hay peliculas de Documental</h5>
        </div>
      </div>
      `;
      fragment.appendChild(div);
      this.div.appendChild(fragment);
    }
  }

}


const getMoviesToButtons = new GetMoviesToButtons();