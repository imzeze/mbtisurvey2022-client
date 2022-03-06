import type { GetServerSideProps, NextPage } from 'next';
import { Layout, Template } from '../../components/layout';
import SurveyContainer from '../../components/survey/SurveyContainer';
import { useWindowSize } from '../../util/useWindowSize';

const SurveyPage: NextPage = () => {
    const { width } = useWindowSize();
    const isMobileSize = (width || 0) < 480;

    return (
        <Layout showHeader={true} showFooter={true}>
            <Template
                padding={isMobileSize ? '120px 0' : '140px 0'}
                minHeight="100vh"
            >
                <SurveyContainer />
            </Template>
        </Layout>
    );
};

/**
 * 쿠키에 토큰없으면 인증 페이지로
 * @author Copotter
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
    if (!context.req.cookies.auth) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            },
        };
    }
    return { props: { auth: context.req.cookies.auth || null } };
};

export default SurveyPage;
