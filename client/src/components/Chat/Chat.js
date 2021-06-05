import React from 'react';
import { Channel } from './Channel';
import { ChannelList } from './ChannelList';
import './chat.scss';
export default class Chat extends React.Component {

        state = {
            channels: [{ id: 1, name: 'first', participants: 10 }]
        }
        render() {
            return (
                <>
                <div classname="chat-app"></div>
                    <ChannelList channels="{this.state.channels}"></ChannelList>
</>
                
            );
        }}