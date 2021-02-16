//DOM Load 
document.addEventListener('DOMContentLoaded', () => {


    usingCall();
    usingApply();
    usingBind();


});

//Brad Person Object 
const Brad = {
    firstName: "Brad",
    lastName: "Bansely",
    fullName: function(ui_place, message) {

        ui_place.innerHTML = `${message} ${this.firstName} ${this.lastName}`;

    }
}

function usingCall() {

    //Cerscy Person Object 
    const Cerscy = {
        firstName: "Cerscy ",
        lastName: "Lanster",
    }

    //1. Borrow fullName using call
    //2. Pass call_demo[as ui_place] , Hi I am ,[message]
    Cerscy.getId.call(newCerscy,'wan','biss');

}

function usingApply() {

    //Jon Person Object 
    const Jon = {
        firstName: "Jon",
        lastName: "Snow",
    }

    //1. Borrow fullName using apply
    //2. Pass apply_demo[as ui_place] and Hi I am ,[as message] as array
    Jon.getId.apply(newJon,['wanq','bisser']);

}

function usingBind() {

    //Daenerys Person Object 
    const Daenerys = {
        firstName: "Daenerys",
        lastName: "Targaryen",
    }

    //1. Borrow fullName using bind
    const newFun = Daenerys.getId.apply(newDenarys,['wanq','bisser']);
    //2. Pass bind_demo[as ui_place] , Hi I am ,[as message]


}