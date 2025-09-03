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
                        <h3>Répartition</h3>
                        <p>Le modèle des activités de l'intégration cette année sera sur le modèle suivant :</p>
                        <br />
                        <p>- 4 familles historiques : La famille Cro'Magnon, la famille Romaine, la famille Moyen-Âge et la famille Révolution Industrielle</p>
                        <p>- 7 équipes par familles : Avec votre marraine ou votre parrain, vous serez répartis dans une équipe dans le but de faire les activités proposées par les 13 clubs de l'école !</p>
                    </div>
                </div>
                <div className='home-info-element'>
                    <div>
                        <h3>Mercredi</h3>
                        <p>L'après-midi de mercredi 03/09/2025 est réservé pour les activités de clubs. En équipe, vous découvrirez les 13 clubs de l'école à travers des activités de 10min chacune. Chaque activité remportée donne des points à votre famille ! Ne laissez aucune chance à vos opposants pour décrocher la victoire</p>
                    </div>
                </div>
                <div className='home-info-element'>
                    <div>
                        <h3>Jeudi</h3>
                        <p>Ce jeudi (04/09/2025) après-midi est quant à lui réservé pour les défis ; avec votre famille, vous devrez réaliser une soixantaine de défis en les filmant, il faudra les envoyer sur la discussion WhatsApp dédiée pour que notre équipe compte les points avant de désigner la famille vainqueure !</p>
                        <br />
                        <p>Il y en a de toutes sorte, soyez d'attaque :)</p>
                    </div>
                </div>
                <div className='home-info-element reverse'>
                    <img src='https://data.bde-pps.fr/cia/images/logo/cia.svg' />
                    <div>
                        <h3>CIA - PoPS</h3>
                        <p>Site web développé par le bureau du CIA de Polytech Paris-Saclay.</p>
                        <p>Si tu souhaites nous rejoindre, tu peux nous retrouver tous les jeudis après-midi en B007 ou sur notre Discord :</p>
                        <a href="https://discord.com/invite/S8gRM95wqw">https://discord.com/invite/S8gRM95wqw</a>
                        <p>Nous faisons à la fois de l'algorithmique et de l'informatique, en participant ou en organisant des concours, des projets ou des masterclass.</p>
                        <p>La première séance du club aura lieu le 11/09 à 14h, avec une présentation du club, de nos réalisations et des objectifs de l'année.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;
