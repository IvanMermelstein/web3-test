import Head from 'next/head';
import { FC } from 'react';
import { useMoralis } from 'react-moralis';
import Header from '../components/Header';
import Login from '../components/Login';

const Home: FC = () => {
    const { isAuthenticated } = useMoralis();

    if (!isAuthenticated) return <Login />;

    return (
        <div className='h-screen overflow-y-scroll bg-gradient-to-b from-gray-900 to-fuchsia-900 overflow-hidden scrollbar-hide'>
            <Head>
                <title>web3 - test</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <div className='max-w-screen-2xl mx-auto'>
                <Header />
            </div>
        </div>
    );
};

export default Home;
