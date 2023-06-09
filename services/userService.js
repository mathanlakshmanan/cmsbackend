const dbConn = require('../db');

const loginUser = async(data)=>{
    let sql = 'SELECT * FROM user WHERE emailId = ? AND password = ?';
    dbConn.query(sql,[data.username, data.password],async(err,rows)=>{
        if(err){
            throw err;
        }else{
            console.log("rows123", rows);
           return await rows;  
        }
    })
}



module.exports = {
    loginUser
}