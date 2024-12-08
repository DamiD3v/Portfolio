/* CSS */
import "../index.css";

/* Dependencies */
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* import copy from 'clipboard-copy'; */

/* Icons */
import { faMoon, faBriefcase, faStar, faArrowUpRightFromSquare, faEnvelope, faPaperPlane, faCopy, faDownload, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import sunThemeIcon from '../assets/sunThemeIcon.svg'
import moonThemeIcon from '../assets/moonThemeIcon.svg'
import tailwindIcon from "../assets/CompaniesIcons/tailwind-svgrepo-com.svg";
import HTML5Icon from "../assets/CompaniesIcons/html-5-svgrepo-com.svg";
import MongoDBIcon from "../assets/CompaniesIcons/mongo-svgrepo-com.svg";
import reactIcon from "../assets/CompaniesIcons/react-svgrepo-com.svg";
import cssIcon from "../assets/CompaniesIcons/css_svg_repo.svg";
import framerIcon from "../assets/CompaniesIcons/Framer_light.svg";
import framerDarkIcon from "../assets/CompaniesIcons/Framer_dark.svg";
import ThreeJSDarkIcon from '../assets/CompaniesIcons/Three.js_dark.svg'
import ThreeJSIcon from '../assets/CompaniesIcons/Three.js_light.svg'
import BlenderIcon from '../assets/CompaniesIcons/BlenderIcon.svg'
import LanguageIcon from '../assets/LanguageIcon.svg'
import LanguageDarkIcon from '../assets/LanguageDarkIcon.svg'

/* Images */
import HenrySquareIcon from '../assets/HenrySquareIcon.png'
import ProfilePic from '../assets/ProfilePic.jpg'
import MuniaLoginPic from '../assets/MuniaLoginPic.jpg'
import HenryTalentIcon from '../assets/HenryTalentIcon.jpg'
import ClimateDuckyScreenshot from '../assets/ClimateDuckyScreenshot.png'
import HenryCertificate from '../assets/Henry certificate.jpg'

/* Videos */
import IngeniumFinishedTrailer from '../assets/IngeniumWebVideo/IngeniumFinishedTrailer.webm'

/* PDF */
import Resume from '../assets/Resume.pdf'

/* Components */
import TooltipButton from "../components/TooltipButton";
import LanguageToggleButton from "../components/LanguageToggleButton";


const Home = () => {
    /* Language toggle */
    const [language, setLanguage] = useState('es'); // Idioma por defecto es Español
    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
    };

    /* Color theme */
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
            return "dark";
        }
        return "light";
    })

    /* Navbar scroll animation */
    const [scrollPast, setScrollPast] = useState(false);

    /* const [tooltipText, setTooltipText] = useState(`${language === 'en' ? "Click to copy my email" : 'Haz click para copiar mi email'}`); */
    /* const [showTooltip, setShowTooltip] = useState(false); */

    /* Correo Damián */
    /* const copiedText = 'marcosdamian054@gmail.com'; */

    /* Función scroll navbar */
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 244) {
                setScrollPast(true);
            } else {
                setScrollPast(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").classList.add("dark");
        } else {
            document.querySelector("html").classList.remove("dark");
        }
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    /* Animación barra de navegación scroll */
    const bounceInStyle = {
        animation: 'bounceIn 1s forwards',
    };
    /* const textToClipboard = () => {
        copy(copiedText)
            .then(() => {
                setTooltipText(language === 'en' ? "Email copied successfully!" : 'Email copiado exitosamente');
                setTimeout(() => {
                    setTooltipText(language === 'en' ? 'Click to copy my email' : 'Haz click para copiar mi email');
                }, 3000);
            })
            .catch((error) => {
                console.error('Error copying to clipboard: ', error);
                setTooltipText(language === 'en' ? 'Error copying email' : 'Error al copiar el email');
                setTimeout(() => {
                    setTooltipText(language === 'en' ? 'Click to copy my email' : 'Haz click para copiar mi email');
                }, 3000);
            });
    }; */

    return (
        <div className="flex flex-col items-center">
            {/* Navbar start */}
            <div className="w-full flex flex-col justify-center sticky top-0 z-10">
                {/* Navbar content container */}
                <header className={`shrink-0 flex flex-row items-center justify-between py-1 max-phone:py-[4%] px-auto z-20 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg`}>


                    {/* Navbar profile pic & name logo start */}
                    <div style={scrollPast ? bounceInStyle : null} className={`tablet:ml-10 flex items-center font-semibold text-lg text-center text-slate-600 dark:text-slate-300 transform transition-all duration-400 ${scrollPast ? '' : 'opacity-0'}`}>

                        {/* Navbar profile pic circle start */}
                        <div className={`ml-2 shrink-0 flex w-12 h-12 mr-3 relative opacity-0 items-center dark:bg-gray-700/60 rounded-full shadow-sm shadow-indigo-200 border-black overflow-hidden dark:shadow-indigo-300 dark:shadow-sm dark:bg-none dark:border-black  ${scrollPast ? 'opacity-100' : 'opacity-0'}`}>
                            <span className="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;">
                                {/* Navbar profile pic start */}
                                <img className="rounded-full drop-shadow-2xl" src={ProfilePic} />
                                {/* Navbar profile pic end */}
                            </span>
                        </div>
                        {/* Navbar profile pic circle end */}

                        {/* Navbar profile pic name start */}
                        <h2 className="text-start max-phone:text-[5vw] font-bold">Damián Medina <span className="font-normal">alias</span> "DamiDev"</h2>
                        {/* Navbar profile pic name end */}
                    </div>
                    {/* Navbar profile pic logo end */}

                    {/* Navbar profile theme & Language button start */}
                    <div className="flex items-center mr-[3vw]">
                        <div className="hidden max-phone:flex max-phone:items-center gap-[3vw]">
                            <button
                                onClick={toggleLanguage}
                                className={`py-2 px-2 phone:py-5 flex items-end rounded gap-4 ${theme === 'dark' ? "active:bg-slate-700" : "active:bg-slate-200"} outline-none`}
                            >
                                {theme === 'dark' ?
                                    <img className="h-[10vw]" src={LanguageIcon} alt="Dark theme toggle button" />
                                    :
                                    <img className="h-[10vw]" src={LanguageDarkIcon} alt="Light theme toggle button" />
                                }
                            </button>
                            <button
                                className={`tablet:mr-10 py-[1vw] px-2 rounded max-phone:py-[0.2vw] flex items-end gap-4 ${theme === 'dark' ? "active:bg-slate-700" : "active:bg-slate-200"} outline-none`}
                                onClick={handleChangeTheme}
                            >
                                {theme === 'dark' ?
                                    <div className="flex-nowrap dark:block">
                                        <img className="h-[14vw]" src={sunThemeIcon} alt="Clear theme button" />
                                    </div>
                                    :
                                    <div className="flex-nowrap dark:block">
                                        <img className="h-[14vw]" src={moonThemeIcon} alt="Clear theme button" />
                                    </div>
                                }
                            </button>
                        </div>

                        {/* Botones normales que solo se muestran cuando la sidebar está cerrada */}
                        <div className="max-phone:hidden flex gap-[1vw]">

                            <button
                                onClick={toggleLanguage}
                                className={`py-0 px-2 phone:py-5 flex items-end gap-4 rounded  ${theme === 'dark' ? "hover:bg-slate-700 active:bg-slate-600" : "hover:bg-slate-300 active:bg-slate-200"} outline-none`}
                            >
                                {theme === 'dark' ?
                                    <img className="h-[3vw]" src={LanguageIcon} alt="Dark theme toggle button" />
                                    :
                                    <img className="h-[3vw]" src={LanguageDarkIcon} alt="Light theme toggle button" />
                                }
                            </button>
                            <button
                                className={`tablet:mr-10 py-[1vw] rounded px-2 max-phone:py-5 flex items-end ${theme === 'dark' ? "hover:bg-slate-700 active:bg-slate-600" : "hover:bg-slate-300 active:bg-slate-200"} outline-none`}
                                onClick={handleChangeTheme}
                            >
                                {theme === 'dark' ?
                                    <div className="flex-nowrap dark:block">
                                        <img className="h-[4vw]" src={sunThemeIcon} alt="Clear theme button" />
                                    </div>
                                    :
                                    <div className="flex-nowrap dark:block">
                                        <img className="h-[4vw]" src={moonThemeIcon} alt="Clear theme button" />
                                    </div>
                                }
                            </button>
                        </div>

                    </div>
                    {/* Navbar profile theme & Language button end */}

                </header>
                {/* Navbar content container end */}
            </div >
            {/* Navbar end */}


            {/* Main start */}
            <div className={` max-w-4xl flex-col mb-5 flex gap-10 overflow-x-hidden overflow-y-hidden`}>
                <main className="flex flex-col gap-12">

                    {/* Hero presentation start */}
                    <section className="px-[8vw] flex flex-col tablet:flex-column items-center gap-5 shrink-0" >

                        {/* Profile Pic */}
                        <div className="shrink-0 relative max-phone:w-[45vw] max-phone:h-[45vw] w-[35%] h-[35%] bg-none shadow-lg shadow-indigo-300 rounded-full overflow-hidden dark:shadow-indigo-300 dark:shadow-lg dark:bg-none">
                            <span>
                                <img className="aspect-square" alt="Profile picture" src={ProfilePic} />
                            </span>
                        </div>
                        {/* Profile Pic */}

                        {/* About presentation */}
                        <div className="flex flex-col items-center gap-3">

                            {/* Presentation title */}
                            <div className="flex flex-col items-center gap-2 max-w-[90%] mt-1">
                                <h1 className="shrink-0 text-3xl max-phone:text-[9vw] my-6 text-center font-bold text-slate-600 dark:text-slate-100 max-phone:leading-[10vw]">Damián Medina "DamiDev"</h1>
                                <p className="shrink-0 mt-3 text-center hyphens-auto text-slate-700 text-2xl max-phone:text-[9vw] dark:text-slate-200 max-w-full font-Jersey10PixelFont">{language === 'en' ? 'Welcome!' : '¡Bienvenidos!'}</p>
                                <p className="shrink-0 text-center text-slate-700 text-lg max-phone:text-[6vw] max-phone:font-light dark:text-slate-300 max-w-full w-full h-fit rounded-2xl max-phone:mt-5 max-phone:mb-10 max-phone:leading-[8vw] max-phone:tracking-wide mt-2">{language === 'en' ? 'I am passionate about web development, focused on the integration of social networks' : 'Soy un apasionado del desarrollo de páginas web, enfocado en la integración de redes sociales'}</p>
                            </div>
                            {/* Presentation title */}

                            {/* Social media & certificates Buttons start */}
                            <div className="flex gap-3 mt-3 -mb-10 w-[90%] h-fit flex-wrap max-phone:mt-4 max-phone:-mb-5">
                                <TooltipButton
                                    link="https://www.linkedin.com/in/medina-marcos-developer/"
                                    mainText="Linkedin"
                                    tooltipSpan={language === 'en' ? 'Check my profile into one of the most important job boards in the world' : "Revisa mi perfil laboral"}
                                    linkedinIcon={faLinkedin}
                                    tooltipText="dark:text-blue-400 text-blue-500 font-bold"
                                    tooltipBackground="dark:bg-gray-800 dark:bg-none bg-white"
                                    tooltipBorder="dark:border-blue-400 border-blue-500 border-2"
                                    buttonTextColor="dark:text-blue-500 text-blue-500"
                                    buttonBackgroundColor="dark:bg-gray-800 bg-white"
                                    buttonBorderColor="dark:border-gray-700 border-gray-200 max-phone:dark:border-blue-400 max-phone:dark:border-blue-400 max-phone:border-blue-400"
                                    hoverButtonBorderColor="dark:hover:border-blue-400 hover:border-blue-400 active:border-blue-300"
                                    pointerBackground="dark:bg-gray-800 bg-blue-300"
                                    pointerBorder="dark:border-blue-500 border-2 border-blue-400"
                                    buttonXPadding="px-6 max-phone:py-[10%]"
                                    buttonHeight="h-14 max-phone:h-[full]"
                                    buttonFlexProps="justify-center items-center grow"
                                />
                                <TooltipButton
                                    link='https://cert.efset.org/bHumkJ'
                                    mainText={language === 'en' ? 'C1 English proficiency certificate' : 'Certificado de nivel C1 de Inglés'}
                                    tooltipSpan={language === 'en' ? "Here is my English proficiency certificate!" : "¡Acá está mi certificado de Inglés C1!"}
                                    henryTalent=""
                                    henrySquare=""
                                    tooltipText="dark:text-gray-300 text-gray-700 font-bold"
                                    tooltipBackground="dark:bg-gray-800 dark:bg-none bg-white"
                                    tooltipBorder="dark:border-gray-300 border-gray-600 border-2"
                                    buttonTextColor="dark:text-gray-300 text-gray-700"
                                    buttonBackgroundColor="dark:bg-gray-800 bg-white"
                                    buttonBorderColor="dark:border-gray-700 border-gray-200 border-2"
                                    hoverButtonBorderColor="dark:hover:border-gray-300 hover:border-black active:border-gray-300 max-phone:dark:border-gray-500 max-phone:border-gray-500"
                                    pointerBackground="dark:bg-gray-800 bg-gray-100"
                                    pointerBorder="dark:border-gray-400 border-gray-600 border"
                                    buttonXPadding="px-6 max-phone:py-[10%]"
                                    buttonHeight="h-14"
                                    buttonFlexProps="justify-center items-center  grow"
                                />
                                <TooltipButton
                                    link="https://github.com/DamiD3v"
                                    mainText="Github"
                                    tooltipSpan={language === 'en' ? 'Click here if you are a developer ;)' : "Click acá si sos un desarrollador"}
                                    githubIcon={faGithub}
                                    tooltipText="dark:text-purple-400 text-purple-500 font-bold"
                                    tooltipBackground="dark:bg-gray-800 dark:bg-none bg-white"
                                    tooltipBorder="dark:border-purple-400 border-purple-500 border-2"
                                    buttonTextColor="dark:text-purple-500 text-purple-600"
                                    buttonBackgroundColor="dark:bg-gray-800 bg-white"
                                    buttonBorderColor="dark:border-gray-700 border-gray-200 max-phone:dark:border-purple-400 max-phone:border-purple-400"
                                    hoverButtonBorderColor="dark:hover:border-purple-400 hover:border-purple-400 active:border-purple-300"
                                    pointerBackground="dark:bg-gray-800 bg-purple-300"
                                    pointerBorder="dark:border-purple-500 border-2 border-purple-400"
                                    buttonXPadding="px-6 max-phone:py-[10%]"
                                    buttonHeight="h-14"
                                    buttonFlexProps="justify-center items-center grow"
                                />
                                <TooltipButton
                                    link={HenryCertificate}
                                    mainText={language === 'en' ? 'Henry graduation certificate' : 'Certificado de graduación de Henry'}
                                    tooltipSpan={language === 'en' ? "Here is my Full-Stack developer certificate!" : "¡Acá está mi certificado de desarrollador web Full-Stack!"}
                                    henryTalent={HenryTalentIcon}
                                    henrySquare={HenrySquareIcon}
                                    tooltipText="dark:text-yellow-300 text-gray-700 font-bold"
                                    tooltipBackground="dark:bg-gray-800 dark:bg-none bg-white"
                                    tooltipBorder="dark:border-yellow-300 border-gray-600 border-2"
                                    buttonTextColor="dark:text-yellow-300 text-gray-900"
                                    buttonBackgroundColor="dark:bg-gray-800 bg-white"
                                    buttonBorderColor="dark:border-gray-700 border-gray-200 border-2 max-phone:dark:border-yellow-300 max-phone:border-yellow-300"
                                    hoverButtonBorderColor="dark:hover:border-yellow-300 hover:border-black active:border-yellow-300"
                                    pointerBackground="dark:bg-gray-800 bg-yellow-100"
                                    pointerBorder="dark:border-yellow-400 border-gray-600 border"
                                    buttonXPadding="px-6 max-phone:py-[10%]"
                                    buttonHeight="h-14"
                                    buttonFlexProps="justify-center items-center  grow"
                                />
                                <button className="relative inline-flex max-phone:w-full max-phone:h-[20vw] h-16 w-full active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6100ff_0%,#9100ffea_50%,#cb00ff_100%)]">
                                    </span>
                                    <span className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-transparent px-7 text-[1.3vw] max-phone:text-[5vw] font-medium text-white backdrop-blur-3xl gap-4 undefined tracking-tight leading-[5vw]">
                                        <a
                                            className="[filter:drop-shadow(0px_2px_1px_#999999)]"
                                            href={`https://drive.google.com/file/d/1MLKcXyPlY6fpJL0E3nKLgOqVFGGkPNgP/view?usp=sharing`}
                                            target="_blank"
                                        >
                                            {language === 'en' ? "Open my resume (PDF)" : "Mirá mi CV (PDF)"}
                                        </a>
                                        <FontAwesomeIcon icon={faDownload} />
                                    </span>
                                </button>
                            </div>
                            {/* Social media & certificate Buttons end */}

                            {/* Language button start */}
                            <div className="w-[90%] mt-10 max-phone:mt-5">
                                <LanguageToggleButton toggleLanguage={toggleLanguage} language={language} />
                            </div>
                            {/* Language button end */}
                        </div>
                        {/* About presentation */}
                    </section>
                    {/* Hero presentation end */}
                    <hr className="min-w-max whitespace-nowrap border border-dotted border-gray-300 dark:border-gray-600 rounded-md" />

                    {/* Experience section start */}
                    <section className="px-[8vw] w-full flex flex-col items-center shrink-0 mt-3 mb-3" id="hero-section">

                        {/* Experience section title start */}
                        <header className="flex shrink-0 font-bold text-4xl max-phone:text-[9vw] underline underline-offset-4 decoration-solid text-indigo-400 dark:text-gray-100 mb-12 max-phone:mb-1 max-phone:mx-0 gap-4 items-end">
                            <h2>{language === 'en' ? 'My experience' : 'Mi experiencia'}</h2>
                            <FontAwesomeIcon className="scale-110" icon={faBriefcase} />
                        </header>
                        {/* Experience section title end */}

                        {/* Experience section text start */}
                        <div className="shrink-0  flex flex-col gap-10">
                            <div className="flex flex-col gap-5 pt-8">

                                {/* Munia experience */}
                                {/* Experience Job title start */}
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-lg max-phone:text-[7vw] font-semibold text-slate-700 dark:text-slate-200 max-phone:leading-[10vw] max-phone:tracking-normal mb-[3vw]">{language === 'en' ? 'Front-End Developer • Munia - Mental and Emotional Health at Work' : 'Desarrollador web Frontend • Munia - Salud Mental y Emocional en el Trabajo'}</h2>
                                    <p className="text-sm max-phone:text-[6vw] text-slate-500 dark:text-slate-400">Sept. 2023 - Nov. 2023</p>
                                </div>
                                {/* Experience Job title end */}


                                {/* Experience Job description */}
                                <ul className="list-disc flex flex-col gap-2 ml-8 mb-12 text-slate-700 dark:text-gray-300 text-md max-phone:text-[5vw]">
                                    <li>{language === 'en' ? 'Create a view to be able to view and edit the information of each provider, such as adding the services they offer, their time availability, and their professional documents, among others' : 'Crea una vista para poder visualizar y editar la información de cada proveedor, como agregar los servicios que ofrecen, su disponibilidad horaria, sus documentos profesionales, entre otros'}</li>
                                    <li>{language === 'en' ? 'Plan and carry out the development of a table that will allow comments to be displayed effectively on the platform' : 'Planificar y llevar a cabo el desarrollo de una tabla que permita visualizar de manera efectiva los comentarios en la plataforma'}</li>
                                    <li>{language === 'en' ? 'Conditional rendering based on dynamic routes and user type, using Redux toolkit, according to the role of each user, and React-Router-DOM' : 'Representación condicional basada en rutas dinámicas y tipo de usuario, utilizando el kit de herramientas Redux según el rol de cada usuario y React-Router-DOM'}</li>
                                    <li>{language === 'en' ? 'Planning, design and development of components made with ReactJs, Material UI and Sass' : 'Planificación, diseño y desarrollo de componentes realizados con ReactJs, Material UI y Sass'}</li>
                                </ul>
                                {/* Experience Job description */}

                                {/* Ingenium experience */}
                                {/* Experience Job title start */}
                                <div className="flex flex-col gap-1 ">
                                    <h2 className="text-lg max-phone:text-[7vw] font-semibold text-slate-700 dark:text-slate-200 max-phone:leading-[10vw] max-phone:tracking-normal mb-[3vw]">{language === 'en' ? 'Front-End Developer • Ingenium - Financial management and administration' : 'Desarrollador web Frontend • Ingenium - Gestión y administración financiera'}</h2>
                                    <p className="text-sm max-phone:text-[6vw] text-slate-500 dark:text-slate-400">Sept. 2024 - Nov. 2024</p>
                                </div>
                                {/* Experience Job title end */}


                                {/* Experience Job description */}
                                <ul className="list-disc flex flex-col gap-2 ml-8 text-slate-700 dark:text-gray-300 text-md max-phone:text-[5vw]">
                                    <li>{language === 'en' ? 'Design and creation of the company logo, "Ingcoin", using Blender to create a detailed 3D model, incorporating the company\'s slogan and year of foundation' : 'Diseño y creación del logo de la empresa, "Ingcoin", utilizando Blender para crear un modelo 3D detallado, incorporando el eslogan de la empresa y el año de fundación'}</li>
                                    <li>{language === 'en' ? 'Develop the main landing page using React.js, Framer-Motion, and TailwindCSS, ensuring an intuitive and modern user experience that reflects the company\'s branding' : 'Desarrollar la página de inicio principal utilizando React.js, Framer-Motion, y TailwindCSS, garantizando una experiencia de usuario intuitiva y moderna que refleje la imagen de la empresa'}</li>
                                    <li>{language === 'en' ? 'Integrate a responsive design across the website to optimize its functionality on various screen sizes, enhancing accessibility and user interaction' : 'Integrar un diseño responsive en todo el sitio web para optimizar su funcionalidad en diferentes tamaños de pantalla, mejorando la accesibilidad y la interacción del usuario'}</li>
                                    <li>{language === 'en' ? 'Optimize website loading times and performance by applying best practices in code structure and asset management, ensuring smooth navigation' : 'Optimizar los tiempos de carga del sitio web y su rendimiento aplicando las mejores prácticas en la estructura del código y gestión de recursos, garantizando una navegación fluida'}</li>
                                </ul>

                                {/* Experience Job description */}

                            </div>
                        </div>
                        {/* Experience section text end */}
                    </section>
                    {/* Experience section end*/}
                    <hr className="px-10 min-w-max whitespace-nowrap border border-dotted border-gray-300 dark:border-gray-600 rounded-md" />

                    {/* Projects section start */}
                    <section className="w-full max-phone:w-[fit] flex flex-col items-center mt-2">


                        {/* Projects section title */}
                        <header className="flex font-bold text-center underline underline-offset-4 text-4xl max-phone:text-[9vw] text-indigo-400 dark:text-gray-100 mb-12 max-phone:mb-8 max-phone:pl-3 max-phone:min-w-full max-phone:justify-center max-phone:px-0 items-center gap-3">
                            <h2>{language === 'en' ? 'My projects' : 'Mis proyectos'}</h2>
                            <FontAwesomeIcon icon={faStar} className="scale-110" />
                        </header>
                        {/* Projects section title */}


                        {/* My projects */}
                        <div className="w-full max-tablet:w-[80%] max-phone:w-[80%] flex flex-col items-center gap-10 max-phone:text-[5vw]">

                            {/* My projects container */}
                            <div className="grid gap-10">


                                {/* Munia project container*/}
                                <article className="relative flex flex-col justify-between w-full mt-4 max-phone:mb-6">
                                    {/* Munia project description */}
                                    <div className="flex flex-col items-center">
                                        <h2 className="text-gray-700 mr-2 dark:text-gray-200 text-2xl max-phone:text-[7.5vw] text-center font-bold">{language === 'en' ? 'Munia sessions 1:1' : 'Munia Sesiones 1:1'}</h2>
                                        <p className="text-slate-400 dark:text-slate-200 text-center mt-5">{language === 'en' ? 'The web app enables health professionals from "Munia.co" to connect with employees of partnered companies via Zoom for virtual sessions and diagnoses' : 'La aplicación web permite a los profesionales de la salud de “Munia.co” conectarse con empleados de empresas asociadas a través de Zoom para sesiones y diagnósticos virtuales'}</p>
                                    </div>
                                    {/* Munia project description */}

                                    {/* Munia project technologies icons */}
                                    <div className="flex flex-col mt-1.5 justify-center items-center pt-3 pb-6 mb-6">
                                        <p className="text-slate-900 dark:text-slate-400 mb-2 mt-2">{language === 'en' ? "(Web tech stack used into the project)" : '(Tecnologías web utilizadas en el proyecto)'}</p>
                                        <div className="flex flex-row items-center gap-1">
                                            <div className="relative group/tooltip">
                                                <img src={HTML5Icon} className="w-8 max-phone:w-[11vw] max-phone:h-[12vw]" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">HTML</span>
                                            </div>
                                            <div className="relative group/tooltip">
                                                <img src={tailwindIcon} className="w-9 max-phone:w-[11vw] max-phone:h-[12vw]" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Tailwind</span>
                                            </div>
                                            <div className="relative group/tooltip">
                                                <img src={reactIcon} className="w-8 max-phone:w-[11vw] max-phone:h-[12vw]" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">React</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-slate-900 dark:text-slate-400 mb-2 mt-2 max-phone:flex max-phone:flex-col max-phone:items-center">{language === 'en' ? '(Must contact Munia for register)' : '(Debe contactar con Munia para registrarse)'}</p>

                                    {/* Munia project redirect button */}
                                    <div className="flex flex-row mb-0 items-center justify-center mt-6">
                                        <TooltipButton
                                            link="https://munia.co/"
                                            mainText={`${language === 'en' ? 'Main official website' : 'Sitio web oficial'}`}
                                            tooltipSpan={language === 'en' ? "Munia's main official website" : "El sitio web oficial de Munia"}
                                            tooltipText="dark:text-[#9c6e61] text-white font-bold"
                                            tooltipBackground="dark:bg-gray-800 dark:bg-none bg-[#9c6e61]"
                                            tooltipBorder="dark:border-[#9c6e61] border-gray-800 border-2"
                                            buttonTextColor="dark:text-[#9c6e61] text-white"
                                            buttonBackgroundColor="dark:bg-gray-800 bg-[#9c6e61]"
                                            buttonBorderColor="dark:border-gray-700 border-gray-200 max-phone:dark:border-[#9c6e61] max-phone:border-[#9c6e61]"
                                            hoverButtonBorderColor="dark:hover:border-[#9c6e61] hover:border-zinc-500 active:border-zinc-300"
                                            pointerBackground="dark:bg-gray-800 bg-[#9c6e61]"
                                            pointerBorder="dark:border-[#9c6e61] border-2 border-zinc-600"
                                            buttonXPadding="px-6 max-phone:py-[3%]"
                                            buttonHeight="h-10 max-phone:h-full"
                                            buttonWidth="w-[85%] max-phone:w-[100%]"
                                            buttonFlexProps="justify-center items-center active:scale-95 transition"
                                        />
                                    </div>
                                    {/* Munia project redirect button */}
                                    {/* Munia project technologies icons */}

                                    {/* Munia project login image */}
                                    <a href="https://users.munia.co/sign-in" target="_blank" rel="noreferrer" className="max-phone:min-w-0 h-fit w-[85%] max-phone:w-[100%] mx-auto my-8 group rounded-2xl shadow_translate-transition hover:shadow-2xl hover:shadow-orange-200 active:shadow-orange-300 active:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-orange-200 dark:active:shadow-orange-300 max-phone:shadow-2xl max-phone:dark:shadow-2xl max-phone:dark:shadow-orange-200 max-phone:shadow-orange-200">
                                        <img className="aspect-auto rounded-2xl" src={MuniaLoginPic} alt="MuniaLoginPic" />
                                    </a>
                                    {/* Munia project login image */}

                                </article>
                                {/* Munia project container*/}

                                <hr className="min-w-max whitespace-nowrap border border-dotted border-gray-300 dark:border-gray-600 rounded-md" />

                                {/* Grow-Up project container*/}
                                <article className="relative flex flex-col justify-between w-full max-phone:mb-6">
                                    <div className="flex flex-col items-center">
                                        <h2 className="text-gray-700 text-center mr-2 dark:text-gray-200 text-2xl max-phone:text-[7vw] font-bold">{language === 'en' ? '"Grow-Up" Books E-commerce' : 'Tienda de libros en línea'}</h2>
                                        <h2 className="text-gray-700 text-center mr-2 dark:text-gray-200 text-2xl max-phone:text-[7vw] font-bold">{language === 'en' ? '' : '"Grow-Up"'}</h2>
                                        <p className="text-slate-400 text-center dark:text-slate-200 mt-5">{language === 'en' ? 'This project brings people the oportunity of searching, filtering, and updating new books about self development and inspiration, as well as buying new best sellers' : 'Este proyecto brinda a las personas la oportunidad de buscar, filtrar y actualizar nuevos libros sobre desarrollo personal e inspiración, así como comprar nuevos best sellers'}</p>
                                        <p className="text-slate-400 text-center dark:text-slate-200 mt-5">{language === 'en' ? 'There is a video below that explains and cover most part of the website' : 'A continuación se muestra un video que explica y cubre la mayor parte del sitio web'}</p>
                                        <p className="text-slate-900 text-center dark:text-slate-400 mt-5">{language === 'en' ? '(The mentioned video is in Spanish language, since it is my native language)' : '(El video mencionado está en español, ya que es mi lengua materna)'}</p>
                                    </div>

                                    {/* Project technologies icons */}
                                    <div className="flex flex-col gap-1 mt-1.5 justify-center items-center pt-3 pb-6 mb-10 max-phone:mb-[1vw]">
                                        <p className="text-slate-900 dark:text-slate-400 mb-2 mt-2">{language === 'en' ? "(Web tech stack used into the project)" : '(Tecnologías web utilizadas en el proyecto)'}</p>
                                        <div className="flex">
                                            <div className="relative group/tooltip">
                                                <img src={HTML5Icon} className="w-8 max-phone:w-[10vw] max-phone:h-[12vw]" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium
                                                before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">HTML</span>
                                            </div>
                                            <div className="relative group/tooltip">
                                                <img src={cssIcon} className="w-8 max-phone:w-[10vw] max-phone:h-[12vw]" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">CSS</span>
                                            </div>
                                            <div className="relative group/tooltip">
                                                <img src={MongoDBIcon} className="w-8 max-phone:w-[10vw] max-phone:h-[12vw]" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Mongo DB</span>
                                            </div>
                                            <div className="relative group/tooltip">
                                                <img src={reactIcon} className="w-8 max-phone:w-[10vw] max-phone:h-[12vw]" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">React</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-slate-900 dark:text-slate-400 mb-10 mt-2">{language === 'en' ? '(Click on the button with the text "Youtube" for full screen)' : '(Click en el botón con el texto "Youtube" para pantalla completa)'}</p>
                                    {/* Project technologies icons */}
                                    <a href="https://www.youtube.com/watch?v=xK3BDZ7JuFk" target="_blank" rel="noreferrer" className="h-fit w-[85%] max-phone:w-[100%] mx-auto mb-4 group hover:shadow-2xl hover:shadow-[#84a4ac] active:shadow-[#92BBC7] active:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-[#84a4ac] dark:active:shadow-[#92BBC7] max-phone:shadow-2xl max-phone:dark:shadow-2xl max-phone:dark:shadow-[#84a4ac] max-phone:shadow-[#84a4ac] rounded-xl">
                                        <iframe className="aspect-video rounded-xl" width="100%" height="100%" src="https://www.youtube.com/embed/xK3BDZ7JuFk?si=QAApM20iUHBtdBlU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                    </a>
                                </article>
                                {/* Grow-Up project container*/}

                                <hr className="min-w-max whitespace-nowrap border border-dotted border-gray-300 dark:border-gray-600 rounded-md" />

                                {/* Climate-Ducky project container*/}
                                <article className="relative flex flex-col justify-between w-full ">
                                    {/* Climate-Ducky description */}
                                    <div className="flex flex-col items-center">
                                        <h2 className="text-gray-700 text-center mr-2 dark:text-gray-200 text-2xl max-phone:text-[7vw] font-bold">{language === 'en' ? 'Weather website "Climate Ducky"' : 'Web del clima "Climate Ducky"'}</h2>
                                        <p className="text-slate-400 dark:text-slate-200 mt-5">{language === 'en' ? 'Your new favorite weather website!' : "¡Tu nueva web del clima favorita! "}</p>
                                        <p className="text-slate-400 text-center dark:text-slate-200 mt-5">{language === 'en' ? "Just enter a city name, and you'll see the city's weather information!" : "¡Simplemente ingresa el nombre de una ciudad y verás la información meteorológica de la ciudad!"}</p>
                                    </div>
                                    {/* Climate-Ducky description */}

                                    {/* Climate-Ducky technologies icons */}
                                    <div className="flex flex-col mt-1.5 justify-center items-center pt-3 pb-6 mb-10 max-phone:mb-[1vw]">
                                        <p className="text-slate-900 dark:text-slate-400 mb-2 mt-2">{language === 'en' ? "(Web tech stack used into the project)" : '(Tecnologías web utilizadas en el proyecto)'}</p>
                                        <div className="flex flex-row items-center gap-1">
                                            <div className="relative group/tooltip">
                                                <img src={HTML5Icon} className="w-8 max-phone:w-[10vw] max-phone:h-[12vw]" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">HTML</span>
                                            </div>
                                            <div className="relative group/tooltip">
                                                <img src={cssIcon} className="w-8 max-phone:w-[10vw] max-phone:h-[12vw]" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">CSS</span>
                                            </div>
                                            <div className="relative group/tooltip">
                                                <img src={reactIcon} className="w-8 max-phone:w-[10vw] max-phone:h-[12vw]" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">React</span>
                                            </div>
                                            {theme === "light" ? <div className="relative group/tooltip">
                                                <img src={framerIcon} className="w-4 max-phone:w-[10vw] max-phone:h-[12vw]" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Framer-motion</span>
                                            </div> : <div className="relative group/tooltip">
                                                <img src={framerDarkIcon} className="w-4 max-phone:w-[10vw] max-phone:h-[10vw]" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Framer-motion</span>
                                            </div>
                                            }
                                        </div>
                                    </div>
                                    {/* <p className="text-slate-900 dark:text-slate-400 mb-2 mt-2">{language === 'en' ? '(Must contact Munia for register)' : '(Debe contactar con Munia para registrarse)'}</p> */}

                                    {/* Climate-Ducky redirect button */}
                                    <div className="flex flex-row mb-3 text-2xl justify-center">
                                        <TooltipButton
                                            link="https://climate-ducky.vercel.app/"
                                            mainText={language === 'en' ? 'Visit Climate Ducky now!' : '¡Visita Climate Ducky ahora!'}
                                            tooltipSpan={language === 'en' ? 'Pressing "enter" you search for a city weather!' : '¡Con "Enter" buscas el clima de una ciudad!'}
                                            tooltipTextColor="dark:text-sky-200 text-white text-stroke-[0px] dark:text-stroke-[0px]"
                                            tooltipBackground="dark:bg-gray-800 dark:bg-none bg-sky-400"
                                            tooltipBorder="dark:border-sky-300"
                                            buttonTextColor="dark:text-white text-sky-900 text-stroke text-stroke-sky-400 max-phone:text-stroke-none max-phone:dark:text-stroke-none max-phone:dark:text-sky-300 dark:text-stroke-[1px] dark:text-stroke-sky-400"
                                            buttonBackgroundColor="dark:bg-gray-800 bg-sky-300"
                                            buttonBorderColor="dark:border-gray-700 border-sky-100 max-phone:dark:border-sky-400 max-phone:border-sky-400"
                                            hoverButtonBorderColor="dark:hover:border-sky-300 hover:border-sky-400 active:border-sky-300"
                                            pointerBackground="dark:bg-gray-800 bg-sky-400"
                                            pointerBorder="dark:border-sky-300 border-2 border-sky-500"
                                            buttonXPadding="px-6 py-6 max-phone:py-[3%]"
                                            buttonHeight="h-10 max-phone:h-full"
                                            buttonWidth="w-[85%] max-phone:w-[100%]"
                                            buttonFlexProps="justify-center items-center active:scale-95 transition"
                                        />
                                    </div>
                                    {/* Climate-Ducky redirect button */}
                                    {/* Climate-Ducky technologies icons */}

                                    {/* Climate-Ducky login image */}
                                    <a href="https://climate-ducky.vercel.app/" target="_blank" rel="noreferrer" className="max-phone:min-w-0 h-fit w-[85%] max-phone:w-[100%] mx-auto rounded-2xl dark:rounded-2xl group dark:hover:shadow-2xl max-phone:shadow-2xl max-phone:dark:shadow-2xl max-phone:dark:shadow-sky-300 max-phone:shadow-sky-300 dark:hover:shadow-sky-300 hover:shadow-2xl hover:shadow-sky-300 active:shadow-2xl active:shadow-sky-400">
                                        <img className="aspect-auto rounded-2xl" src={ClimateDuckyScreenshot} alt="MuniaLoginPic" />
                                    </a>
                                    {/* Climate-Ducky login image */}
                                </article>
                                {/* Climate-Ducky project container*/}

                                <hr className="min-w-max whitespace-nowrap border border-dotted border-gray-300 dark:border-gray-600 rounded-md" />

                                {/* Ingenium project container*/}
                                <article className="relative flex flex-col justify-center w-full ">
                                    {/* Ingenium description */}
                                    <div className="flex flex-col items-center justify-center">
                                        {/* Título proyecto */}
                                        <h2 className="text-gray-700 mr-2 dark:text-gray-200 text-2xl max-phone:text-[7vw] text-center font-bold">{language === 'en' ? 'Current working project "Ingenium.net.ar""' : 'Actualmente trabajando en el proyecto "Ingenium.net.ar"'}</h2>
                                        {/* Subtítulo proyecto */}
                                        <p className="text-slate-400 dark:text-slate-200 text-center mt-5">{language === 'en' ? 'Ingenium is a company that offers administration, financial management, and...' : `Ingenium es una empresa que ofrece servicios de administración, gestión financiera, y...`}</p>
                                        {/* Subtítulo mensaje */}
                                        <p className="text-slate-400 dark:text-slate-200 text-center font-bold mt-2">{language === 'en' ? "I'm making the website for them!" : `¡Yo estoy haciendo la web para ellos!`}</p>
                                        {/* Aclaración gris */}
                                        <p className="text-slate-400 dark:text-slate-400 text-center mt-[4vw]">{language === 'en' ? "Visit the website! Every time I make updates they will be reflected in the same button below" : "¡Visita la web! Cada vez que haga actualizaciones se verán reflejadas en el mismo botón de abajo"}</p>
                                    </div>
                                    {/* Ingenium description */}

                                    {/* Ingenium technologies icons */}
                                    <div className="flex flex-col mt-1.5 justify-center items-center pt-3 pb-6 mb-10 max-phone:mb-[1vw]">
                                        <p className="text-slate-900 dark:text-slate-400 mb-2 mt-2">{language === 'en' ? "(Web tech stack to be used in the project)" : '(Tecnologías web a utilizar en el proyecto)'}</p>
                                        <div className="flex flex-row items-center gap-1">
                                            <div className="relative group/tooltip">
                                                <img src={HTML5Icon} className="w-8 max-phone:w-[10vw] max-phone:h-[12vw]" alt="" />

                                                <span className="max-phone:hidden max-phone:before:hidden absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">HTML</span>
                                            </div>
                                            <div className="relative group/tooltip">
                                                <img src={tailwindIcon} className="w-8 max-phone:w-[12vw] max-phone:h-[12vw]" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">TailwindCSS</span>
                                            </div>
                                            <div className="relative group/tooltip">
                                                <img src={reactIcon} className="w-8 max-phone:w-[10vw] max-phone:h-[12vw]" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">React</span>
                                            </div>
                                            <div className="relative group/tooltip">
                                                <img src={BlenderIcon} className="w-8 max-phone:w-[10vw] max-phone:h-[12vw]" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Blender</span>
                                            </div>
                                            {theme === "light" ? <div className="relative group/tooltip">
                                                <img src={ThreeJSIcon} className="w-6 max-phone:w-[8.6vw] max-phone:h-[10vw]" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Three.js</span>
                                            </div> : <div className="relative group/tooltip">
                                                <img src={ThreeJSDarkIcon} className="w-6 aspect-square max-phone:w-[8.6vw] max-phone:h-[10vw]" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Three.js</span>
                                            </div>
                                            }
                                        </div>
                                    </div>
                                    {/* <p className="text-slate-900 dark:text-slate-400 mb-2 mt-2">{language === 'en' ? '(Must contact Munia for register)' : '(Debe contactar con Munia para registrarse)'}</p> */}

                                    {/* Ingenium redirect button */}
                                    <div className="flex flex-row mb-0 text-xl justify-center">
                                        <TooltipButton
                                            link="https://www.ingenium.net.ar/"
                                            mainText={language === 'en' ? "Visit the website now!" : '¡Visita la web ahora!'}
                                            tooltipSpan={language === 'en' ? "Don't miss it!" : "¡No te lo pierdas!"}
                                            tooltipTextColor="dark:text-blue-200 text-white text-stroke-[0px] dark:text-stroke-[0px]"
                                            tooltipBackground="dark:bg-gray-800 dark:bg-none bg-[#261dd0]"
                                            tooltipBorder="dark:border-blue-300"
                                            buttonTextColor="dark:text-blue-300 text-white"
                                            buttonBackgroundColor="dark:bg-gray-800 bg-[#261dd0]"
                                            buttonBorderColor="dark:border-gray-700 border-blue-100 max-phone:dark:border-blue-300 max-phone:border-blue-300"
                                            hoverButtonBorderColor="dark:hover:border-blue-300 hover:border-blue-400 active:border-blue-300"
                                            pointerBackground="dark:bg-gray-800 bg-[#2B71FF]"
                                            pointerBorder="dark:border-blue-300 border-2 border-blue-500"
                                            buttonXPadding="px-6 max-phone:py-[3%]"
                                            buttonHeight="h-10 max-phone:h-full"
                                            buttonWidth="w-[85%] max-phone:w-[100%]"
                                            buttonFlexProps="justify-center items-center active:scale-95 transition"
                                        />
                                    </div>
                                    {/* Ingenium redirect button */}

                                    {/* Ingenium technologies icons */}

                                    {/* Ingenium Trailer video */}
                                    <div className="max-phone:min-w-0 aspect-auto h-fit w-[85%] max-phone:w-[100%] mx-auto my-10 rounded-2xl dark:rounded-2xl group dark:hover:shadow-2xl max-phone:shadow-2xl max-phone:dark:shadow-2xl max-phone:dark:shadow-blue-300 max-phone:shadow-blue-300 dark:hover:shadow-blue-300 hover:shadow-2xl hover:shadow-blue-300 active:shadow-2xl active:shadow-blue-400">
                                        <video className="aspect-auto rounded-2xl" src={IngeniumFinishedTrailer} controls={true} muted={true} alt="MuniaLoginPic" />
                                    </div>
                                    {/* Ingenium Trailer video */}
                                </article>
                                {/* Ingenium project container*/}


                            </div>
                            {/* My projects container */}

                        </div>
                        {/* My projects */}


                    </section>

                    {/* Projects section end */}

                    <hr className="min-w-max whitespace-nowrap border border-dotted border-gray-300 dark:border-gray-600 rounded-md" />
                    {/* Email section start */}
                    <section className="px-[0vw] flex flex-col items-center justify-center w-full max-phone:flex max-phone:flex-col max-phone:items-center">
                        {/* Email Title */}
                        <header className="font-bold text-3xl max-phone:text-[7vw] text-indigo-400 dark:text-gray-100 flex max-phone:justify-center justify-center max-phone:pl-5 items-center gap-3">
                            <h2>{language === 'en' ? 'Email' : 'Correo electrónico'}</h2>
                            <FontAwesomeIcon icon={faEnvelope} className="scale-110" />
                        </header>
                        {/* Contenedor del botón */}
                        <div className="w-[85%] flex flex-col items-center justify-center">
                            <a href="mailto:marcosdamian054@gmail.com" target="_blank" className="relative flex-col items-center justify-center flex max-phone:w-[75%] max-phone:h-[14vw] h-[4.8vw] w-[100%] active:scale-95 transition overflow-hidden rounded-lg p-[1px] max-phone:mt-[10vw] max-phone:mb-[3vw] mt-[3vw] mb-[0.8vw] focus:outline-none">
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6100ff_0%,#9100ffea_50%,#cb00ff_100%)]">
                                </span>
                                <span className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-transparent px-7 text-lg max-phone:text-[5vw] font-medium text-white backdrop-blur-3xl gap-4 undefined tracking-tight leading-[5vw]">
                                    <a
                                        className="[filter:drop-shadow(0px_2px_1px_#999999)]"
                                        href="mailto:marcosdamian054@gmail.com"
                                        target="_blank"
                                    >
                                        {language === 'en' ? "Send me an email" : "Enviame un email"}
                                    </a>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </span>
                            </a>
                        </div>
                        {/* Email Input */}
                    </section>
                    {/* Email section end*/}
                </main>
            </div >
            {/* Main end */}
        </div >
    )
}
export default Home