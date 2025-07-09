import img from "../../assets/images/img.png";

function ProductItem(){
    return(
        <div className="shadow border rounded pb-2">
            <img className="rounded-t" src={img} alt=""/>
            <div className="flex justify-between flex-row-reverse px-4 mt-2">
                <h3>عنوان محصول</h3>
                <span>55$</span>
            </div>
            <div className="px-4 mt-1">
                <p className="line-clamp-2 text-right">
                    طرح‌نما یا لورِم اِیپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
                    طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه
                    و ارائهٔ اولیهٔ شکل ظاهری و کلیِ طرح سفارش‌گرفته‌شده استفاده می‌کند،
                    تا از نظر گرافیکی، نشانگر چگونگی نوع و اندازهٔ قلم و ظاهرِ متن باشد.
                </p>
            </div>
        </div>
    )
}

export default ProductItem;