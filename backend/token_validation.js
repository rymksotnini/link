const jwt = require("jsonwebtoken");
module.exports = {

    verifyToken(req,res,next){
        console.log("I m in verify");
        let token = req.query.token;
        console.log("----------------------------")
        console.log("token : ", token);

        if (token) {
            // Remove Bearer from string

            jwt.verify(token, "secret", (err, decoded) => {
                if (err) {
                    return res.json({
                        success: 0,
                        message: "Invalid Token..."
                    });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.json({
                success: 0,
                message: "Access Denied! Unauthorized User"
            });
        }
    }
};
