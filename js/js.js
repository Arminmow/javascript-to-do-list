const input = document.querySelector('input');
const btn = document.querySelector('.addtask > button');
const x = document.getElementsByClassName('MyList');

btn.addEventListener('click', addList);
input.addEventListener('keyup', function (event){
    if (event.keyCode === 13){
        btn.click();
    }
})

function addList (){
    const notCompleted = document.querySelector('.notcompleted');
    const completed = document.querySelector('.completed');

    const newLi = document.createElement('li');
    newLi.className = 'MyList';
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';

    if (input.value !==''){
        newLi.textContent = input.value;
        input.value='';
        notCompleted.appendChild(newLi);
        newLi.appendChild(delBtn);
        newLi.appendChild(checkBtn);

    }




    checkBtn.addEventListener('click', function (){
        const LiParent =this.parentNode;
        LiParent.remove();
        completed.appendChild(LiParent);
        checkBtn.style.display='none';

    })

    delBtn.addEventListener('click', function (){
        const LiParent =this.parentNode;
        LiParent.remove();

    })
}
