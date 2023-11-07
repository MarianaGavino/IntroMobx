import { makeAutoObservable } from "mobx";

class Store {
    constructor(){
        makeAutoObservable(this) //this pasa como argumento de makeAutoObservable
    }
    numero = 0;

    inc = () => {
        this.numero += 1
    }
}

const store = new Store()

export default store;

//this: representa al objeto que se instancie con la clase Store