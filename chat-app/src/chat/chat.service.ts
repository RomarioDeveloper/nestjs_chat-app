import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
    private messages = [];

    addMessage(message) {
        this.messages.push(message);
    }

    getAllMessages() {
        return this.messages;
    }
}
