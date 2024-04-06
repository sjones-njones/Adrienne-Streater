const db = require('./connection');
const { User, Product } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  
  const books = await Book.insertMany([
    {
      name: 'The Whimsical Journey of Ari and Her Amazing AFO',
      description: `Ari's book`,
      image: `https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2FProcess%2F1.jpg?alt=media&token=dd7def97-f93f-44cd-b05d-cad7c98841ce`,
      category: "available",
      price: 20
    },
    {
      name: 'The Whimsical Journey of Rosie and Her Amazing',
      description: `Rosie's book`,
      image: `https://firebasestorage.googleapis.com/v0/b/hodge-knives.appspot.com/o/images%2FProcess%2F2.jpg?alt=media&token=3051e75a-bc37-48c7-8a7d-1392c7bb91fd`,
      price: 15
    },
  ]);

  console.log('books seeded');

  await Video.create({
    videoId: '7sDY4m8KNLc',
    description: "short description",
    image: "image url"
  });

  console.log('video seeded');

  await Blog.create({
    blogURL: 'https://open.spotify.com/episode/2qsgUS2LsW8mB9vThhKmqK?si=sVB1x6qAQPShikqqEpxKkw',
    description: "short description",
    image: "imageUrl"
     });


  console.log('blog seeded');

  process.exit();
});