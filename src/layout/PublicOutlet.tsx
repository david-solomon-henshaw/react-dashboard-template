import { Outlet, Navigate } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';

import { useAppSelector, useAppDispatch } from 'store/hooks';
import { toggleTheme } from 'store/reducers/util';
import Footer from 'components/Footer';

const PublicOutlet = () => {
    const dispatch = useAppDispatch();
    const { token } = useAppSelector((state) => state.user);
    const { theme } = useAppSelector((state) => state.util);

    return !token ? (
        <>
            <div
                onClick={() => dispatch(toggleTheme())}
                className="fixed right-6 top-4 select-none"
            >
                {theme === 'light' ? (
                    <FiMoon size="1.5rem" />
                ) : (
                    <FiSun size="1.5rem" />
                )}
            </div>
            <Outlet />
            <Footer />
        </>
    ) : (
        <Navigate to={'dashboard'} />
    );
};

export default PublicOutlet;
