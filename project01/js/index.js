window.onload = init;






function init() {
    let select = document.querySelector('.select');
    let from_where = select.getElementsByTagName('a');
    let design_all_crad = document.querySelector('.design_all_crad');

    for (let i = 0; i < from_where.length; i++) {
        from_where[i].onclick = change;
    }
}

function change(e) {

    var select = document.querySelector('.select');
    var from_where = select.getElementsByTagName('a');
    var design_all_crad = document.querySelectorAll('.design_all_crad');
    var target = e.target;
    for (let i = 0; i < from_where.length; i++) {
        from_where[i].classList.remove('changeColor');
        from_where[i].index=i;
       
    }
    for (let i = 0; i < design_all_crad.length; i++) {
        design_all_crad[i].style.display = "none";
       
    }
 
    design_all_crad[target.index].style.display = "flex";
    target.classList.add('changeColor');

}