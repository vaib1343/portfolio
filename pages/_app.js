import Navbar from '../components/shared/Navbar/Navbar';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
    return (
        <div className='w-[90%] m-auto font-spoc'>
            <Navbar />
            <ToastContainer />
            <div className='w-1/2 m-auto mb-10 mt-5'>
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default MyApp;
