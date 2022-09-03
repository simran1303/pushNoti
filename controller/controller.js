const dbData = require('../model/noti');
const ftoken = require('../util/token');

exports.addToken =async (req,res)=>{
    const token = 'ExponentPushToken[KB_gQgBRrHSjElPMhK6wij]'
    const data = await dbData.addToken(token);
    res.status(200).send(data);
}

exports.getTokenData = async (req,res)=>{
    const tokenArray =[];
    const data = await dbData.getToken();
    tokenArray.push(data[0][0].token)
     ftoken.token(tokenArray);
    res.status(200).send(data[0][0].token);
}

