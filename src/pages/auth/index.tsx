import AuthContainer from '../../components/auth/AuthContainer';
import { Layout, Template } from '../../components/layout';

const AuthPage = () => {
    return (
        <Layout>
            <Template padding="140px 0" minHeight="100vh">
                <AuthContainer />
            </Template>
        </Layout>
    );
};

export default AuthPage;
