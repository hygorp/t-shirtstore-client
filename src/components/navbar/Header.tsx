import style from "./Header.module.css"
import Link from "next/link";
export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <h1>T-Shirt Store</h1>
            </div>

            <div className={style.categories}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Female</Link></li>
                    <li><Link href="/">Male</Link></li>
                </ul>
            </div>
        </header>
    )
}