class InputSelect extends HTMLElement {
  constructor() {
    super()
    this.state = {
      regions: [
        { code: 'af', name: 'Africa' },
        { code: 'ame', name: 'America' },
        { code: 'asia', name: 'Asia' },
        { code: 'eu', name: 'Europe' },
        { code: 'oc', name: 'Oceania' },
      ]
    }
  }

  connectedCallback() {
    this.innerHTML = `
      <select class="form-select select-region" aria-label="Default select example">
        <option selected>Filter by region</option>
        ${this.state.regions.map(region => {
          return `<option value="${region.code}">${region.name}</option>`
        })}
      </select>
    `;
  }
}

export default InputSelect
