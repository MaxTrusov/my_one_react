import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogs_item/Dialogs_item';
import Message from './Message/Message';

const Dialogs = (props) => {    
    
    let dialogsElements = props.dialog.map( d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.message.map( m => <Message message={m.message} id={m.id} />);
    
    return (
        <div>
            <div className={s.blockMessage}>
                <textarea className={s.textDialog}></textarea>
                <button className={s.dialogBtn}>Add Post</button>
            </div>
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                {messagesElements}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;