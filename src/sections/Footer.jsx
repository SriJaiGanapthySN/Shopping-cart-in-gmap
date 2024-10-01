import {

    copyrightSign,
    facebook,
    instagram,
    support,
    twitter
} from '../assets/icons/index'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-lg mb-4">© ShopOn.in . All rights reserved.</p>
                <div className="flex justify-center mb-4">
                    <a href="/about" className="mx-4 hover:underline">About Us</a>
                    <a href="/contact" className="mx-4 hover:underline">Contact</a>
                    <a href="/privacy" className="mx-4 hover:underline">Privacy Policy</a>
                    <a href="/terms" className="mx-4 hover:underline">Terms of Service</a>
                </div>
                <div>
                    <a href="https://facebook.com" className="mx-2">
                        <img src={facebook} alt="Facebook" className="w-6 h-6 inline" />
                    </a>
                    <a href="https://twitter.com" className="mx-2">
                        <img src={twitter} alt="Twitter" className="w-6 h-6 inline" />
                    </a>
                    <a href="https://instagram.com" className="mx-2">
                        <img src={instagram} alt="Instagram" className="w-6 h-6 inline" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
