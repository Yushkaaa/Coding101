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
        <div class="all-content">
          <header class="header">
            <nav class="menu">
              <ul class="menu__list">
                <li><a href="#about">About</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </nav>
          </header>
          <!-- Main content -->
          <div class="main-block">

            <div class="banner">
              <div class="headline">
                <h1 class="headline__name">Ekaterina Yush</h1>
                <h6 class="headline__about">Frontend Developer in China</h6>
              </div>
            </div>
            
            <div class="portfolio-block">

              <!-- AboutMe section -->
              <div class="about">
                <div>
                  <h2 class="title">Portfolio</h2>
                  <h4>I'm a creative web developer</h4>
                  <h3 class="title">About me</h3>
                  <p class="text_block">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>

              <!-- Education section -->
              <div class="education">
                <div>
                  <h2 class="title">Education</h2>
                  <p class="text_block">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>

              <!-- Skills section -->
              <div class="skills">
                <h2 class="title">Skills</h2>
                <div class="skills-list">
                  <div class="column">
                    <h4>Frontend</h4>
                    <p>HTML</p>
                    <p>Bootstrap</p>
                    <p>Sass</p>
                    <p>CSS3</p>
                  </div>
                  <div class="column">
                    <h4>Backend</h4>
                    <p>SQL</p>
                    <p>Node.js</p>
                    <p>JavaScript</p>
                  </div>
                  <div class="column">
                    <h4>Design</h4>
                    <p>Photoshop</p>
                    <p>Zeplin</p>
                    <p>Adobe XD</p>
                  </div>
                </div>
              </div>

              <!-- Projects section -->
              <div class="projects">
                <h2 class="title">What I create</h2>
                <div class="projects-catalog"></div>
                <div class="projects-details"></div>
              </div>

            </div>

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