import "reflect-metadata";
import { Container } from "inversify";
import { ChatService } from "./ChatService";
import { UserService } from "./UserService";

const Types = {
    ChatService: "0",
    UserService: "1",
};

const Services = new Container();

Services.bind(Types.ChatService).to(ChatService).inSingletonScope();
Services.bind(Types.UserService).to(UserService).inSingletonScope();

export { Services, Types }
