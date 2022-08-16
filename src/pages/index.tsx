import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout, Template } from '../components/layout';
import MainPresenter from '../components/main/MainPresenter';

const Home: NextPage = () => {
    return (
        <Layout showHeader={false} showFooter={false}>
            <Template>
                <MainPresenter />
            </Template>
        </Layout>
    );
};

export default Home;
