export default function Section() {
    return(
      <main className="grid gap-4 ">
        <div className="md:col-span-2 lg:col-span-2 mt-4 font-roboto-slab text-[#3D4449] font-bold border-b border-[#F56A6A] py-4">
          <h2 id="section">
           Erat lacinia <span>CURSOS</span>
          </h2>
        </div>
        <div className="  rounded-md pb-2 basis-1/2">
          <a href="/curso_html.html">
            <div className=" py-8 md:flex items-center flex-reverse ">
            <img src="/img/image 1.png" alt="" />
            </div>
            <div className="text-center   text-[#3D4449]">
              <h3 className="font-roboto-slab text-[#3D4449] font-bold">Portitor ullamcorper</h3>
              <p className="text-[#7F888F] text-center">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdium. Sen nullaamet lorem feugiat tempus aliquam.</p>
            </div>
          </a>
        </div>
        <div className=" rounded-md pb-2">
          <a href="/curso_css.html">
            <img src="/img/image 3.png" alt="" />
            <div className="text-black text-center">
              <h3 className="font-roboto-slab text-[#3D4449] font-bold">Quam lorem ipsum</h3>
              <p className="text-[#7F888F] text-center">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
            </div>
          </a>
        </div>
        <div className=" rounded-md pb-2">
          <a href="/curso_js.html">
            <img src="/img/image 2.png" alt="" />
            <div className="text-black text-center">
              <h3 className="font-roboto-slab text-[#3D4449] font-bold">Quam lorem ipsum</h3>
              <p className="text-[#7F888F] text-center">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
            </div>
          </a>
        </div>
        <div className="rounded-md pb-2">
          <a href="/curso_html.html">
            <img src="/img/image 4.png" alt="" />
            <div className="text-[#3D4449] text-center">
              <h3 className="font-roboto-slab text-[#3D4449] font-bold">Sed magna finibus</h3>
              <p className="text-[#7F888F] text-center">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
            </div>
          </a>
        </div>
        
        
      </main>
    )
}