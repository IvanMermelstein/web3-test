import { FC } from 'react';
import { useMoralis } from 'react-moralis';

const ChangeUserName: FC = () => {
    const { setUserData, isUserUpdating, userError, user } = useMoralis();

    const setUsername = () => {
        const username = prompt(
            `Enter your new Username (current: ${user.getUsername()})`
        );

        if (!username) return;

        setUserData({ username });
    };

    return (
        <div className='text-sm absolute top-5 right-5'>
            <button
                disabled={isUserUpdating}
                className='hover:text-pink-700 ease-in duration-100'
                onClick={setUsername}>
                Change your Username
            </button>
        </div>
    );
};

export default ChangeUserName;
