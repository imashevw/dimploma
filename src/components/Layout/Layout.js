import CartLink from "../CartLink/CartLink";
import CategoryList from "../CategoryList/CategoryList";
import Nav from "../Nav/Nav";
import Logo from "../iu/Logo/Logo";
import "./Layout.css";
export default function Layout(props) {
    return (
        <div className="Layout">
             <header>
                <Logo />
               <Nav />
               <CartLink/>
             </header>
             <aside>
               <CategoryList />
             </aside>
             <main>{props.children}</main>
            <footer>
             FOOTER
            </footer>
        </div>
    )
}
