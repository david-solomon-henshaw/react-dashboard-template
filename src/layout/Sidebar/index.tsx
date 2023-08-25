// Redux
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { setSidebarOpen } from 'store/reducers/util';

// Icons
import Logo from '/logo.svg';

// Components
import SideBarItem from 'layout/Sidebar/SideBarItem';

import { menus } from './menus';

const Sidebar: React.FC = () => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector((state) => state.util.isSidebarOpen);

    return (
        <>
            <div
                className={`z-50 hidden lg:block fixed top-0 bottom-0 ${
                    isOpen ? 'w-72' : 'w-20'
                } duration-300 overflow-x-hidden border-r-[1px] bg-surface dark:bg-surface-dark border-line dark:border-line-dark`}
            >
                <div
                    className="pl-4 flex justify-start items-center cursor-pointer h-16 mb-6"
                    onClick={() => dispatch(setSidebarOpen(!isOpen))}
                >
                    <img className="w-12 mr-4" src={Logo} />
                    {isOpen && (
                        <div className="animate-fade-in">
                            <h4>Dashboard</h4>
                            <p className="caption">Simple and Fast</p>
                        </div>
                    )}
                </div>
                {menus.map((item) => (
                    <SideBarItem {...item} key={item.id} />
                ))}
            </div>
            <div
                className={`z-50 block lg:hidden overflow-hidden overflow-y-auto fixed top-0 bottom-0 left-0 bg-[#00000090] ${
                    isOpen ? 'w-full' : 'w-0'
                }`}
                onClick={() => dispatch(setSidebarOpen(false))}
            >
                <div
                    className={`relative ${
                        isOpen ? 'max-w-xs' : 'max-w-0'
                    }  bg-surface dark:bg-surface-dark min-h-[100vh] duration-300`}
                >
                    <div
                        className="sticky bg-surface dark:bg-surface-dark top-0 pl-4 flex justify-start items-center cursor-pointer h-16 mb-6"
                        onClick={() => dispatch(setSidebarOpen(!isOpen))}
                    >
                        <img className="w-12 mr-4" src={Logo} />
                        <div className="animate-fade-in">
                            <h4>Dashboard</h4>
                            <p className="caption">Simple and Fast</p>
                        </div>
                    </div>
                    <div>
                        {menus.map((item) => (
                            <SideBarItem {...item} isMobile key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
