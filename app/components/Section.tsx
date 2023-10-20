export default function Section() {
    return(
        <main className="grid gap-4">
        <div className="md:col-span-2 lg:col-span-2 mt-4 text-black border-b border-[#F56A6A] py-4">
          <h2 id="section">
           Ipsum sed dolor <span>CURSOS</span>
          </h2>
        </div>
        <div className=" rounded-md pb-2">
          <a href="/curso_html.html">
            <img src="/img/image 1.png" alt="" />
            <div className="py-8 basis-1/2 text-center text-black">
              <h3>Curso de HTML</h3>
              <p className="text-[#7F888F] text-center">O curso é realizado por profissionais..</p>
            </div>
          </a>
        </div>
        <div className=" rounded-md pb-2">
          <a href="/curso_css.html">
            <img src="/img/image 3.png" alt="" />
            <div className="text-black text-center">
              <h3>Curso de CSS</h3>
              <p className="text-[#7F888F] text-center">O curso é realizado por profissionais..</p>
            </div>
          </a>
        </div>
        <div className=" rounded-md pb-2">
          <a href="/curso_js.html">
            <img src="/img/image 2.png" alt="" />
            <div className="text-black text-center">
              <h3>Curso de JS</h3>
              <p className="text-[#7F888F] text-center">O curso é realizado por profissionais..</p>
            </div>
          </a>
        </div>
        <div className="rounded-md pb-2">
          <a href="/curso_html.html">
            <img src="/img/image 4.png" alt="" />
            <div className="text-black text-center">
              <h3>Curso de DESIGN</h3>
              <p className="text-[#7F888F] text-center">O curso é realizado por profissionais..</p>
            </div>
          </a>
        </div>
        
        
      </main>
    )
}