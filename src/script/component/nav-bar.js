class NavBar extends HTMLElement {
    
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-full">
                <div class="container">
                    <a class="navbar-brand" href="#beranda">MovieEz</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link active" href="#popularity"><i class="fas fa-fire"></i> Popularity</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#revenue"><i class="fas fa-dollar-sign"></i> Revenue</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#voting"><i class="fas fa-poll"></i> Voting</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#release"><i class="fas fa-clock"></i> Release</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" placeholder="Search" id="searchElement" type="search">
                            <a class="btn btn-outline-success my-2 my-sm-0" id="searchButtonElement">Search</a>
                        </form>

                    </div>
                </div>
            </nav>`;
    }
}

customElements.define("nav-bar", NavBar);