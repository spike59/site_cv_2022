import Nav from './nav';
import { Outlet } from 'react-router-dom';
const Layout = (props) => {
    return (
        <div>
            <Nav />
            <main>
                <Outlet />
            </main>
        </div>
    );
}
export default Layout