import Navbar from "../navbar/Navbar.tsx";

interface ILayout {
    children: React.ReactNode;
}

function Layout({children}: ILayout){
    return(
        <>
            <Navbar/>
            {children}
        </>
    )

}

export default Layout;