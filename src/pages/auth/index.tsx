import { GetServerSideProps } from 'next';
import AuthContainer from '../../components/auth/AuthContainer';
import { Layout, Template } from '../../components/layout';

const AuthPage = () => {
    return (
        <Layout>
            <Template minHeight="100vh">
                <AuthContainer />
            </Template>
        </Layout>
    );
};

/**
 * SSR Cookie 조회한 뒤, redirection
 * @author Copotter
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
    if (context.req.cookies.auth) {
        return {
            redirect: {
                destination: '/survey',
                permanent: false,
            },
        };
    }
    return { props: { auth: context.req.cookies.auth || null } };
};

export default AuthPage;
