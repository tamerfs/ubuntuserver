const { Router } = require('express')
const { connectionDb } = require('../db_conection')
const { routeName } = require('../routeName')
const { StatusCodes } = require('http-status-codes')
// const { User } = require('../models/user.model')
// const { userRepository } = require('../repositories/user.repository')
// const { errorHandler } = require('../middlewares/error-handler.middleware')

const usersRoute = Router()

usersRoute.get(routeName.userDir, (req, res) => {
  console.log('get do users ', routeName.userDir)
  try {
    connectionDb.query(
      'SELECT username , BIN_TO_UUID(id) as id FROM application_user ',
      (error, results) => {
        if (error) throw error
        res.status(StatusCodes.OK).send({
          string:
          results.map(
            item => ({
              id: item.id,
              username: item.username
            })
          )
        }
        )
      }
    )
  } catch (error) {
    if (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('erro na arrow function - Erro ao carregar a query')
      console.log(`entrou no catch erro no request, usersRoute.get${routeName.userDir}`)
      // throw errorHandler
      throw error
    }
  }
})

// usersRoute.get('/users', async (req, res: Response, next: NextFunction) =>{

//     const users = await  userRepository.findAllUsers();
//     res.status(StatusCodes.OK).send(users);
// })

// usersRoute.get('/users/:uuid', async (req: Request<{ uuid: string}>, res: Response, next : NextFunction) =>{
//     try{
//      const uuid = req.params.uuid;
//      const user = await userRepository.findById(uuid);
//      res.status(StatusCodes.OK).send(user);
//     }catch(error){
//      next(error);
//      }
//  });

// usersRoute.post('/users', async (req: Request, res: Response, next: NextFunction) =>{
//     const newUser = req.body;
//     const uuid = await  userRepository.create(newUser);
//     res.status(StatusCodes.CREATED).send(uuid);
// })

// usersRoute.put('/users/:uuid' , async (req: Request<{ uuid: string}>, res: Response, next:NextFunction) =>{
//   const uuid = req.params.uuid;
//   const modifiedUser = req.body;
//   modifiedUser.uuid = uuid;
//   await userRepository.update(modifiedUser)
//   res.status(StatusCodes.OK).send();
// })

// usersRoute.delete('/users/:uuid', async (req: Request<{ uuid: string}>, res: Response, next:NextFunction) =>{
//     const uuid = req.params.uuid;
//     await userRepository.remove(uuid)
//     res.sendStatus(StatusCodes.OK);
// })

exports.usersRoute = usersRoute
