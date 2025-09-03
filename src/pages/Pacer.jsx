import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Pacer() {
    const { id } = useParams()

    return(
    <main>
        {id === 'Raph' && 
            <div className='question'>
                <p>Je comprends, ses mollets mettent en valeur les chaussettes, mais tu sais au fond de toi que ce n'est pas la bonne réponse</p>
                <Link to="/quiz" className='bouton'>Essaye encore...</Link>
            </div>}
        {id === 'Hugo' && 
            <div className='question'>
                <p>... non mais... ton doigt à ripé je ne vois pas d'autres solutions</p>
                <Link to="/quiz" className='bouton'>Essaye encore...</Link>
            </div>}
        {id === 'Sara' && 
            <div className='question'>
                <p>YAY!! T'as gagné un cookie!</p>
                <img src="./img/cookie.svg" alt="Cookie"/>
                <Link to="/tcd" className='bouton'>Je veux mon TCD maintenant</Link>
            </div>}
        
    </main>);
}
export default Pacer