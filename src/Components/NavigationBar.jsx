import {Link} from 'react-router-dom';

function NavigationBar() {
    return (
        <nav>
            <Link to="/character/:characterId">Character Details</Link>
        </nav>
    )
}

export default NavigationBar;