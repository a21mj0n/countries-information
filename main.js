import AppBar from "./src/components/navbar.js"
import InputSearch from './src/components/form/InputSearch.js'
import InputSelect from './src/components/form/InputSelect.js'
import ListCountry from './src/components/ListCountry.js'
import request from './src/utils/request.js'

customElements.define('app-bar', AppBar);
customElements.define('input-search', InputSearch);
customElements.define('input-select', InputSelect);
customElements.define('list-country', ListCountry);

document.querySelector('.theme-icon')?.addEventListener('click', (e) => {
  const element = document.body;
  element.classList.toggle("dark-mode");

  alert('We didn`t know you could click here. This functionality is being developed. Sorry !!!')

  // if (element.classList.contains('dark-mode')) {
  //   e.target.setAttribute('name', 'sun')
  //   e.target.setAttribute('color', 'white')
  // } else {
  //   e.target.setAttribute('name', 'moon')
  //   e.target.setAttribute('color', 'black')
  // }
})

document.querySelector('.select-region')?.addEventListener('change', (e) => {
  const region = e.target.value;

  window.location.search = `region=${region}`
})

document.querySelector('.input-search')?.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    window.location.search = `name=${e.target.value}`
  }
})

document.querySelector('.btn-search')?.addEventListener('click', (e) => {
  const name = document.querySelector('.input-search').value;

  window.location.search = `name=${name}`
})

if (window.location.pathname !== '/') {
  const fetchCountry = async () => {
    const params = new URLSearchParams(document.location.search)
    const countryName = params.get('country');

    if (!countryName) {
      return window.location.replace('/')
    }

    const country = (await request(`/name/${countryName}`))[0]

    document.querySelector('.country-name').textContent = country.name.common
    document.querySelector('.country-image').src = country.flags.png
    document.querySelector('.country-capital span').textContent = country.capital
    document.querySelector('.country-region span').textContent = country.region
    document.querySelector('.country-population span').textContent = Intl.NumberFormat().format(country.population)
    document.querySelector('.country-subregion span').textContent = country.subregion
    
    country.tld.forEach(domain => {
      document.querySelector('.country-top-level-domains span').textContent += domain
    })

    Object.entries(country.currencies).forEach(([type, currency]) => {
      document.querySelector('.country-currencies span').innerHTML += currency.name + '&nbsp;' + currency.symbol
    })

    Object.entries(country.languages).forEach(([abbr, language]) => {
      document.querySelector('.country-languages span').innerHTML += language + '&nbsp;'
    })

    country.borders.forEach(neighbour => {
      document.querySelector('.country-borders').innerHTML += `<span>${neighbour}</span>&nbsp;`
    })
    
  }

  fetchCountry()
}