export default  function Banner() {
    return (
        <div>
            <div className="py-8 md:flex items-center flex-row-reverse">
                <div className="basis-1/2">
                    <img src="/img/pic10.jpg.png" alt="Descrição da Imagem" />
                </div>
                <div className="py-8 basis-1/2 text-center text-black">
                    <h2>UTFTEC</h2>
                    <h3>A MELHOR ESCOLA DE INFORMÁTICA</h3>
                    <a
                        className="py-8 text-[#F56A6A]  bg-white border border-[#F56A6A] px-3 py-[3px] "
                        href="#"
                    >
                        Learn More
                    </a>
                </div>
            </div>

        </div>
    )
}