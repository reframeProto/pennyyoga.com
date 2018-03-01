var modalContainer = document.querySelector('.classes-flexbox');

modalContainer.addEventListener('click',function(e){
    e.preventDefault();

    var modalToggle = e.target.closest('.view-more-button');
    console.log(e);
    if (! modalToggle) return;

    var modal = modalToggle.parentNode.nextElementSibling;
    var modalClose = modal.querySelector('.modal-close');
    modal.classList.add('is-open');
    modalClose.addEventListener('click',function(){
        modal.classList.remove('is-open');
    });

});