require('dotenv').config()
const PouchDB = require('pouchdb')
PouchDB.plugin(require('pouchdb-find'))

const db = new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)

db
  .createIndex({ index: { fields: ['type'] } })
  .then(() => {
    return db.find({ selector: { type: 'cat' } })
  })
  .then(cats => {
    console.log('Created an index on the type field.')
    console.log('Here are the cats:')
    console.log(JSON.stringify(cats, null, 2))
  })

db
  .createIndex({ index: { fields: ['name'] } })
  .then(() => {
    return db.find({ selector: { name: 'kitty' } })
  })
  .then(cats => {
    console.log('Created an index on the name field.')
    console.log('Here are the cats:')
    console.log(JSON.stringify(cats, null, 2))
  })

db
  .createIndex({ index: { fields: ['weightLbs'] } })
  .then(() => {
    return db.find({ selector: { weightLbs: { $gte: 8 } } })
  })
  .then(cats => {
    console.log('Created an index on the name field.')
    console.log('Here are the cats:')
    console.log(JSON.stringify(cats, null, 2))
  })
