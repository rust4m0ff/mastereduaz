import Image from "next/image"

const FloatButton = () => {
    return (
        <div className="fixed bottom-10 right-10 z-10 flex items-center space-x-10">
            <a href="https://wa.me/994708751147" aria-label="WhatsApp" className="hover:scale-110 transition bg-[#57d063] p-4 rounded-full">
                {/* WhatsApp Icon (simple phone SVG) */}
                <Image src="/whatsapp.png" alt="WhatsApp" width={45} height={45} />
            </a>
        </div>
    )
}

export default FloatButton