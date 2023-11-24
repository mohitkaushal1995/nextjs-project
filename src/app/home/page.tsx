
"use client"


import Link from "next/link";

function Home() {
 

  return (
   

      <div className="container">
      <main>
    <h1 className="text-body-emphasis">Get started with Bootstrap</h1>
    <p className="fs-5 col-md-8">Quickly and easily get started with Bootstrap's compiled, production-ready files with this barebones example featuring some basic HTML and helpful links. Download all our examples to get started.</p>

    <div className="mb-5">
      <Link href="/contact" className="btn btn-primary btn-lg px-4">contact us </Link>
    </div>


    <div className="row g-5">
      <div className="col-md-6">
        <h2 className="text-body-emphasis">Starter projects</h2>
        <p>Ready to go beyond the starter template? Check out these open source projects that you can quickly duplicate to a new GitHub repository.</p>
        <ul className="list-unstyled ps-0">
          <li>
            <Link className="icon-link mb-1" href="https://github.com/twbs/examples/tree/main/icons-font" rel="noopener" target="_blank">
               <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"/></svg> 
              Bootstrap npm starter
            </Link>
          </li>
          <li>
            <Link className="icon-link mb-1" href="https://github.com/twbs/examples/tree/main/parcel" rel="noopener" target="_blank">
               <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"/></svg> 
              Bootstrap Parcel starter
            </Link>
          </li>
          <li>
            <Link className="icon-link mb-1" href="https://github.com/twbs/examples/tree/main/vite" rel="noopener" target="_blank">
               <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"/></svg>
              Bootstrap Vite starter
            </Link>
          </li>
          <li>
            <Link className="icon-link mb-1" href="https://github.com/twbs/examples/tree/main/webpack" rel="noopener" target="_blank">
               <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"/></svg> 
              Bootstrap Webpack starter
            </Link>
          </li>
        </ul>
      </div>

      <div className="col-md-6">
        <h2 className="text-body-emphasis">Guides</h2>
        <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
        <ul className="list-unstyled ps-0">
          <li>
            <Link className="icon-link mb-1" href="../getting-started/introduction/">
               <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"/></svg> 
              Bootstrap quick start guide
            </Link>
          </li>
          <li>
            <Link className="icon-link mb-1" href="../getting-started/webpack/">
               <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"/></svg> 
              Bootstrap Webpack guide
            </Link>
          </li>
          <li>
            <Link className="icon-link mb-1" href="../getting-started/parcel/">
               <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"/></svg> 
              Bootstrap Parcel guide
            </Link>
          </li>
          <li>
            <Link className="icon-link mb-1" href="../getting-started/vite/">
               <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"/></svg> 
              Bootstrap Vite guide
            </Link>
          </li>
          <li>
            <Link className="icon-link mb-1" href="../getting-started/contribute/">
               <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"/></svg> 
              Contributing to Bootstrap
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </main>


</div>
     
  );
}

export default Home;