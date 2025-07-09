import {Link} from "react-router-dom";
import Container from "../container/Container.tsx";

function Navbar() {
    return (
        <div className='h-14 border-b shadow flex items-center'>
            <Container>
                <div className="flex justify-between flex-row-reverse">
                    <ul className="flex">
                        <li className="ml-4"><Link to="/">خانه</Link></li>
                        <li className="ml-4"><Link to="/store">فروشگاه</Link></li>
                    </ul>
                    <div>سبد خرید</div>
                </div>
            </Container>
        </div>
    );
}


export default Navbar;