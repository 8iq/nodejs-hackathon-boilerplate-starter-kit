import 'react-chat-elements/dist/main.css';
import * as React from "react";
import {Input} from "antd";
import {MessageList} from "react-chat-elements";
import {ChatContainer, InputContainer, MessageWindow} from "./components"
import {Services, Types} from "../../../services";
import {List} from "immutable";

function createMessage({ payload, date, user_id, user_name }) {
    const position = user_id === Services.get(Types.UserService).getCurrentUser().getId()
        ? "right"
        : "left";

    return {
        position,
        title: user_name,
        type: "text",
        text: payload,
        date: new Date(date),
    }
}

export class Chat extends React.Component {
    state = {
        data_source: List([]),
        input_value: "",
    };

    componentDidMount() {
        this.listener_id = this.chat_service.subscribe(this.listen)
    }

    componentWillUnmount() {
        this.chat_service.unsubscribe(this.listener_id);
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
                         ref={(el) => { this.messages_end = el; }}>
                    </div>
                </MessageWindow>
                <InputContainer>
                    <Input.Search
                        value={this.state.input_value}
                        placeholder="input search text"
                        enterButton="Отправить"
                        size="large"
                        onChange={this.onChange}
                        onSearch={this.onMessage}
                    />
                </InputContainer>
            </ChatContainer>
        );
    }

    onChange = (e) => {
        this.setState(() => ({
            input_value: e.value
        }));
    };

    onMessage = (message) => {
        if (!message) {
            return;
        }

        this.chat_service.send(message);
    };

    listen = (message) => {
        this.setState(
            ({data_source}) => ({
                data_source: data_source.concat(createMessage(message)),
                input_value: ""
            }),
            () => {
                this.scrollToBottom();
            });
    };

    scrollToBottom = () => {
        console.log("scrolled");
        this.messages_end.scrollIntoView({ behavior: "smooth" });
    };

    chat_service = Services.get(Types.ChatService);
    user_service = Services.get(Types.UserService);
    listener_id = null;
    message_input = null;
    messages_end = null
}
