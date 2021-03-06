import * as jwt from 'jsonwebtoken';
import Configs from './configs';

class Auth {

    validate(req, res, next) {
        var token = req.header['x-access-token'];

        if (token) {
            jwt.verify(token, Configs.secret, function (err, decoded) {
                if (err) {
                    return res.status(403).send({
                        sucess: false,
                        message: '403 - Token inválido'
                    })
                }
                else {
                    next();
                }
            })
        } 
        else {
            return res.status(401).send({
                sucess: false,
                message: '401 - Não autorizado'
            })
        }
    }

}

export default new Auth;