import { MdEmail } from "react-icons/md"
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5"
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
    return (
        <div className=" text-center" id="Footer">
            <div className="container-fluid d-flex justify-content-between" id="HeaderOfFooter">
                <div className="my-3">
                    <img src={"/img/Logo/LogoKayyDieund1-removebg-preview2.png"} alt="MyLogo" id="MyLogoFooter" />
                </div>
                <div>
                    <h4>Subscribe to newsletter?</h4>
                    <span className="input-group">
                        <span className="input-group-text">
                            <MdEmail />
                        </span>
                        <input type="email" className="form-control form-control-sm" id="EmailSuscriber" />
                        <button id="subscribeButton" className="btn btn-primary btn-sm">Subscribe</button>
                    </span>
                </div>
                <div id="mobileAppDownload">
                    <h4>Download our mobile app</h4>
                    <span className="btn-group ">
                        <button className="btn btn-secondary mx-1">
                            <IoLogoAppleAppstore />&nbsp;
                            Apple Store

                        </button>
                        <button className="btn btn-secondary mx-1">
                            <IoLogoGooglePlaystore />&nbsp;
                            Google Play Store
                        </button>
                    </span>
                </div>
            </div>
            <div id="bodyOfFooter" className="container-fluid d-flex justify-content-between pt-5">
                <div className="row">
                    <div className="me-2  col">
                        <h3>About us</h3>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Aut perspiciatis corrupti dolores adipisci eum, suscipit
                        </span>
                    </div>

                    <div className="mx-2 col">
                        <h3>Product</h3>
                        <ul>
                            <li>Overview</li>
                            <li>Features</li>
                            <li>Solutions</li>
                            <li>Tutorials</li>
                            <li>Pricing</li>
                            <li>Releases</li>
                        </ul>
                    </div>
                    <div className="mx-2 col">
                        <h3>Legal</h3>
                        <ul>
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Cookies</li>
                            <li>Licences</li>
                        </ul>
                    </div>
                    <div className="me-2 col">
                        <h3>Let us help you</h3>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Aut perspiciatis corrupti dolores adipisci eum, suscipit Lorem ipsum dolor sit
                        </span>
                    </div>
                    <div className="ms-2 col">
                        <h3>Our contacts</h3>
                        <h6>Address of official store :</h6>
                        <p>2500-3370  Av. Cheikh Anta Diop, Dakar</p>
                        <h6>Email :</h6>
                        <p>commercial@kayydieundstore.com</p>
                        <h6>Tel :</h6>
                        <ul>
                            <li>+221 77 777 77 77</li>
                            <li>+221 33 888 88 88</li>
                        </ul>
                        <h6>Social media</h6>
                        <div className="btn-group ">
                            <button className="btn">
                                <BsFacebook />

                            </button>
                            <button className="btn">
                                <BsTwitter />
                            </button>
                            <button className="btn">
                                <BsInstagram />
                            </button>
                            <button className="btn">
                                <BsLinkedin />
                            </button>
                            <button className="btn">
                                <BsGithub />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footerOfFooter">
                ©2022 All Rights Reserved,by @Babs_Joop.exe
            </div>
        </div>
    );
};

export default Footer;