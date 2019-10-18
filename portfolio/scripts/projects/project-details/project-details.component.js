import { BaseComponent } from "../../shared/components/base.component.js";

export class ProjectsDetailsComponent extends BaseComponent{
   
  show(project){
    this._project = project;
    this._render();
    super.show(); 
  }
     
     
    _render(){
        this._element.innerHTML = `
        <body>
        <!-- Header Section -->
         <header>
           <nav class="flex">
             <div class="menu">
              <h2>Ekaterina Yush</h2>
             </div>
         </nav>
         </header>
         <main class = "main-cont>
             <div class="img-block">
               <p><button>Back</button></p>
               <img src="resources/images/adhoc.jpeg">
             </div>  
             <div class="info-block">
               <div class="project-name">
                   <h2>Adhoc</h2>
               </div>
               <div class="project-info">
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
               </div>
               <p><button>See full version</button></p>
       
             </div>
             
         </main>
       
       
       
       </body>
        `
    }}