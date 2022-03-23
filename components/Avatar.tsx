import Image from 'next/image';
import { FC } from 'react';
import { useMoralis } from 'react-moralis';

interface AvatarProps {
    logoutOnPress: boolean;
    username: string;
}

const Avatar: FC<AvatarProps> = ({ logoutOnPress, username }) => {
    const { user, logout } = useMoralis();

    return (
        <Image
            className='rounded-full bg-gray-900 hover:opacity-80 cursor-pointer ease-in duration-100'
            src={`https://avatars.dicebear.com/api/pixel-art/${
                username || user.get('username')
            }.svg`}
            alt='Avatar'
            layout='fill'
            onClick={() => logoutOnPress && logout()}
        />
    );
};

export default Avatar;
