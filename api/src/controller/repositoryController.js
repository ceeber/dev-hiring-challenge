const db = require('../model/conexao');
const fetch = require('node-fetch');


class repositoryController{ 

async show(req, res){
  res.render('repositorio');
}

async search_language(req, res){
 
if (req.params.id == 1) {
  var name = "Ruby"; 
} else if (req.params.id == 2) {
  var name = "Python"; 
} else if (req.params.id == 3) {
  var name = "PHP"; 
} else if (req.params.id == 4) {
  var name = "Node"; 
} else {
  var name = "Assembly"; 
} 


const sqlSelect = "SELECT * FROM languageusers WHERE language = (?)";
  db.query(sqlSelect, [name], (err, result) => {
   res.render('language', { data: result})
  });
}


async all(req, res){    
 
  const page = req.body.pagina;

  if (!page){
   
    res.render('repositorio', { page: "Informar página para pesquisa"});
    return false;
  }

  await fetch(`http://api.github.com/search/repositories?q=`
      + "language:ruby "
      + "language:python "
      + "language:php "
      + "language:node "
      + "language:assembly"
      + `&sort=stars&order=desc&per_page=35&page=${page}`)
  .then(r => r.json())
  .then(json => {
         
    if (json.items) {

      json.items.forEach( function (itens){

        // Verifica se já tem o registro na base de dados, se houver não insere de novo 
        const sqlSelect = "SELECT count(*) as exist, id FROM languageusers WHERE cod_item = (?) and language= (?)";
        db.query(sqlSelect, [itens.id,itens.language], (err, result) => {
       
          
          if (result[0].exist == 0){
              
              const sqlInsert = "INSERT INTO languageusers (cod_item, name, full_name, url, language, created_at, update_at) VALUE (?,?,?,?,?,NOW(),NOW())";  
              db.query(sqlInsert, [itens.id, itens.name, itens.full_name , itens.html_url, itens.language], (err, result)=> {   
             
              });
          } 
          
          
        });
        
      });
    }
     
    res.render('repositorio', { git: json.items, page: page});
  })
  .then(json => res.send(json))
  
 }

}

module.exports = new repositoryController();