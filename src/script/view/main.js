import "./jquery.js";
import "./../component/nav-bar.js";
import "./../component/list-item.js";
import "./../component/movie-item.js";
import DataSource from "./../data/data-source.js";

const main = () => {
    const searchItem = document.querySelector("#searchElement");
    const buttonClick = document.querySelector("#searchButtonElement");
    const navMenu = document.querySelector("ul");
    const listItemElement = document.querySelector("list-item");

    let value = "";
    const onNavBarClicked = () => {
        value = document.querySelector(".active").innerText;
        if (value == " Popularity" || value == "Popularity") {
            value = "popularity.desc";
        } else if (value == " Revenue") {
            value = "revenue.desc";
        } else if (value == " Voting") {
            value = "vote_count.desc";
        } else if (value == " Release") {
            value = "primary_release_date.desc";
        }

        DataSource.movieTrending(value)
            .then(renderResult)
            .catch(fallbackResult)
    }

    const onButtonSearchClicked = () => {
        DataSource.searchMovie(searchItem.value)
            .then(renderResult)
            .catch(fallbackResult)
    }
    
    const renderResult = results => {
        listItemElement.list = results;
    }
    
    const fallbackResult = message => {
        listItemElement.renderError(message);
    }

    if(value == "") {
        onNavBarClicked();
    }

    navMenu.addEventListener("click", onNavBarClicked);
    buttonClick.addEventListener("click", onButtonSearchClicked);
}

export default main;