class MovieItem extends HTMLElement {
    
    connectedCallback() {
        this.render();
    }
    
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        const imgLink = `https://image.tmdb.org/t/p/w500`;
        const alt = "src/assets/img/no-image.jpg";
        let html = "";
        html += `<div class="row justify-content-center">`;
        this._movie.forEach(mov => {
            let img = "";
            const year = mov.release_date.slice(0,4);
            if (mov.poster_path == undefined) {
                img = alt;
            } else {
                img = `${imgLink}${mov.poster_path}`;
            }

            if (mov.overview.length > 600) {
                mov.overview = mov.overview.slice(0, 600) + " ...";
            }

            if (mov.overview == "") {
                mov.overview = "no overview";
            }

            html += `
                <div class="card movie_card">
                    <img src="${img}" class="card-img-top" alt="...">
                        <div class="movie_overview text">
                            <h5>Overview</h5>
                            <p>${mov.overview}</p>
                        </div>
                    <div class="card-body">
                        <div class="play_button" data-toggle="tooltip" data-placement="bottom" title="Play Movie">
                            <i class="fas fa-play"></i>
                        </div>
                        <h5 class="card-title">${mov.title}</h5>
                        <span class="movie_info">${year}</span>
                        <span class="movie_info float-right"><i class="fas fa-star"></i> ${mov.vote_average}</span>
                    </div>
                </div>
            `;
        });
        html += `</div>`;
        this.innerHTML = html;
    }
}

customElements.define("movie-item", MovieItem);