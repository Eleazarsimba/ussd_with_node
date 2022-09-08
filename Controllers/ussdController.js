const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ussd1'
  });
  
  // open the MySQL connection
  connection.connect(function(error){
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });

  exports.ussd = (req, res) => {
    const {text, phoneNumber} = req.body
    let response 
    if (text === '') {
      // Enter player's name
      response = `CON Welcome to Alvare Stars
      1. Register
      2. Quit`
    } 
    else if (text === '1') {
      //  check if user already exist
        connection.query('SELECT * FROM players WHERE tel = ? ',  [phoneNumber]
        ,function(err,rows){
        // if error in getting th list
          if (err) throw err;
          if (!rows.length){
            response = `CON Choose your preffered position
            1. Goalkeeper
            2. Defender
            3. Midfielder
            4. Forward`
          }
          else{
            response = `END The number is already registered`
          }
        });
    } 
    else if (text === '2') {
      response = `END Thanks for visiting Alvare Stars`
    } 
    else if (text === '1*1') {
      // Business logic for first level response
      response = `CON Enter your role
      1. Goalkeeper`
    } 
    else if (text === '1*2') {
      // Business logic for first level response
      response = `CON Enter your role
      1. Left back
      2. Right back
      3. Center back`
    } 
    else if (text === '1*3') {
        response = `CON Enter your role
      1. Attacking midfielder
      2. Defending midfielder
      3. Central midfielder`
    } 
    else if (text === '1*4') {
        response = `CON Enter your role
      1. Left winger
      2. Right winger
      3. Striker`
    } 
    else if (text === '1*1*1') {
        var reg={
            tel: phoneNumber,
            position: "Goalkeeper",
            role: "Goalkeeper"
        }; 
        
          connection.query('INSERT INTO `players` SET ?', reg, function(err, results){
            if (err) throw err;
            console.log("1 record inserted");
          });
            response = `END You have been registered as a Goalkeeper`
    } 
    else if (text === '1*2*1') {
        var reg={
            tel: phoneNumber,
            position: "Defender",
            role: "Left back"
        }; 
        
        connection.query('INSERT INTO `players` SET ?', reg, function(err, results){
            if (err) throw err;
            console.log("1 record inserted");
        });
            response = `END You have been registered as a Left back`
    }    
    else if (text === '1*2*2') {
        var reg={
            tel: phoneNumber,
            position: "Defender",
            role: "Right back"
        }; 
        
        connection.query('INSERT INTO `players` SET ?', reg, function(err, results){
            if (err) throw err;
            console.log("1 record inserted");
        });
            response = `END You have been registered as a Right back`
    } 
    else if (text === '1*2*3') {
        var reg={
            tel: phoneNumber,
            position: "Defender",
            role: "Center back"
        }; 
        
          connection.query('INSERT INTO `players` SET ?', reg, function(err, results){
            if (err) throw err;
            console.log("1 record inserted");
          });
            response = `END You have been registered as a Center back`
    }
    else if (text === '1*3*1') {
        var reg={
            tel: phoneNumber,
            position: "Midfielder",
            role: "Attacking midfielder"
        }; 
        
        connection.query('INSERT INTO `players` SET ?', reg, function(err, results){
            if (err) throw err;
            console.log("1 record inserted");
        });
            response = `END You have been registered as a Attacking midfielder`
    }    
    else if (text === '1*3*2') {
        var reg={
            tel: phoneNumber,
            position: "Midfielder",
            role: "Defending midfielder"
        }; 
        
        connection.query('INSERT INTO `players` SET ?', reg, function(err, results){
            if (err) throw err;
            console.log("1 record inserted");
        });
            response = `END You have been registered as a Defending midfielder`
    } 
    else if (text === '1*3*3') {
        var reg={
            tel: phoneNumber,
            position: "Midfielder",
            role: "Central midfielder"
        }; 
        
          connection.query('INSERT INTO `players` SET ?', reg, function(err, results){
            if (err) throw err;
            console.log("1 record inserted");
          });
            response = `END You have been registered as a Central midfielder`
    }
    else if (text === '1*4*1') {
        var reg={
            tel: phoneNumber,
            position: "Forward",
            role: "Left winger"
        }; 
        
        connection.query('INSERT INTO `players` SET ?', reg, function(err, results){
            if (err) throw err;
            console.log("1 record inserted");
        });
        response = `END You have been registered as a Left winger`
    }    
    else if (text === '1*4*2') {
        var reg={
            tel: phoneNumber,
            position: "Forward",
            role: "Right winger"
        }; 
        
        connection.query('INSERT INTO `players` SET ?', reg, function(err, results){
            if (err) throw err;
            console.log("1 record inserted");
        });
            response = `END You have been registered as a Right winger`
    } 
    else if (text === '1*4*3') {
        var reg={
            tel: phoneNumber,
            position: "Forward",
            role: "Striker"
        }; 
        
          connection.query('INSERT INTO `players` SET ?', reg, function(err, results){
            if (err) throw err;
            console.log("1 record inserted");
          });
            response = `END You have been registered as a Striker`
    }  
    else {
      res.status(400).send('Bad request!')
    }
      setTimeout(() => {
          console.log(text);
          res.send(response);
          res.end();
      }, 2000);
  }