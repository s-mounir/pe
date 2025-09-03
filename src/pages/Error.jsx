import styled from 'styled-components';
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
    background: #FF0101;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
    padding: 10px;
    margin: 30px;
    color: #FFF;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    text-decoration: none;
`

function Error() {
    return(
    <main>
        <h1>Oups, tu t'es perdu en allant à Borely?</h1>
        <StyledLink to="/">Je retourne au point de départ</StyledLink>
    </main>);
}
export default Error




/* jaune : #f3f1e4
bleu foncé : #16244b
rose : #f7c2da */