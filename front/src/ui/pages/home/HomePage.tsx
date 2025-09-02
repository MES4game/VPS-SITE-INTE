import { FC, ReactNode, useEffect } from "react";
import "@/ui/pages/home/HomePage.css";

const HomePage: FC = (): ReactNode => {
    useEffect(() => {
        console.log("Loaded: HomePage");
    }, []);

    useEffect(() => {
        console.log("Rendered: HomePage");
    });

    return (
        <>
            <section className='home-welcome-section'>
                <h1>Bienvenue sur le site de l'intégration 2025/2026 !</h1>
            </section>
            <section className='home-info-section'>
                <h2>Voici quelques informations sur l'intégration</h2>
                <div className='home-info-element'>
                    <img src='https://data.bde-pps.fr/bde/images/logo/bde.svg' />
                    <div>
                        <h3>Information 1</h3>
                        <p>TODO</p>
                    </div>
                </div>
                <div className='home-info-element reverse'>
                    <img src='https://data.bde-pps.fr/bde/images/logo/bde.svg' />
                    <div>
                        <h3>Information 2</h3>
                        <p>TODO</p>
                    </div>
                </div>
                <div className='home-info-element'>
                    <img src='https://data.bde-pps.fr/bde/images/logo/bde.svg' />
                    <div>
                        <h3>Information 3</h3>
                        <p>TODO</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;
