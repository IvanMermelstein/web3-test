import Image from 'next/image';
import { FC } from 'react';
import { useMoralis } from 'react-moralis';

const Login: FC = () => {
    const { isAuthenticated, authenticate } = useMoralis();
    const login = async () => {
        if (!isAuthenticated) {
            await authenticate().catch(function (error) {
                console.log(error);
            });
        }
    };

    return (
        <div className='bg-gray-900 relative text-gray-800'>
            <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4'>
                <Image
                    src={'https://links.papareact.com/3pi'}
                    height={200}
                    width={200}
                    alt='Login image'
                    className='object-cover rounded-full bg-gray-900'
                />
                <button
                    className='bg-yellow-400 rounded-lg py-3 w-48 font-bold hover:animate-pulse animate-none'
                    onClick={() => login()}>
                    LOGIN
                </button>
            </div>
            <div className='h-screen w-full'>
                <Image
                    src={'https://links.papareact.com/55n'}
                    layout='fill'
                    alt='Background'
                    objectFit='cover'
                />
            </div>
        </div>
    );
};

export default Login;
