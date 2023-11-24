import Link from "next/link";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">
          &copy; 2023 Company, Inc
        </p>

        <Link
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap" />
          </svg>
        </Link>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <Link href="/home" className="nav-link px-2 text-body-secondary">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link px-2 text-body-secondary">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/post" className="nav-link px-2 text-body-secondary">
              Post
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/userlist" className="nav-link px-2 text-body-secondary">
              Userlist
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
