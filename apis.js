function showCountries() {
  let xhr= new XMLHttpRequest ()

  xhr.open('GET', 'https://restcountries.eu/rest/v2/all', true)
  
  xhr.onload = function() {
    if (xhr.status == 200) {
        console.log('success')
    }
  }
  xhr.send()
}

