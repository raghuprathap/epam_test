const jsonwebtoken = require('jsonwebtoken')
const authenticate = function(body) {
    console.log("Body", body);
    console.log("in athenticate");
    const defaultPassword = "xyz";
    let token = "";
    if(defaultPassword === body.password) {
        token = jsonwebtoken.sign("athenticated", "secret");
    }
    return token;
}

module.exports  = authenticate;