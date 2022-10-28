import React from "react";


function Footer() {

  return (

    <footer class="page-footer fixed-bottom font-small" style={{backgroundColor: '#5d7ce9'}}>

      <div class="container" >
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a
              class="btn-floating btn-fb mx-1"
              href="https://github.com/Cinderbeast"
            >
              <i class="fab fa-github" style={{color: 'black'}}> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              class="btn-floating btn-li mx-1"
              href="https://www.linkedin.com/in/vanessa-maldonado-90668110a/"
            >
              <i class="fab fa-linkedin-in" style={{color: 'black'}}> </i>
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-copyright text-center">
        © 2021 Copyright:
        <a href="https://github.com/Cinderbeast/20-React-Portfolio" style={{color: 'black'}}>
          {" "}
          Vanessa Maldonado
        </a>
      </div>
    </footer>
  );
}

export default Footer;