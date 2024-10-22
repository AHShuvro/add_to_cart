import { Outlet } from 'react-router-dom'
import Header from './Header'
import CartTab from './CartTab'

function Layout() {
    return (
        <div className='bg-orange-100'>
            <main className='w-[1200px] max-w-full m-auto px-5'>
                <Header />
                <Outlet />
            </main>



        </div>
    )
}

export default Layout