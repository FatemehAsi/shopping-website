import CartItem from "../../components/cartItem/CartItem.tsx";
import Container from "../../components/container/Container.tsx";
import Button from "../../components/button/Button.tsx";

function Cart(){
    return(
        <Container>
            <div>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>

            <div className="bg-gray-200 rounded p-6">
                <p className="text-right">قیمت کل: 2000</p>
                <p className="text-right">تخفیف شما: 200</p>
                <p className="text-right">قیمت نهایی: 1800</p>
            </div>

            <Button variant="success" className="mt-2">ثیت سفارش</Button>

        </Container>
    )
}

export default Cart;
