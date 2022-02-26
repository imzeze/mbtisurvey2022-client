import type { NextPage } from 'next';
import Image from 'next/image';
import Button from '../components/Common/Button';
import Input from '../components/Common/Input';
import RadioButton from '../components/Common/RadioButton';
import SelectBox from '../components/Common/SelectBox';

import { bottomArrowIcon } from '../assets/icons';

const Home: NextPage = () => {
    return (
        <div
            style={{
                background: '#333',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <Button>시작합니다!</Button>
            <Input />
            <RadioButton name="ssibal">1~3 개월</RadioButton>
            <RadioButton name="ssibal">3~6 개월</RadioButton>
            <SelectBox>
                <option value="test">asd</option>
                <option value="test">asd</option>
                <option value="test">asd</option>
                <option value="test">asd</option>
                <option value="test">asd</option>
                <option value="test">asd</option>
            </SelectBox>
            <div
                style={{ position: 'relative', width: '24px', height: '24px' }}
            >
                <Image
                    src={bottomArrowIcon}
                    alt="bottomArrowIcon"
                    layout="fill"
                />
            </div>
        </div>
    );
};

export default Home;
