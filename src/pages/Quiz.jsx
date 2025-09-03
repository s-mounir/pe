import { Link } from 'react-router-dom';

function Quiz() {
    return(
    <main>
        <h1>Qui est mon pacer préféré?</h1>
        <div className='question'>
            <Link to="/pacer/Raph" className='bouton'>Raph</Link>
            <Link to="/pacer/Hugo" className='bouton'>Hugo</Link>
            <Link to="/pacer/Sara" className='bouton'>Sara</Link>
        </div>
    </main>);
}
export default Quiz