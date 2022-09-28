
import { Link } from "react-router-dom";
import { ServiceDropdown } from './Dropdowndata';


const Dropdown = () => {
    return (
        <>
            <ul className="submenu">
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

export default Dropdown;