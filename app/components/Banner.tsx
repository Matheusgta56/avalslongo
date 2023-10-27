export default  function Banner() {
    return (
        <div>
            <div className="py-8 md:flex items-center flex-row-reverse">
                <div className="basis-1/2">
                    <img src="/img/pic10.jpg.png" alt="Descrição da Imagem" />
                </div>
                <div className="py-8 basis-1/2 text-center text-black">
                    <h2 className="py-8 w-96 h-8 top-52 left-10 text-3xl font-bold leading-10 font-roboto-slab text-[#3D4449]">Hi, I m Teacher by UTFPR</h2>
                    
                    <h3 className="py-8 text-[#7F888F]">Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</h3>
                    <a 
                        className="text-[#F56A6A]   bg-white border border-[#F56A6A] px-3 py-[3px] py-8" href="#section" >
                        Learn More
                    </a>
                </div>
            </div>

        </div>
    )
}