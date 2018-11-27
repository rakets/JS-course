var Project=(function(){ 
  function Project(idProject,title,cost,kolvoStrok,status){
        this.idProject=idProject;
        this.title=title;
        this.cost=cost;
        this.kolvoStrok=kolvoStrok;
        this.status=true;
    }
    Project.prototype.getStatus=function(){
        if(this.status){
            return true;
        } else {
            return false;
        }
    }
    Project.prototype.getTitle=function(){
        return this.title;
    }
    Project.prototype.getIdProject=function(){
        return this.idProject;
    }
    
    Project.prototype.getKolStrok=function(){
        return this.kolvoStrok;
    }
    Project.prototype.getCost=function(){
        return this.cost;
    }
    Project.prototype.setStatus=function(bool){
        this.status=bool;
    }
      return Project;
})()
