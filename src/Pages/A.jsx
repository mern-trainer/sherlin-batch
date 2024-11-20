import { Link } from 'react-router-dom'

const A = () => {
    return (
        <div>
            Component A
            <Link to="/second">To B</Link>
        </div>
    )
}

export default A
