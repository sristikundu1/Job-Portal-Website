import { BsFillPhoneFill,BsEnvelope,BsGeoAlt,BsTwitter, BsFacebook, BsLinkedin, BsGoogle } from "react-icons/bs";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#EBF3E8] text-base-content pt-10">
                <aside>
                <img className="w-12 " src="https://i.ibb.co/LNsTCdc/Logo1.jpg" alt="" />
                    <p className="folt-bold font-love text-2xl">DreamCatalyst</p>
                    <p className="font-bold text-xl">Most complete job portal</p>
                </aside>
               
                <nav className="space-y-3">
                    <header className="footer-title">Contact</header>
                    <a className="link link-hover flex justify-center items-center gap-3 font-medium"><BsGeoAlt></BsGeoAlt>Maple Street,City Center,Dhaka-1234</a>
                    <a className="link link-hover flex justify-center items-center gap-3 font-medium"><BsFillPhoneFill></BsFillPhoneFill>018743256789</a>
                    <a className="link link-hover flex justify-center items-center gap-3 font-medium"><BsEnvelope></BsEnvelope>dreamcatalyst@gmail.com</a>
                </nav>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover font-medium">Finding Jobs</a>
                    <a className="link link-hover font-medium">Posting Jobs</a>
                    <a className="link link-hover font-medium">Apply For Jobs</a>
                    <a className="link link-hover font-medium">Companies</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover font-medium">Terms of use</a>
                    <a className="link link-hover font-medium">Privacy policy</a>
                    <a className="link link-hover font-medium">Cookie policy</a>
                </nav>



            </footer>

            <div className="footer items-center p-4 bg-[#EBF3E8] text-neutral-content pb-10 px-11 pr-36">

                <aside className="items-center grid-flow-col">
                    <p className="text-[#1F1717] font-medium">Copyright © 2023 - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-black">
                    <button><BsTwitter></BsTwitter></button>
                    <button><BsFacebook></BsFacebook></button>
                    <button><BsLinkedin></BsLinkedin></button>
                    <button><BsGoogle></BsGoogle></button>
                </nav>

            </div>



        </div>
    );
};

export default Footer;