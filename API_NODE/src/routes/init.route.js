const { Router } = require('express')
const { routeName } = require('../routeName')
const { StatusCodes } = require('http-status-codes')

const initRoute = Router()

initRoute.get(routeName.rootDir, (req, res) => {
  console.log('get do inital route ', routeName.rootDir)
  res.status(StatusCodes.OK).send(`
    <h1> Node server API running on Docker <h1/> <br>
    <h2> Tal link acessado é por meio de um tunnel via NGROK<h2/> <br>
    <h3> Aplicação rodando em um container cp, node-16<h3/> <br>
    <h3> Interligado via conexão e direcionamento de porta com uma isntancia MySQL<h3/> <br>
    <h4> Acesse ao request STATUS <a target="_blank" href="${routeName.statusDir}">LINK<a/><h4/>
    <h4> Acesse ao request USERS <a target="_blank" href="${routeName.userDir}">LINK<a/><h4/>
    <h4> Acesse ao request PRODUCTS <a target="_blank" href="${routeName.prodDir}">LINK<a/><h4/>
     `)
})

exports.initRoute = initRoute

// initRoute.get('/', ( req: Request, res: Response, next:NextFunction) => {
//     res.status(StatusCodes.OK).send([
//         {
//             string : `BEM VINDO A PAGINA INICIAL => Acesse ${link}status para validar o db elephantSQL`
//         },{
//             string : `Para acessar (http)GET ${link}users | (http)GET ${link}users/uuid para uma consulta especifica pelo ID do user é necessario autenticação via (prefix)Bearer Token`
//         },{
//             string : `Para acessar (http)POST ${link}token | (http)GET ${link}token/validate é necessario Basic Authorization`
//         },{
//             String: `Para gerenciar tais acessos é necessario o uso do Postman, Imnsonia ou o ThunderClient do VS  até que o frontend fique pronto`}]);
// })
