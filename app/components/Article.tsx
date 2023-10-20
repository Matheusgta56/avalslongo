export default function Article() {
    return(
        <main className="grid gap-4">
  <div className="text-center text-black py-8 border-b border-[#F56A6A] md:flex justify-between">
    <h2 id="cursos">
     Ipsum sed dolor <span>CURSOS</span>
    </h2>
  </div>
  <div className=" rounded-md pb-2">
    <a href="/curso_html.html">
      <img src="/img/pic01.jpg.png" alt="" />
      <div className="text-black text-center">
        <h3>Curso de HTML</h3>
        <p>O curso é realizado por profissionais..</p>
      </div>
    </a>
  </div>
  <div className=" rounded-md pb-2">
    <a href="/curso_css.html">
      <img src="/img/a.png" alt="" />
      <div className="text-black text-center">
        <h3>Curso de CSS</h3>
        <p>O curso é realizado por profissionais..</p>
      </div>
    </a>
  </div>
  <div className=" rounded-md pb-2">
    <a href="/curso_js.html">
      <img src="/img/a (1).png" alt="" />
      <div className="text-black text-center">
        <h3>Curso de JS</h3>
        <p>O curso é realizado por profissionais..</p>
      </div>
    </a>
  </div>
  <div className="bg-[#4d4d4d] rounded-md pb-2">
    <a href="/curso_html.html">
      <img src="/img/a (2).png" alt="" />
      <div className="text-white text-center">
        <h3>Curso de DESIGN</h3>
        <p>O curso é realizado por profissionais..</p>
      </div>
    </a>
  </div>
  <div className="bg-[#4d4d4d] rounded-md pb-2">
    <a href="/curso_html.html">
      <img src="/img/pic05.jpg.png" alt="" />
      <div className="text-white text-center">
        <h3>Curso de GAMES</h3>
        <p>O curso é realizado por profissionais..</p>
      </div>
    </a>
  </div>
  <div className="bg-[#4d4d4d] rounded-md pb-2">
    <a href="/curso_html.html">
      <img src="/img/a (3).png" alt="" />
      <div className="text-white text-center">
        <h3>Curso de ROBÓTICA</h3>
        <p>O curso é realizado por profissionais..</p>
      </div>
    </a>
  </div>
</main>

    )
}