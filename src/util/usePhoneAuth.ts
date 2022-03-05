import { initializeApp } from 'firebase/app';

export const useFirebaseAuth = () => {
    const firebaseConfig = {
        apiKey: 'AIzaSyC6Z73JtrHU7OzYU-P5-LLqtJbK1B0VYeQ',
        authDomain: 'nsm-mbtisurvey2022.firebaseapp.com',
        projectId: 'nsm-mbtisurvey2022',
        storageBucket: 'nsm-mbtisurvey2022.appspot.com',
        messagingSenderId: '789562507530',
        appId: '1:789562507530:web:ac9252ffc1ee915eaa3af3',
    };

    const app = initializeApp(firebaseConfig);

    return {
        app,
    };
};
