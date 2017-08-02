const fs = require('fs')
const clients = JSON.parse(fs.readFileSync('part-2/clients.json', 'utf8'))

let company = process.argv[2]

function searchByCompany(company) {

  console.log('Finding companies with name "', company, '"...')

  let searchResults = []

  for (let i = 0; i < clients.length; i++) {
    if (clients[i].company.startsWith(company)) {

      let match = {
        'id': clients[i].id,
        'company': clients[i].company,
        'phone': clients[i].phone
      }

      searchResults.push(match)

    }
  }

  console.log(searchResults)
}

searchByCompany(company)
