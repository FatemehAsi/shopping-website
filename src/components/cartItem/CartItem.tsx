import img from "../../assets/images/img.png"
import Button from "../button/Button.tsx";

function CartItem() {
    return (
        <div className="flex flex-row-reverse mt-2 border-b pb-2">
            <img src={img} className="rounded w-28" alt="" />
            <div className="mr-4">
                <h3 className="text-right">عنوان محصول</h3>
                <div className="mt-2">
                    <Button variant="primary">+</Button>
                    <span className="mx-2">{2}</span>
                    <Button variant="primary">-</Button>
                    <Button variant="danger" className="ml-2">حذف</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;