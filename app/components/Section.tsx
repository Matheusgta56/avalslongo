export default function Section() {
    return(
      <main className="grid gap-4">
        <div className="md:col-span-2 lg:col-span-2 mt-4">
        <h3 className="text-left text-lg font-roboto-slab text-[#3D4449] font-bold border-b-2 border-[#F56A6A] py-8">
           Erat lacinia
        </h3>
        </div>
        <div className=" rounded-md pb-2 text-center">
          <a className="basis-1/2 py-4" href="">
            <img  src="/img/image 1.png" alt="" />
            <div className="">
              <h3 className="font-roboto-slab text-[#3D4449] font-bold ">Portitor ullamcorper</h3>
              <p className="text-[#7F888F] ">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdium. Sen nullaamet lorem feugiat tempus aliquam.</p>
            </div>
          </a>
        </div>
        <div className=" rounded-md pb-2 text-center">
          <a className="basis-1/2 " href="">
            <img src="/img/image 3.png" alt="" />
            <div className="">
              <h3 className="font-roboto-slab text-[#3D4449] font-bold">Quam lorem ipsum</h3>
              <p className="text-[#7F888F]">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
            </div>
          </a>
        </div>
        <div className=" rounded-md pb-2 text-center">
          <a href="">
            <img src="/img/image 2.png" alt="" />
            <div className="">
              <h3 className="font-roboto-slab text-[#3D4449] font-bold">Quam lorem ipsum</h3>
              <p className="text-[#7F888F] ">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
            </div>
          </a>
        </div>
        <div className="rounded-md pb-2 text-center">
          <a href="">
            <img src="/img/image 4.png" alt="" />
            <div className="">
              <h3 className="font-roboto-slab text-[#3D4449] font-bold">Sed magna finibus</h3>
              <p className="text-[#7F888F] ">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
            </div>
          </a>
        </div>
      </main>
    )
}