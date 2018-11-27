var Proger=(function(){

    function Proger(idProger,name,lastName,level){
        this.name=name;
        this.status=0;
        this.lastName=lastName;
        this.idProger=idProger;
        this.level=level;
        this.kolvoStrok=0; 
        this.costStrokLevel=0;
    }
    Proger.prototype.getLevel=function(){
        return this.level;
    }
    Proger.prototype.getName=function(){
        return this.name;
    }
    Proger.prototype.getLastName=function(){
        return this.lastName;
    }
    Proger.prototype.getIdProger=function(){
        return this.idProger;
    }
    Proger.prototype.kolStrokCode=function(){
        if(this.level=="junior") {
            this.kolvoStrok=15;
            this.costStrokLevel=18;
        } else {
            if(this.level=="midle"){
                this.kolvoStrok=40;
                this.costStrokLevel=35;
            } else {
                this.kolvoStrok=100;
                this.costStrokLevel=60;
            }
        }
    }
    Proger.prototype.getKolStrok=function(){
        return this.kolvoStrok;
    }
    Proger.prototype.getCostStrokLevel=function(){
        return this.costStrokLevel;
    }
    Proger.prototype.getStatus=function(){
        if(this.status) {
            return 0;
        } else {                                
            return 1;
        }
    }
    Proger.prototype.setStatus=function(bool){
        this.status=bool;
    }
        return Proger;
})()