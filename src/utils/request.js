export default async function (url) {
  const baseUrl = 'https://restcountries.com/v3.1'
  
  const response = await fetch(baseUrl + url)
  const data = response.json()

  return data
}