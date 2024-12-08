import { footerData } from "../../data/products";


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6">
            {/* Top Section */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Hotline Free 24/24</h3>
                    <p className="mb-2">{footerData.contact.hotline}</p>
                    <p className="mb-2">Add: {footerData.contact.address}</p>
                    <p>Email: <a href={`mailto:${footerData.contact.email}`} className="text-blue-400 hover:underline">{footerData.contact.email}</a></p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        {footerData.quickLinks.map((link, index) => (
                            <li key={index}><a href="#" className="hover:text-blue-400">{link}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Customer Service</h3>
                    <ul className="space-y-2">
                        {footerData.customerService.map((link, index) => (
                            <li key={index}><a href="#" className="hover:text-blue-400">{link}</a></li>
                        ))}
                    </ul>
                </div>

                {/* New Customers */}
                <div>
                    <h3 className="text-lg font-bold mb-4">New Customers</h3>
                    <ul className="space-y-2">
                        {footerData.newCustomers.map((link, index) => (
                            <li key={index}><a href="#" className="hover:text-blue-400">{link}</a></li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-center">
                <p className="text-sm text-gray-400">© 2024 AloShopify. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
