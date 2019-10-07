export class Projects{
    constructor({element}){
        this._element = element;
        this._render = render;

    }
    _render(){
        this._element.innerHTML = ` <div class="projects-list">
        <!-- 1Adhoc -->
        <div class="project">
          <div class="image">
            <a href="./resources/website/Adhoc/index.html"  target="_blank"> <img class="img-responsive" src="resources/images/adhoc.jpeg"> </a>
          </div>
          <div class="details">
            <h3>Adhoc</h3>
            <h5><a href="resources/website/Adhoc/adhoc.png" target="_blank">Design specification</a></h5>
          </div>
        </div>
        <!-- 2ColmarAcademy -->
        <div class="project">
            <div class="image">
              <a href="./resources/website/ColmarAcademy/index.html"  target="_blank"> <img class="img-responsive" src="resources/images/ColmarAcademy.jpeg"></a>
            </div>
            <div class="details">
              <h3>ColmarAcademy</h3>
              <h5><a href="resources/website/ColmarAcademy/colmar-academy-spec.png" target="_blank">Design specification</a></h5>
            </div>
          </div>
        <!-- 3Jumpstart -->
        <div class="project">
            <div class="image">
              <a href="./resources/website/jumpstart/index.html"  target="_blank"> <img class="img-responsive" src="resources/images/jumpstart.jpeg"></a>
            </div>
            <div class="details">
              <h3>Jumpstart</h3>
              <h5><a href="resources/website/jumpstart/jumpstart-specs.jpg" target="_blank">Design specification</a></h5>
            </div>
          </div>
        <!-- 4Secret Agent Supply -->
        <div class="project">
            <div class="image">
              <a href="./resources/website/SecretAgentSupply/index.html"  target="_blank"> <img class="img-responsive" src="resources/images/SecretAgentSupply.jpeg"></a>
            </div>
            <div class="details">
              <h3>Secret Agent Supply</h3>
              <h5><a href="resources/website/SecretAgentSupply/redline.jpg" target="_blank">Design specification</a></h5>
            </div>
          </div>
        <!-- 5Excursion -->
        <div class="project">
            <div class="image">
              <a href="./resources/website/Excursion/index.html" target="_blank"> <img class="img-responsive" src="resources/images/Excursion.jpeg"></a>
            </div>
            <div class="details">
              <h3>Excursion</h3>
              <h5><a href="resources/website/Excursion/index.html" target="_blank">Design specification</a></h5>
            </div>
          </div>
        <!-- Tea Cozy -->
        <div class="project">
            <div class="image">
              <a href="./resources/website/Tea Cozy/index.html"  target="_blank"> <img class="img-responsive" src="resources/images/Tea Cozy.jpeg"></a>
            </div>
            <div class="details">
              <h3>Tea Cozy</h3>
              <h5><a href="resources/website/Tea Cozy/img-tea-cozy-redline.jpg" target="_blank">Design specification</a></h5>
            </div>
          </div>
      </div>`
    }
}