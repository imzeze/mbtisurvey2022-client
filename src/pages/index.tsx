import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout, Template } from '../components/layout';
import MainPresenter from '../components/main/MainPresenter';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>MBTI SURVEY 2022 : 대국민 MBTI 조사</title>
            </Head>
            <Layout showHeader={false} showFooter={false}>
                <Template>
                    <MainPresenter />
                </Template>
            </Layout>
        </div>
    );
};

export default Home;
