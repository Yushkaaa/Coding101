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

export const ProjectsServece = new class{
    getAll(){
        //
        return mockProjects;
    }
    getOneById(id){
        return{}
    }
}