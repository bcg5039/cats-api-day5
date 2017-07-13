require('dotenv').config()
const PouchDB = require('pouchdb')
const { map } = require('ramda')

const db = new PouchDB(
  new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)
)

db.allDocs(
  {
    include_docs: true,
    key: 'breed_pixie-bob'
  },
  function(err, result) {
    if (err) console.log(err)
    console.log(JSON.stringify(map(row => row.doc, result.rows), null, 2))
  }
)
