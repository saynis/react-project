

function Services() {
  return (
    <div className="max-w-7xl mx-auto mt-6">
    
    <div className="flex py-4">
        <h2 className="text-3xl font-bold">
            Everything from first idea to running system.
        </h2>

        <p>
            One team handles strategy, design, <br /> engineering and deployment — 
            so you are not managing three vendors to  get one system live.
        </p>
    </div>


    <div className="grid grid-cols-3 border border-gray-600 mt-6">

        <div className="p-6 border-r border-b border-gray-600 cursor-pointer hover:bg-gray-900">
            <h2 className="text-xl font-bold">Software developement</h2>
            <p className="text-gray-500 mt-2 ">
                Custom web and backend systems, built to
                 be handed over — with tests, documentation and a deployment path.

                 </p>
        </div>



        <div className="p-6 border-r border-b border-gray-600 cursor-pointer hover:bg-gray-900">
            <h2 className="text-xl  font-bold">AI solutions</h2>
            <p className="text-gray-500 mt-2 ">
               Models, agents and automation — built with a defined failure path, not just a working demo.

                 </p>
        </div>


         <div className="p-6 border-r border-b border-gray-600 cursor-pointer hover:bg-gray-900">
            <h2 className="text-xl font-bold">Web development</h2>
            <p className="text-gray-500 mt-2 ">
             Websites and web applications that perform on the devices and connections your users actually have.

                 </p>
        </div>



        <div className="p-6 border-r border-b border-gray-600 cursor-pointer hover:bg-gray-900">
            <h2 className="text-xl font-bold">Mobile development</h2>
            <p className="text-gray-500 mt-2 ">
             Android and iOS applications, designed for intermittent connectivity from the first sketch.

                 </p>
        </div>


         <div className="p-6 border-r border-b border-gray-600 cursor-pointer hover:bg-gray-900">
            <h2 className="text-xl font-bold">Cloud solutions and hosting</h2>
            <p className="text-gray-500 mt-2 ">
             Servers, deployment and hosting — in the cloud, on your own hardware, or the mix your data policy allows.

                 </p>
        </div>



         <div className="p-6 border-r border-b border-gray-600 cursor-pointer hover:bg-gray-900">
            <h2 className="text-xl font-bold">System integration</h2>
            <p className="text-gray-500 mt-2 ">
             APIs and integration layers that connect the systems you already run — including the ones with no API at all.

                 </p>
        </div>

    </div>

    </div>
  )
}

export default Services