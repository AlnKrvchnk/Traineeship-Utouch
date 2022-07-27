import { Route, Routes } from 'react-router-dom';
import LoadingPage from '../components/pages/Loading';

const Loading = () => {
    return (
        <Routes>
            <Route path={'*'} element={<LoadingPage />} />
        </Routes>
    );
};

export default Loading;
