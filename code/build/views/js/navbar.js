let nav = document.getElementById("nav")
if (nav != undefined) {
    nav.id = "navbar";
    nav.className = " navbar sticky-top navbar-expand-lg bg-light";
    nav.innerHTML = `
    <div class="container-fluid">
        <a class="navbar-brand" href="/">Speedcube federation</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/">Info</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/tournaments">Toernooien</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/ranking" >Ranking</a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href="/players" >Spelers</a>
                </li>

                
            </ul>
            
            
            
        </div>`}


