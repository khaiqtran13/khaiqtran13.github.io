import aboutus_icon from './images/aboutus.jpeg'

const HomeFr = () => {
    return (
        <div className="home">
            <div style={{display: "flex"}}>
                <img src={aboutus_icon} className="image"/>
            <h2>À Propos de Nous</h2>
            </div>
            <p>
                Piscine 613 est situé à Ottawa, en Ontario. Il s'agit d'une piscine de taille olympique idéale pour les athlètes qui s'entraînent. Piscine 613 est ouvert pour les nages en couloir, les nages de loisir et les réservations de clubs.<br /><br />
                Piscine 613 comprend l'importance de la qualité de votre temps de nage et rien n'est plus frustrant qu'un couloir bondé ; c'est pourquoi nous utilisons un système de réservation.<br /><br />
                Pour réserver un créneau horaire, veuillez cliquer sur « Réserver une place » dans la barre de navigation en haut, ou n'hésitez pas à explorer le site Web !
            </p>
        </div>
    );
}
 
export default HomeFr;

