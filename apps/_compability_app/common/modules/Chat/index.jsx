import 'react-chat-elements/dist/main.css';
import * as React from "react";
import {Input} from "antd";
import {MessageList} from "react-chat-elements";
import {ChatContainer, InputContainer, MessageWindow} from "./components"
import {Services, Types} from "../../../services";
import {List} from "immutable";

function createMessage(text) {
    return {
        position: 'right',
        type: 'text',
        text,
        date: new Date(),
    }
}

export class Chat extends React.Component {
    state = {
        data_source: List([])
    };

    componentDidMount() {
        this.chat_service
            .init()
            .then(() => {
                this.listener_id = this.chat_service.subscribe(this.listen);
            })
    }

    componentWillUnmount() {
        if (this.chat_service) {
            this.chat_service.unsubscribe(this.listener_id);
            this.listener_id = null
        }
    }

    render() {
        return (
            <ChatContainer>
                <MessageWindow>
                    <MessageList
                        className="message-list"
                        dataSource={this.state.data_source}
                    />
                    <div style={{ float:"left", clear: "both" }}
                         ref={(el) => { this.messagesEnd = el; }}>
                    </div>
                </MessageWindow>
                <InputContainer>
                    <Input.Search
                        placeholder="input search text"
                        enterButton="Отправить"
                        size="large"
                        onSearch={this.onMessage}
                    />
                </InputContainer>
            </ChatContainer>
        );
    }

    onMessage = (message) => {
        this.chat_service.send(message);
    };

    listen = (message) => {
        this.setState(({data_source}) => ({
            data_source: data_source.concat(createMessage(message))
        }));
        // Do something with data
        this.scrollToBottom();
    };

    scrollToBottom = () => {
        console.log("scrolled");
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    };

    chat_service = Services.get(Types.ChatService);
    listener_id = null
}
