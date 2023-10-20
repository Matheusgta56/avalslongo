export default function Header() {
    return (
        <header className="text-center text-black py-8 border-b border-[#F56A6A] md:flex itens-center justify-between">
            <h4>News by UTFPR</h4>
            <nav>
                <a className="hover:text-[#00e77f]" href="#">
                    Home &nbsp;
                </a>
                <a className="hover:text-[#00e77f]" href="#cursos">
                    Cursos &nbsp;
                </a>
                <a className="hover:text-[#00e77f]" href="#contato">
                    Contato &nbsp;{" "}
                </a>
                <a className="hover:text-[#00e77f]" href="#">
                    Login &nbsp;
                </a>
            </nav>
        </header>
    )
}