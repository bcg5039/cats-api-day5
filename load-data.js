require('dotenv').config()

const PouchDB = require('pouchdb')

const db = new PouchDB(
  new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)
)
db
  .bulkDocs([
    {
      _id: 'breed_pixie-bob',
      type: 'breed',
      breed: 'pixie bob',
      desc: 'This breed is very, very, very, very good.'
    },
    {
      _id: 'breed_siamese',
      type: 'breed',
      breed: 'siamese',
      desc: 'siamese cat desc'
    },
    {
      _id: 'breed_bombay',
      type: 'breed',
      breed: 'bombay',
      desc: 'This breed is bad luck!'
    },
    {
      _id: 'cat_tootles_owner_2222',
      type: 'cat',
      name: 'tootles',
      ownerId: 'owner_2222',
      weightLbs: 10,
      breedId: 'breed_tabby',
      gender: 'F'
    },
    {
      _id: 'breed_tabby',
      type: 'breed',
      breed: 'tabby',
      desc: 'This breed uses too many browser tabs at once!'
    },
    {
      _id: 'cat_sparkles_owner_1111',
      type: 'cat',
      name: 'sparkles',
      ownerId: 'owner_1111',
      weightLbs: 10,
      breedId: 'breed_bombay',
      gender: 'F'
    },
    {
      _id: 'cat_kitty_owner_3333',
      type: 'cat',
      name: 'kitty',
      ownerId: 'owner_3333',
      weightLbs: 10,
      breedId: 'breed_siamese',
      gender: 'F'
    }
  ])
  .then(function(result) {
    console.log('attempting to load data. Inspect each result item below:')
    console.log(JSON.stringify(result, null, 2))
  })
  .catch(function(err) {
    console.log(err)
  })
