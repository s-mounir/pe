import { Link } from 'react-router-dom'

function Main() {
    return(
    <main>
        <h1>De quoi ai-je envie aujourd'hui?</h1>
        <div className='question'>
            <Link to="/quiz" className='bouton'>Je veux faire un quiz!</Link>
            <Link to="/tcd" className='bouton'>J'avais demandé un TCD...</Link>
        </div>
        
    </main>);
}
export default Main