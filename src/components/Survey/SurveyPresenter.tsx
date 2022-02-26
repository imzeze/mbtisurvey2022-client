import { ExampleButton } from './SurveyStyle';

interface SurveyPresenterProps {
    data: any;
}

const SurveyPresenter = function ({ data }: SurveyPresenterProps) {
    return (
        <div>
            <ExampleButton />
        </div>
    );
};

export default SurveyPresenter;
