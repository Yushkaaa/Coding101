const mockProjects = [{
    "id":"adhoc",
    "imageUrl":"/resources/images/adhoc.jpeg",
    "name":"Adhoc"

},
{
    "id":"colmarAcademy",
    "imageUrl":"/resources/images/ColmarAcademy.jpeg",
    "name":"ColmarAcademy"

},{
    "id":"jumpstart",
    "imageUrl":"/resources/images/jumpstart.jpeg",
    "name":"Jumpstart"

},{
    "id":"secretAgentSupply",
    "imageUrl":"/resources/images/SecretAgentSupply.jpeg",
    "name":"Secret Agent Supply"

},{
    "id":"excursion",
    "imageUrl":"/resources/images/Excursion.jpeg",
    "name":"Excursion"

},{
    "id":"teaCozy",
    "imageUrl":"/resources/images/Tea Cozy.jpeg",
    "name":"Tea Cozy"

}]
const mockProject = {
    "projectName":"ColmarAcademy",
    "projectDetails":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    "images": "/resources/images/ColmarAcademy.jpeg"
}
export const ProjectsService = new class{
    getAll(){
        //
        return mockProjects;
    }
    getOneById(id){
        return mockProject
    }
}