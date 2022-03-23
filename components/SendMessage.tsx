import { FC } from 'react';
import { useMoralis } from 'react-moralis';

const SendMessage: FC = () => {
    const { user } = useMoralis();
    return (
        <form className='flex fixed bottom-10 w-10/12 bg-gray-900 px-6 py-4 max-w-2xl shadow-xl rounded-full border-2 border-blue-200'>
            <input
                type='text'
                className='outline-none bg-transparent text-gray-50 placeholder-gray-400 flex-grow pr-5'
                placeholder={`Enter your message ${user.getUsername()}`}
            />
            <button className='font-bold text-pink-500'>Send</button>
        </form>
    );
};

export default SendMessage;
