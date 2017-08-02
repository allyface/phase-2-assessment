const fs = require('fs')
const clients = JSON.parse(fs.readFileSync('part-2/clients.json', 'utf8'))

let city = process.argv[2]

function searchByCity(city) {

  console.log('Finding clients in City "', city, '"...')

  let searchResults = []

  for(let i = 0; i < clients.length; i++) {

    if(city === clients[i].city) {
      let client = {
        'id': clients[i].id,
        'rep_name': clients[i].rep_name,
        'company': clients[i].company,
        'city': clients[i].city,
        'state': clients[i].state
      }

      searchResults.push(client)
    }
  }
  console.log(searchResults)
}

searchByCity(city)
