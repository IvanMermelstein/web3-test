import { FC } from 'react';
import { ByMoralis, useMoralis } from 'react-moralis';
import SendMessage from './SendMessage';

const Messages: FC = () => {
    const { user } = useMoralis();
    return (
        <div className='pb-56'>
            <div className='my-5'>
                <ByMoralis
                    style={{ marginLeft: 'auto', marginRight: 'auto' }}
                    variant='dark'
                />
            </div>
            <div></div>
            <div className='flex justify-center'>
                <SendMessage />
            </div>
            <div className='text-center text-gray-200 mt-5'>
                <p>{`You're up to date ${user.getUsername()}`} 🥑</p>
            </div>
        </div>
    );
};

export default Messages;
