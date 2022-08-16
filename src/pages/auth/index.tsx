import { initializeApp } from '@firebase/app';
import { GetStaticProps } from 'next';
import AuthContainer from '../../components/auth/AuthContainer';
import { Layout, Template } from '../../components/layout';

interface AuthPageProps {
    firebaseConfig: {
        apiKey: string;
        authDomain: string;
        projectId: string;
        storageBucket: string;
        messagingSenderId: string;
        appId: string;
    };
}

const AuthPage = ({ firebaseConfig }: AuthPageProps) => {
    const app = initializeApp(firebaseConfig);

    return (
        <Layout>
            <Template>
                <AuthContainer app={app} />
            </Template>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            firebaseConfig: {
                apiKey: process.env.API_KEY,
                authDomain: process.env.AUTH_DOMAIN,
                projectId: process.env.PROJECT_ID,
                storageBucket: process.env.STORAGE_BUCKET,
                messagingSenderId: process.env.MESSAGING_SENDER_ID,
                appId: process.env.APP_ID,
            },
        },
    };
};

export default AuthPage;
