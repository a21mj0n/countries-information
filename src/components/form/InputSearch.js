class InputSearch extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="input-group mb-3">
        <span class="input-group-text btn-search" style="cursor: pointer" id="inputGroup-sizing-default"><box-icon name="search"></box-icon></span>
        <input
          type="text" 
          class="form-control input-search" 
          aria-label="Sizing example input" 
          aria-describedby="inputGroup-sizing-default"
          placeholder="Type name of country"
        >
      </div>
    `;
  }
}

export default InputSearch
