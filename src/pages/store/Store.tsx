import ProductItem from "../../components/productItem/ProductItem.tsx";
import Container from "../../components/container/Container";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getProducts} from "../../services/api.tsx";

function Store() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
            getProducts().then((res) => {setProducts(res)})
        }
        ,[])

    return(
        <div>
            <Container>
            <h1 className="text-right mt-5">جدیدترین محصولات</h1>
            <div className='grid grid-cols-4 gap-4'>
                {products.map(product => (
                    <Link to={`/products/${1}`}>
                        <ProductItem/>
                    </Link>
                ))}

            </div>
            </Container>
        </div>

    )
}

export default Store;