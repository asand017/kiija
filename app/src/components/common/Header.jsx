import { useNavigate } from 'react-router-dom'
import '../../styles/global.css'
import BreadCrumbMenu from './BreadCrumbMenu'

const Header = () => {
    const title = 'Kiija Math Wizard'
    const navigate = useNavigate()
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                flexDirection: 'column',
            }}
        >
            <h1 className="Title" onClick={() => navigate('/')}>
                {title}
            </h1>
            <BreadCrumbMenu />
        </div>
    )
}

export default Header
