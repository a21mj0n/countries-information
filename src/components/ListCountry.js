import request from "../utils/request.js";

class ListCountry extends HTMLElement {
  async connectedCallback() {
    const countries = await this.getCountries();

    const elements = countries.map(country => {
      return `
        <div class="col-sm-4 col-md-3 mb-4">
          <div class="card bg-light text-dark">
            <img height="120" src="${country.flags.png}" alt="${country.name.official}">
            <div class="card-body">
              <a href="/public/detail.html?country=${country.name.common}">${country.name.official}</a>
              <p class="card-text m-0">Population: ${Intl.NumberFormat().format(country.population)}</p>
              <p class="card-text m-0">Region: ${country.region}</p>
              <p class="card-text m-0">Capital: ${country.capital}</p>
            </div>
          </div>
        </div>
      `
    });

    this.showLaoding(true)
    elements.forEach(element => {
      this.innerHTML += element
    })
    this.showLaoding(false)

  }

  async getCountries() {
    const params = new URLSearchParams(document.location.search)
    const region = params.get('region')
    const country = params.get('name')

    if (region) {
      return await request(`/region/${region}`)      
    } 
    
    if (country) {
      return await request(`/name/${country}`)
    }

    return await request('/all')
  }

  showLaoding(isLoading = false) {
    document.querySelector('.spinner-grow').style.display = isLoading ? 'block' : 'none' 
  }
}

export default ListCountry
