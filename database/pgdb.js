const {Client} =  require('pg');

const client = new Client({

    user: 'root',
  
    host: 'dpg-cc9n96kgqg461mcf2t90-a.oregon-postgres.render.com',
  
    database: 'pushnotification',
  
    password: 'rwDT9arrtuWslQCJFUlyNBo4nSDYQBQB',
  
    port: 5432,

    ssl: true,
  
  })



client.connect().then(res => console.log('done')).catch(err=> console.log(err))

module.exports = client;