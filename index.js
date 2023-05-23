class ComunaCollection{
  constructor(items){
    this.items = items
  }

  static get(){
    return new ComunaCollection(document.querySelectorAll("path"))
  }
}



class ComunaPath{
  constructor(element){
    this.element = element
}
  
  fill(color){
    this.element.setAttribute("fill",color)
  }
  setPopulation(population){
    this.element.setAttribute("population",population)    
  }
  
  static findByName(name){
    return new ComunaPath(document.getElementById(name))
  }
}
ComunaPath("Lo_Barnechea").fill("blue")
comunaPath("Providencia").fill("red")

