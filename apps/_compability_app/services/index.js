import "reflect-metadata";
import { Container } from "inversify";
import { ChatService } from "./ChatService";

const Types = {
    ChatService: "0",
};

const Services = new Container();

Services.bind(Types.ChatService).to(ChatService);

export { Services, Types }
