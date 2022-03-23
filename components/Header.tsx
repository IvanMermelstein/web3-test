import Image from 'next/image';
import { FC } from 'react';
import { useMoralis } from 'react-moralis';
import Avatar from './Avatar';
import ChangeUserName from './ChangeUserName';

const Header: FC = () => {
    const { user } = useMoralis();

    return (
        <div className='sticky top-0 p-5 z-50 bg-gray-900 shadow-lg text-pink-500 border-b-2 border-pink-700'>
            <div className='grid grid-cols-5 lg:grid-col-6 items-end lg:items-center'>
                <div className='relative h-24 w-24 mx-auto hidden lg:inline-grid'>
                    <Image
                        src='https://links.papareact.com/3pi'
                        alt='logo'
                        layout='fill'
                        objectFit='cover'
                        className='rounded-full'
                    />
                </div>

                <div className='col-span-3 text-left lg:text-center'>
                    <div className='relative h-48 w-48 lg:mx-auto border-pink-500 border-4 rounded-full'>
                        <Avatar username={user.getUsername()} logoutOnPress />
                    </div>
                    <h1 className='sm:text-3xl text-lg mt-3'>Welcom to WEB3</h1>
                    <h2 className='sm:text-5xl text-2xl font-bold truncate'>
                        {user.getUsername()}
                    </h2>
                    <ChangeUserName />
                </div>
            </div>
        </div>
    );
};

export default Header;
