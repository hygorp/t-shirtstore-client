import style from "./Content.module.css"
import Image from "next/image";

const getProducts = async function () {
    const data = await fetch('http://localhost:8080/products')
    return await data.json()
}

export default async function Content() {

    const products = await getProducts()

    return (
        <div className={style.content}>
            {products.map((product : Product) => (
                <div key={product.id} className={style.product}>
                    <div className={style.product_cover}>
                        <Image src={product.imgUrl} alt={product.name} width="280" height="280" priority={true}/>
                    </div>

                    <div className={style.product_title}>
                        <h6>{product.name}</h6>
                    </div>

                    <div className={style.product_description}>
                        <ul>
                            <li>{product.genre}</li>
                            {product.categories.map((category : Category) => (
                                <li key={category.id}>{category.name}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={style.product_price}>
                        <h1>
                            $ {product.price.toFixed(2)}
                        </h1>
                    </div>

                    <div className={style.product_button}>
                        <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}