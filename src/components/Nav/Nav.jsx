import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { links } from '../../data/products';
import { SlHeart } from "react-icons/sl";
import { useExtendedCart } from "../../data/use-react-cart";

function Nav() {
    const {
        cartItems,
        wishlistItems,
    } = useExtendedCart();

    console.log(wishlistItems);

    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState('');

    return (
        <div className='sticky top-0 z-50' tabIndex={0}>
            <div className='bg-white w-full relative px-16'>
                <div className='flex items-center justify-between'>
                    <div className='z-50 md:w-auto w-full flex justify-between items-center py-4'>
                        <Link to={'/'}>
                            <h2 className='md:cursor-pointer text-3xl font-medium'>MORATA</h2>
                        </Link>
                        <div onClick={() => setOpen(!open)} className='text-2xl md:hidden'>
                            {open ? <IoClose /> : <FaBars />}
                        </div>
                    </div>
                    <ul className='md:flex hidden uppercase items-center gap-8 font-[poppins]'>
                        <Link to={'/'}><li className=' text-[#222222] font-medium py-7 px-3 inline-block cursor-pointer hover:text-teal-600'>
                            Home
                        </li></Link>
                        {links.map((link, idx) => (
                            <div key={idx} className='px-3 text-left md:cursor-pointer group'>
                                <div className='flex items-center gap-2 group-hover:text-teal-600'>
                                    <Link to={link.link}><li className=' text-[#222222] font-medium py-7 group-hover:text-teal-600'>
                                        {link.name}
                                    </li></Link>
                                    {link.subMenu && <><FaAngleUp className='group-hover:block hidden' />
                                        <FaAngleDown className='group-hover:hidden' /></>}
                                </div>
                                {link.subMenu && (
                                    <div>
                                        <div className='absolute left-0 top-20 hidden group-hover:md:block hover:md:block'>
                                            <div className='bg-white px-8 w-screen grid grid-cols-4 gap-4'>
                                                {link.children?.map((child, childIdx) => (
                                                    <div key={childIdx}>
                                                        <li className='text-lg font-semibold'>{child.head}</li>
                                                        {child.subLink?.map((subLink, subIdx) => (
                                                            <div key={subIdx}>
                                                                <li className='text-base text-gray-600 hover:text-blue-700 my-2'>{subLink.name}</li>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </ul>
                    <div className="hidden gap-6 items-center md:flex">
                        <Link to="/wishlist" className="flex items-center relative">
                            <SlHeart className="h-5 w-6 hover:text-blue-400 transition duration-300" />
                            {wishlistItems.length > 0 && (
                                <span className='absolute -top-1 -right-2 bg-red-600 text-xs text-white w-4 h-4 rounded-full flex justify-center items-center'>
                                    {wishlistItems.length}
                                </span>
                            )}
                        </Link>
                        <Link to="/cart" className="flex items-center relative">
                            <FiShoppingCart className="h-5 w-6 hover:text-blue-400 transition duration-300" />
                            {cartItems.length > 0 && (
                                <span className='absolute -top-1 -right-2 bg-red-600 text-xs text-white w-4 h-4 rounded-full flex justify-center items-center'>
                                    {cartItems.length}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile Nav */}
                    <ul className={`${open ? "left-0" : "left-[-100%]"} md:hidden absolute top-0 w-full h-full bottom-0 duration-500`}>
                        <div className='bg-white pl-4 py-24'>
                            <li className='px-3 pb-7 text-left text-lg font-medium md:cursor-pointer'>Home</li>
                            {links.map((link, idx) => (
                                <div key={idx}>
                                    <div className='px-3 text-left md:cursor-pointer group'>
                                        <div onClick={() => dropdown !== link.name ? setDropdown(link.name) : setDropdown('')} className='flex justify-between items-center w-full'>
                                            <li className='py-7 text-lg font-medium'>{link.name}</li>
                                            {dropdown === link.name ? <FaAngleUp /> : <FaAngleDown />}
                                        </div>
                                        {link.subMenu && (
                                            <div className={`${dropdown === link.name ? "block" : "hidden"}`}>
                                                {link.children.map((child, childIdx) => (
                                                    <div key={childIdx}>
                                                        <li className='text-lg py-4 pl-7 pr-5 md:pr-0 font-semibold'>{child.head}</li>
                                                        {child.subLink?.map((subLink, subIdx) => (
                                                            <div key={subIdx}>
                                                                <li onClick={() => setOpen(!open)} className='text-base text-gray-600 hover:text-blue-700 py-3 pl-14'>{subLink.name}</li>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <button className='block md:hidden bg-blue-600 px-4 py-2 rounded-full text-white'>Get Started</button>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Nav;
