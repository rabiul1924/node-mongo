const express = require('express');

const app = express();



//1
//   function rootCall(req, res) {
//     res.send('Thank you very much')
//   }
//2
//   const rootCall = (req, res) => res.send('Thank you very much');
//*
// app.get('/', rootCall)

app.get('/', (req, res) => {
    res.send('Thank for calling me.....')
  })


  
  
  app.listen(3000, () => {console.log('listening to port 3000')} )

