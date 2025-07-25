const navbar = document.getElementById("my_navbar").innerHTML = `<div class="container-fluid d-flex align-items-center gap-3">
          <!-- Título y Slogan -->
          <a href="/">
            <h1 class="navbar-text m-0 fw-bold fs-2">
              <span style="color: #002e7a">Opti</span
              ><span style="color: #d90429">Teja</span>
            </h1>
            <small class="text-dark fw-semibold"
              >Tu Aliado Inteligente en Cubiertas UPVC</small
            >
          </a>
          <!-- Botón responsive y menú -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav text-center">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/"
                  >Inicio</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="horizonte_empresarial.html"
                  >Horizonte Empresarial</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contactenos.html">Contáctenos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="politicas.html"> Políticas</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="quienes_somos.html"> Quienes Sómos</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Nuestros Productos
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/productos.html"
                      >Línea Residencial</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="/productos.html"
                      >Línea Industrial</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="/productos.html"
                      >Línea Campestre</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>`