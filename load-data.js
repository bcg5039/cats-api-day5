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
      _id: 'cat_jellybean_owner_4444',
      type: 'cat',
      name: 'jellybean',
      ownerId: 'owner_4444',
      weightLbs: 9,
      breedId: 'breed_bombay',
      gender: 'F'
    },
    {
      _id: 'cat_buttson_owner_5555',
      type: 'cat',
      name: 'buttson',
      ownerId: 'owner_5555',
      weightLbs: 10,
      breedId: 'breed_bombay',
      gender: 'M'
    },
    {
      _id: 'cat_redcat_owner_6666',
      type: 'cat',
      name: 'redcat',
      ownerId: 'owner_6666',
      weightLbs: 10,
      breedId: 'breed_siamese',
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
    },
    {
      _id: 'cat_pebbles_owner_7777',
      type: 'cat',
      name: 'pebbles',
      ownerId: 'owner_7777',
      weightLbs: 10,
      breedId: 'breed_tabby',
      gender: 'F'
    },
    {
      _id: 'cat_fluffy_owner_8888',
      type: 'cat',
      name: 'fluffy',
      ownerId: 'owner_8888',
      weightLbs: 7,
      breedId: 'breed_bombay',
      gender: 'F'
    },
    {
      _id: 'cat_catty_owner_9999',
      type: 'cat',
      name: 'catty',
      ownerId: 'owner_9999',
      weightLbs: 10,
      breedId: 'breed_bombay',
      gender: 'F'
    },
    {
      _id: 'cat_zecat_owner_1010',
      type: 'cat',
      name: 'zecat',
      ownerId: 'owner_1010',
      weightLbs: 6,
      breedId: 'breed_tabby',
      gender: 'F'
    },
    {
      _id: 'cat_fatasscat_owner_1001',
      type: 'cat',
      name: 'fatasscat',
      ownerId: 'owner_1001',
      weightLbs: 50,
      breedId: 'breed_tabby',
      gender: 'F'
    },
    {
      _id: 'cat_fluffers_owner_2020',
      type: 'cat',
      name: 'fluffers',
      ownerId: 'owner_2020',
      weightLbs: 30,
      breedId: 'breed_bombay',
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
