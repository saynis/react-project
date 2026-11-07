

function Footer() {
  return (
    <footer className="mt-12  bg-[#0A0C19] border-t border-gray-600">
    <div className="max-w-7xl mx-auto ">
      
      <div className="grid grid-cols-5">
            
            {/* logo */}
         <div className="p-4">
          <h1 className="text-2xl text-[#6EE07F] font-bold mb-4">Saynis</h1>
          <p
          className="text-md text-gray-600 mb-4"
          >We build custom software and AI systems 
            for institutions in Ethiopia and the Horn of Africa.
            </p>

            <span className="text-[#6EE07F]">saynis@gmail.com</span> <br />
            <span className="text-[#6EE07F]">0930735543</span>
            <span>jigjiga somali region</span>
         </div>



         {/* servicess */}
         <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">services</h2>
          <ul className="text-md text-gray-600 space-y-2">
            <li>software developement</li>
            <li>web developemnt</li>
            <li>mobile development</li>
            <li>Ai solutions</li>
            <li>UI UX design</li>
          </ul>
         </div>

         {/* solutions */}
            <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">solutions</h2>
          <ul className="text-md text-gray-600 space-y-2">
            <li>Government systems</li>
            <li>NGO systems</li>
            <li>Enterprise service</li>
            <li>ERP solutions</li>
            <li>Data platforms</li>
          </ul>
         </div>

      </div>

    </div>

     </footer>
  )
}

export default Footer