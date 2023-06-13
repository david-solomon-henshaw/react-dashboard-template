import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import SplashPage from 'pages/SplashPage';

const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ForgetPasswordPage = lazy(() => import('pages/ForgetPasswordPage'));

const Dashboard = lazy(() => import('pages/Dashboard'));
const SamplePage = lazy(() => import('pages/SamplePage'));
const SetPassword = lazy(() => import('pages/SetPassword'));

const PublicOutlet = lazy(() => import('layout/PublicOutlet'));
const PrivateOutlet = lazy(() => import('layout/PrivateOutlet'));

import { useAppSelector } from 'store/hooks';

import 'react-toastify/dist/ReactToastify.css';

function App() {
    const theme = useAppSelector((state) => state.util.theme);

    useEffect(() => {
        if (theme === 'light') {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    }, [theme]);

    return (
        <div className="max-w-[1920px] h-screen m-auto animate-fade-in-up">
            <ToastContainer />
            <BrowserRouter>
                <Suspense fallback={<SplashPage />}>
                    <Routes>
                        <Route path="/auth" element={<PublicOutlet />}>
                            <Route
                                path=""
                                element={<Navigate to={'login'} />}
                            />
                            <Route path="login" element={<LoginPage />} />
                            <Route path="register" element={<RegisterPage />} />
                            <Route
                                path="forget-password"
                                element={<ForgetPasswordPage />}
                            />
                            <Route
                                path="user/set-password"
                                element={<SetPassword />}
                            />
                        </Route>
                        <Route path="" element={<PrivateOutlet />}>
                            <Route path="" element={<Dashboard />} />
                            <Route
                                path="sample-page"
                                element={<SamplePage />}
                            />
                            <Route
                                path="sample-page-2"
                                element={<SamplePage />}
                            />
                            <Route path="typography" element={<SamplePage />} />
                            <Route path="buttons" element={<SamplePage />} />
                            <Route path="loaders" element={<SamplePage />} />
                        </Route>
                        <Route path="*" element={<Navigate to={'/'} />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
