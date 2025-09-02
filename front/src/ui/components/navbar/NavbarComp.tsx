import { FC, ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faBullseye, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { ComponentProps } from "@/shared/models/common/Props";
import "@/ui/components/navbar/NavbarComp.css";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface NavbarCompProps extends ComponentProps {
    // Additional props can be defined here if needed
};

const NavbarComp: FC<NavbarCompProps> = (props: NavbarCompProps): ReactNode => {
    const year: number = new Date().getFullYear();

    useEffect(() => {
        console.log("Loaded: NavbarComp");
    }, []);

    useEffect(() => {
        console.log("Rendered: NavbarComp");
    });

    return (
        <header id='navbar' className={props.className} style={props.style}>
            <Link to='/' className='navbar-logo-link'>
                <img src='https://data.bde-pps.fr/bde/images/logo/bde.svg' />
                <div className='navbar-zero'>
                    <h1>Inte</h1>
                    <small>{year}</small>
                </div>
            </Link>
            <nav className='navbar-links'>
                <ul>
                    <li>
                        <Link to='/activity'>
                            <FontAwesomeIcon icon={faClipboardList} />
                            <p className='navbar-second'> Activité</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/challenge'>
                            <FontAwesomeIcon icon={faBullseye} />
                            <p className='navbar-second'> Défi</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/result'>
                            <FontAwesomeIcon icon={faTrophy} />
                            <p className='navbar-second'> Résultat</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavbarComp;
