import styled from 'styled-components';
import { Link } from 'react-router-dom'

function Home() {
    return (
    <main>
        <h1>Bienvenu au groupe Campus Marseille</h1>
        <Link to="/main" className='bouton'>Commencer</Link>
    </main>);
}
export default Home