import AuthPresenter from '../../components/auth/AuthPresenter';
import { Layout, Template } from '../../components/layout';

const AuthPage = () => {
    return (
        <Layout>
            <Template padding="140px 0" minHeight="100vh">
                <AuthPresenter />
            </Template>
        </Layout>
    );
};

export default AuthPage;
