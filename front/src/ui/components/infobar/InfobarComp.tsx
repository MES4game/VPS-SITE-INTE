import { FC, ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faClipboardList, faBullseye, faTrophy, faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { ComponentProps } from "@/shared/models/common/Props";
import "@/ui/components/infobar/InfobarComp.css";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InfobarCompProps extends ComponentProps {
    // Additional props can be defined here if needed
};

const InfobarComp: FC<InfobarCompProps> = (props: InfobarCompProps): ReactNode => {
    useEffect(() => {
        console.log("Loaded: InfobarComp");
    }, []);

    useEffect(() => {
        console.log("Rendered: InfobarComp");
    });

    return (
        <footer id='infobar' className={props.className} style={props.style}>
            <div className="infobar-info">
                <h3>Intégration 2025/2026 | BDE - Polytech Paris-Saclay</h3>
                <p>TODO: add text for description of integration</p>
            </div>
            <div className="infobar-links">
                <div>
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                            <Link to="/">
                                <FontAwesomeIcon icon={faHouse} />
                                <p>Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/activity">
                                <FontAwesomeIcon icon={faClipboardList} />
                                <p>Activité</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/challenge">
                                <FontAwesomeIcon icon={faBullseye} />
                                <p>Défi</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/result">
                                <FontAwesomeIcon icon={faTrophy} />
                                <p>Résultat</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Community</h3>
                    <ul className="reverse">
                        <li>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Help</h3>
                    <ul>
                        <li>
                            <div className='footer-line'>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <p> Adresse : </p>
                                <a href='https://maps.app.goo.gl/Y4Ds6c3uUZM1t8gLA' target='_blank' rel='noreferrer'>Bâtiment 620, Maison de l'Ingénieur, Rue Louis de Broglie, 91400 Orsay, France</a>
                            </div>
                        </li>
                        <li>
                            <div className='footer-line'>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <p> Email : </p>
                                <a href='mailto:contact@bde-pps.fr' target='_blank' rel='noreferrer'>contact@bde-pps.fr</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="infobar-legal">
                <ul>
                    <li><Link to="/terms">Terms of Service</Link></li>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                    <li><Link to="/cookie">Cookie Policy</Link></li>
                </ul>
                <p>&copy; BUREAU DES ELEVES DE POLYTECH PARIS-SACLAY</p>
            </div>
        </footer>
    );
}

export default InfobarComp;
