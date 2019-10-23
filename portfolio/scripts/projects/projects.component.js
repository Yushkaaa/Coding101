import{ProjectsCatalogComponent} from "./project-catalog/project-catalog.component.js"
import{ProjectsDetailsComponent} from "./project-details/project-details.component.js"
import{ProjectsService} from"./project.service.js"

export class ProjectsComponent{
    constructor({element}){
        this._element = element;
        this._render();
        this._initCatalog(); 
        this._initDetails();
    }
    _initCatalog(){
        this._catalog = new ProjectsCatalogComponent({
            element: this._element.querySelector('.projects-catalog'),
            projects: ProjectsService.getAll()
        });
        this._catalog.onEvent('project-select', ({detail: projectId})=>{
            this._projectId = projectId;
            const ProjectsDetails = ProjectsService.getOneById(projectId);
            this._catalog.hide()
            this._details.show(ProjectsDetails)
        });
    }

    _initDetails(){
        this._details = new ProjectsDetailsComponent({
            element: this._element.querySelector('.projects-details')
        });
        this._details.onEvent('back',()=>{
            this._catalog.show();
            this._details.hide();
        })
        // при нажатии back каталог показывается детали скрываются 
    }

    _render(){
        this._element.innerHTML = ` 
        <div class="all-cont"> 
        <header>
        <nav class="flex">
          <div class="menu">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
            <!-- <div class="language">
              <img src="./resources/images/arton93.jpeg" alt="">
              <img src="./resources/images/s1200.gif" alt="">
             </div> -->
          </div>
    
      </nav>
      </header>
    
      <!-- Main content -->
      
      <main>
     
        <div class="banner">
          <div class="headline">
            <h1>Ekaterina Yush</h1>
            <h6>Frontend Developer in China</h6>
            <div class="icon">
            <a href="https://github.com/Yushkaaa" target="_blank"><svg width="30px" height="28px" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
            </a> 
             <a href="https://www.linkedin.com/in/ekaterina-yush-395040146/" target="_blank"><svg  width="30px" height="28px" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" class="svg-inline--fa fa-linkedin fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
             </a>
             </div>
          </div>
        </div>
    
        <!-- <section class="mainblock">
          <div class = "images">
            <h1>Ekaterina Yush</h1>
            <h6>Frontend Developer in China</h6>
            
            <img src="./resources/css/dis.png" alt="banner">
    
          </div>
        </section> -->
        <!-- About me -->
        <div id="about"> 
            <div>
                <h2 class="title">Portfolio</h2>
                <h4>I'm a creative web developer</h4>
                <h3 class="title">About me</h3>
    
                <p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
          </div>
    
        <!-- Education -->
        <section id="education">
            <div>
                <h2 class="title">Education</h2>
                <p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
        </section>
        <!-- Skills section -->
        <div id="skills">
            <h2 class="title">Skills</h2>
            <div class="skills-list">
              <div class="column">
                  <h3>Frontend</h3>
                  <p>HTML</p>
                  <p>Bootstrap</p>
                  <p>Sass</p>
                  <p>CSS3</p>
              </div>
              <div class="column">
                  <h3>Backend</h3>
                  <p>SQL</p>
                  <p>Node.js</p>
                  <p>JavaScript</p>
              </div>
              <div class="column">
                  <h3>Design</h3>
                  <p>Photoshop</p>
                  <p>Zeplin</p>
                  <p>Adobe XD</p>
              </div>
            </div>
        </div>
    
        <!-- Portfolio -->
        <div id="projects">
          <h2 class="title">What I create</h2>

          <div class="projects-catalog"></div>
          <div class="projects-details"></div>


          
          
         
    
        </div>
      </main>
    
    
    <!-- ContactMe -->
    <div class="contact-me" id="contact-me" >
    <div class="contact-container">
      <div>
        <h2 class="contact-title">Want to work together?</h2>
      </div>
      <div class="contact-form-container">
          <form class="contact-form">
            <input type="text" name="name" placeholder="Name" required><br>
            <input type="email" name="email" placeholder="Email" required><br>
            <input type="text" name="subject" placeholder="Subject"><br>
            <textarea rows="10">Write your message here...</textarea><br>
            <input type="submit" value="send">
          </form>
      </div>
    </div>
    </div>
      <!-- Footer -->
      <footer>
        <div class="flex">
          
          <p>Copyright &copy; 2019 Ekaterina. All rights reserved.</p>
       
        </div>
      </footer>
      </div>
      
      `
        
    }
}