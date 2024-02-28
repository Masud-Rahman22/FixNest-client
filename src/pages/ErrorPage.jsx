import Lottie from 'lottie-react';
import ErrorAnimation from '../../public/assets/errorPage/Animation - 1709102540998.json'

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='w-2/5'>
            <Lottie animationData={ErrorAnimation}></Lottie>
        </div>
        </div>
    );
};

export default ErrorPage;