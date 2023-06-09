import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { MongoUserRepository } from "../../repositories/implementations/MongoUsersRepository";
import { CreateUserController } from "./CreaterUserController";
import { CreateUserUseCase } from "./CreaterUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider()
const mongoUserRepository = new MongoUserRepository()


const createUserUseCase = new CreateUserUseCase(
    mongoUserRepository, 
    mailtrapMailProvider
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export {createUserUseCase, createUserController}