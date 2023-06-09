const dbConn = require('../db');


const Login = async(req, res, next) =>{
    
    try{
        let sql = 'SELECT * FROM user WHERE emailId = ? AND password = ?';
        const user = dbConn.query(sql, [req.body.username, req.body.password], async (err, rows) => {
            if (err) {
                throw err;
            }
            if(rows.length > 0){
                var user_login_data = {
                    userId: rows[0].userId,
                    logType:"login"
                }
                dbConn.query('INSERT INTO user_login_history SET ?', user_login_data, function(err, result) {
                    if (err) {
                        throw err;
                    }
                    if(result){
                        res.json({data:rows[0], status:"success", code:200});

                    }
                })
            }else{
                
                res.json({data:[], status:"Account Not Available", code:200});
            }
            
        })
        
    }catch(err){
        res.status(500).json({error:err.message})
    }  
};

const userHistory = async(req, res, next) =>{
    
    try{
        let sql = 'SELECT * FROM user INNER JOIN user_login_history ON user.userId = user_login_history.userId';
        const user = dbConn.query(sql, [], async (err, rows) => {
            if (err) {
                throw err;
            }
            if(rows.length > 0){
                        console.log("data", rows);
                        res.json({data:rows, status:"success", code:200});

            }else{
                
                res.json({data:[], status:"Account Not Available", code:200});
            }
            
        })
        
    }catch(err){
        res.status(500).json({error:err.message})
    }  
};


module.exports = {Login, userHistory}