import { FC, MouseEvent, MutableRefObject, useState } from 'react';
import { useMoralis } from 'react-moralis';

interface SendMessageProps {
    endOfMessagesRef: MutableRefObject<any>;
}

const SendMessage: FC<SendMessageProps> = ({ endOfMessagesRef }) => {
    const { user, Moralis } = useMoralis();
    const [message, setMessage] = useState<string>('');

    const sendMessage = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();

        if (!message) return;

        const Messages = Moralis.Object.extend('Messages');
        const messages = new Messages();

        messages
            .save({
                message: message,
                username: user.getUsername(),
                ethAddress: user.get('ethAddress')
            })
            .then(message => {})
            .catch(error => {
                console.log(error.message);
            });

        endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
        setMessage('');
    };

    return (
        <form className='flex fixed bottom-10 w-10/12 bg-gray-900 px-6 py-4 max-w-2xl shadow-xl rounded-full border-2 border-blue-200'>
            <input
                type='text'
                className='outline-none bg-transparent text-gray-50 placeholder-gray-400 flex-grow pr-5'
                placeholder={`Enter your message ${user.getUsername()}`}
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button
                onClick={sendMessage}
                type='submit'
                className='font-bold text-pink-500'>
                Send
            </button>
        </form>
    );
};

export default SendMessage;
