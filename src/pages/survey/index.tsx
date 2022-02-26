import type { NextPage } from 'next';
import { Layout, Template } from '../../components/layout';
import SurveyContainer from '../../components/survey/SurveyContainer';

const SurveyPage: NextPage = () => {
    return (
        <Layout showHeader={true} showFooter={true}>
            <Template>
                <SurveyContainer />
            </Template>
        </Layout>
    );
};

export default SurveyPage;
