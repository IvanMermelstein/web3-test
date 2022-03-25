import { FC, useRef } from 'react';
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis';
import Message from './Message';
import SendMessage from './SendMessage';

const MINS_DURATION = 3600;

const Messages: FC = () => {
    const { user } = useMoralis();
    const endOfMessagesRef = useRef(null);
    const { data, error, isLoading } = useMoralisQuery(
        'Messages',
        query =>
            query
                .ascending('createdAt')
                .greaterThan(
                    'createdAt',
                    new Date(Date.now() - 1000 * 60 * MINS_DURATION)
                ),
        [],
        {
            live: true
        }
    );

    return (
        <div className='pb-56'>
            <div className='my-5'>
                <ByMoralis
                    style={{ marginLeft: 'auto', marginRight: 'auto' }}
                    variant='dark'
                />
            </div>
            <div className='space-y-10 p-4'>
                {data.map(message => (
                    <Message key={message.id} message={message} />
                ))}
            </div>
            <div className='flex justify-center'>
                <SendMessage endOfMessagesRef={endOfMessagesRef} />
            </div>
            <div
                ref={endOfMessagesRef}
                className='text-center text-gray-200 mt-5'>
                <p>{`You're up to date ${user.getUsername()}`} 🥑</p>
            </div>
        </div>
    );
};

export default Messages;
