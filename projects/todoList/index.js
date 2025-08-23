const form = document.querySelector("form");
const titleInput = form.querySelector("input[name='title']");
const contentInput = form.querySelector("input[name='content']");
const taskContainer = document.querySelector(".task-holder");


form.addEventListener("submit", function(e){
    e.preventDefault();
    const title = titleInput.value;
    const content = contentInput.value;
    if (formValidation(title)){
        taskContainer.innerHTML+=createTask(title, content);
        formReset();
    }else{
        alert("please write the title")
    }
})

function createTask(title, content){
    return`
    <article class="">
        <h3>${title}</h3>
        <p>${content}</p>
        <button onclick="taskCompleted(this)">not completed</button>
        <button onclick="taskEdit(this)">edit</button>
        <button onclick="this.parentElement.remove()">delete</button>
    </article>
    `
}

const formValidation =title=> title?true:false;

function taskEdit(ref){
    const title  = ref.parentElement.firstElementChild;
    const content = title.nextElementSibling;

    titleInput.value=title.textContent;
    contentInput.value=content.textContent;

    ref.parentElement.remove();
}

function formReset(){
    titleInput.value="";
    contentInput.value=""
}

function taskCompleted(ref){
    const p = ref.parentElement;
    if (p.classList.contains("task-completed")){
        ref.textContent="not completed";
        p.firstElementChild.style.textDecoration="";
        p.firstElementChild.nextElementSibling.style.textDecoration="";
        ref.nextElementSibling.style.display="inline"
        ref.nextElementSibling.nextElementSibling.style.display="inline"
        
    }else{
        ref.textContent="completed"
        p.firstElementChild.style.textDecoration="line-through";
        p.firstElementChild.nextElementSibling.style.textDecoration="line-through";
        ref.nextElementSibling.style.display="none"
        ref.nextElementSibling.nextElementSibling.style.display="none"
    }
    p.classList.toggle("task-completed");
}

