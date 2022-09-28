
import { Link } from "react-router-dom";
import { ServiceDropdown } from './Dropdowndata';


const Mobile = () => {
    return (
        <>
            <ul className="mobile-sub-menu">
                {/* <Link to="/servicedetail">Service Details</Link> */}
                {ServiceDropdown.map(item => {
                    return (
                        <li key={item.id}>
                            <Link to={`/servicedetail/${item.id}`} state={item} className={item.Sname}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Mobile;