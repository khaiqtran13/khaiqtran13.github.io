import swim_icon from './images/swim.png';
import cost_icon from './images/cost.png';
import specs_icon from './images/specs.jpeg';
import courses_icon from './images/courses.jpeg';

const LearnMoreFr = () => {
    return (
        <div className="learn-more">
            <div style={{display: "flex"}}>
                <img src={swim_icon} className="image" /> 
            <h2>Types de Nage</h2>
            </div>
            <p>
                <h6>Nage en couloir:</h6> La piscine de 50 m est divisée en 10 couloirs (de 2,5 m chacun) avec un maximum de 4 personnes par couloir. Les nages en couloir sont les meilleures pour les athlétiques qui s'entraînent aux mouvements. <br /><br />
                <h6>Nage loisir:</h6> Le 50m est divisé en deux bassins de 25m avec un maximum de 25 personnes par bassin (50 au total). Les nages de loisirs sont les meilleures pour les activités aquatiques et les entraînements sans tours.
            </p>
            <div style={{display: "flex"}}>
                <img src={cost_icon} className="image" />
                <h2>Coûts</h2>
            </div>
            <table>
                <tr>
                    <th>Age</th>
                    <th>Prix ($)</th>
                </tr>
                <tr>
                    <td>18 ans et moins</td>
                    <td>5,00</td>
                </tr>
                <tr>
                    <td>19 à 64</td>
                    <td>7,50</td>
                </tr>
                <tr>
                    <td>65 ans et plus</td>
                    <td>4,50</td>
                </tr>
            </table><br />
            <div style={{display: "flex"}}>
                <img src={specs_icon} className="image"/>
                <h2>Spécifications de la piscine</h2>
            </div>
            <p>
                Piscine 613 répond aux règlements de la Fédération Inernationale de Natation et peut être utilisé pour accueillir des événements olympiques.
                <br /><br /><strong>Mesures:</strong>
                <br />longueur : 50 mètres (164 pieds).
                <br />largeur : 25 mètres (82 ft)
                <br />profondeur : 6 mètres (6 ft)
                <br />La largeur de la voie : 2,5 mètres.
            </p>
            <div style={{display: "flex"}}>
                <img src={courses_icon} className="image" />
                <h2>Cours</h2>
            </div>
            <p>
                <h6>Piscine 613 offre un les cours de natation standard et les cours de sauvetage.</h6><br />
                Des cours de natation pour enfants de la Croix-Rouge sont offerts, veuillez vous référer à <a href="https://join.ottawa.ca/swimming/" target="_blank" rel="noreferrer">ici</a> pour plus d'informations.<br /><br />
                Les cours de la Société de sauvetage sont offerts aux piscines 613, complétez les cours et venez nous rejoindre ! Suivez la séquence <a href="https://www.lifesavingsociety.com/find-a-course.aspx" target="_blank :">ici</a>.
            </p>
        </div>
    );
}
 
export default LearnMoreFr;