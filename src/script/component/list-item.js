import './movie-item.js';
class ListItem extends HTMLElement {

    set list(list) {
        this._list = list;
        this.renderMovie();
    }

    renderError(message) {

        this.innerHTML = `
            <style>
                placeholder {
                    font-weight: lighter;
                    color: rgba(0,0,0,0.5);
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            </style>`;
        this.innerHTML += `<h2 class="placeholder text-center">${message}</h2>`;
    }

    renderMovie() {
        this.innerHTML = `
            <style>

                .image {
                    opacity: 1;
                    display: block;
                    width: 100%;
                    height: auto;
                    transition: .5s ease;
                    backface-visibility: hidden;
                }
                
                .movie_overview {
                    transition: .5s ease;
                    opacity: 0;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    -ms-transform: translate(-50%, -50%);
                    text-align: center;
                    width: 100%;
                    height: 100%;
                }
                
                .movie_card:hover img {
                    opacity: 0.3;
                }
                
                .movie_card:hover .movie_overview {
                    opacity: 1;
                }
                
                .text {
                    text-align: justify;
                    color: black;
                    font-size: 16px;
                    padding: 20px;
                }

                img {
                    -webkit-user-drag: none;
                    -moz-user-drag: none;
                    -o-user-drag: none;
                    user-drag: none;
                    pointer-events: none;
                }
    
                .movie_card{
                    padding: 0;
                    width: 30%;
                    margin:14px; 
                    border-radius: 10px;
                    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 15px 0 rgba(0, 0, 0, 0.19);
                }

                .movie_card img{
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                    height: 78%;
                }

                .movie_info{
                    color: #5e5c5c;
                }

                .movie_info i{
                    font-size: 20px;
                }
                .card-title{
                    width: 80%;
                    height: 4rem;
                }

                .play_button{
                    background-color: #ff3d49;
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    right: 20px;
                    bottom: 111px;
                    font-size: 30px;
                    padding-left: 21px;
                    padding-top: 16px;
                    color: #FFFFFF;
                    cursor: pointer;
                }

                .play_button .fa-play {
                    position: absolute;
                    bottom: 15px;
                    right: 15px;
                }
                @media (max-width: 1024px) {
                    .movie_card {
                        width: 40%;
                        height: 70%;
                    }
                }

                @media (max-width: 768px) {
                    .movie_card {
                        height: 60%;
                    }

                    .text {
                        font-size: 13px;
                    }

                    .card-title {
                        font-size: 16px;
                    }
                }
                @media (max-width: 425px) {
                    .movie_card {
                        width: 80%;
                    }

                    .text {
                        font-size: 12px;
                    }
                }
            </style>`;
        const movieItemElement = document.createElement("movie-item");
        movieItemElement.movie = this._list;
        this.appendChild(movieItemElement);
    }
}

customElements.define("list-item", ListItem);