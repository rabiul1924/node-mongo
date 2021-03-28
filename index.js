const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());
// app.use(express.json());
app.use(bodyParser.json());

//1
//   function rootCall(req, res) {
//     res.send('Thank you very much')
//   }
//2
//   const rootCall = (req, res) => res.send('Thank you very much');
//*
// app.get('/', rootCall)

const user = ["Asad", 'Moin', 'Sabed', "Sumita", 'Soma', 'Sabana'];

app.get('/', (req, res) => {
    
   const fruit = {
       product : 'ada',
       price : 220
   }
    // res.send('Thank for calling me back again.....')

    res.send(fruit);
  });

//  app.get('/fruits/banana', (req, res)=> {
//      res.send({
//          fruit : 'banana',
//          quantity: 1000,
//          price:1000
//      });
//  })

 app.get('/user/:id', (req, res)=> {
     const id = req.params.id;
    //  const userId = req.params.id;
    // console.log(req.query.sort)
     const name = user [id];
     res.send({id, name});

    //  console.log(req.params.id);
 })

 //Post 

 app.post('/addUser', (req, res)=> {
    //save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
    //  console.log(req.body);
    //  console.log('Post req send');
 })
  
  
  app.listen(3000, () => {console.log('listening to port 3000')} )

