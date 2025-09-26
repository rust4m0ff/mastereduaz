import Image from 'next/image';

const Footer = () => {
    return (
        <footer id="elaqe" className="bg-[#0168a7] text-white py-4 px-4 mt-8">
            <div className="container mx-auto flex flex-col-reverse gap-5 md:flex-row items-center justify-between">
                <p className="text-sm">© {new Date().getFullYear()}. Bütün hüquqlar qorunur.</p>
                <div className="flex items-center space-x-10">
                    <a href="https://www.instagram.com/master.edu.az?igsh=MWRhb2VleHllNTc1cw%3D%3D&utm_source=qr" aria-label="Instagram" className="hover:scale-110 transition">
                        {/* Instagram Icon (simple circle SVG) */}
                        <Image src="/insta.png" alt="Instagram" width={35} height={35} />
                    </a>
                    <a href="https://wa.me/994708751147" aria-label="WhatsApp" className="hover:scale-110 transition">
                        {/* WhatsApp Icon (simple phone SVG) */}
                        <Image src="/whatsapp.png" alt="WhatsApp" width={35} height={35} />
                    </a>
                    <a href="tel:+994708751147" aria-label="Phone" className="hover:scale-110 transition">
                        {/* Phone Icon (simple phone SVG) */}
                        <Image src="/phone.png" alt="Phone" width={35} height={35} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
