import {Link} from 'react-router-dom';

const Nav = (props) => {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to="/">Adam Kassir</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">CV</Link></li>
                        <li className="nav-item"><a href="/cvs/Adam_Kassir_cv_2022_05.pdf" className="nav-link" target = "_blank">Télécharger cv pdf</a></li>
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="https://www.linkedin.com/in/adam-kassir/" target="_blank"><i className="fa fa-linkedin"></i> Linkedin</a></li>
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="https://github.com/spike59" target="_blank"><i className="fa fa-github"></i> Github</a></li>
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="https://www.codingame.com/profile/572fdbbe3b0d91323fae312e8d31ebed8572483" target="_blank">Coding game</a></li>
                                        
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Nav