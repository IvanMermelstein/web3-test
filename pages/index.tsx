import Head from 'next/head';
import { FC } from 'react';
import { useMoralis } from 'react-moralis';
import Login from '../components/Login';

const Home: FC = () => {
    const { isAuthenticated, logout } = useMoralis();

    if (!isAuthenticated) return <Login />;

    return (
        <div className='h-screen'>
            <Head>
                <title>web3 - test</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <h1 className=''>Hello world!</h1>
            <button onClick={logout}>LOGOUT</button>
        </div>
    );
};

export default Home;
