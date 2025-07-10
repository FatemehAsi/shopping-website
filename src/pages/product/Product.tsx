// import {useParams} from "react-router-dom";
import Container from "../../components/container/Container.tsx";
import img from "../../assets/images/img.png"
import Button from "../../components/button/Button.tsx";

function Product() {
    // const params = useParams();

    return (
        <div>
            <Container>
                <div className="h-96 shadow mt-4 grid grid-cols-12">

                    <div className="col-span-10 p-4">
                        <h4 className="text-right">عنوان محصول</h4>
                        <div>
                            <p className="text-right">قیمت: 25$</p>
                            <p className="text-right">توضیحات: فته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه
                                و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده
                                استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.
                                معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند
                                تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه
                                متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است.
                                از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند
                                و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی،
                                صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند. </p>
                        </div>
                    </div>

                    <div className="col-span-2 p-4 bg-blue-400">
                        <img className="rounded" src={img} alt=""/>
                        <Button  variant="primary" onClick={() => alert("salam")}>
                            اضافه کردن
                        </Button>
                    </div>

                </div>

            </Container>
        </div>
    )
}

export default Product;