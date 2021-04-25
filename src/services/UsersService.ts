import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository"

class UsersService {
  private usersRepository: Repository<User>
  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });
  
    return user;
  }

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository)
  }
  async create(email: string) {
   
    //verifica se o usuario existe

    const userExists = await this.usersRepository.findOne({ 
      email
    });
    // se existir, retornar user
    if(userExists) {
      return userExists;
    }
    const user = this.usersRepository.create({ 
      email
     });
     await this.usersRepository.save(user);
     return user;
  }
}

export { UsersService }