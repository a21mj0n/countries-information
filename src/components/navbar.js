class AppBar extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-light bg-light text-dark sticky-top">
        <div class="container-xl">
          <a href="/" class="navbar-brand"><strong>Where in the world ?</strong></a>
          <box-icon class="theme-icon" style="cursor: pointer" name="moon" color="black"></box-icon>
        </div>
      </nav>
    `;
  }
}

export default AppBar
