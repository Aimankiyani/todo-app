// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase,push,set,ref,onValue,update,remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwgy9NcM2-wbYZ69bTBL0nN-rq5wWl5YE",
  authDomain: "to-do-app-d4617.firebaseapp.com",
  projectId: "to-do-app-d4617",
  storageBucket: "to-do-app-d4617.appspot.com",
  messagingSenderId: "954382066937",
  appId: "1:954382066937:web:be18a187e24d9f4b8d2e28",
  measurementId: "G-SZJHEVG999"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const Dt = getDatabase();

var neww = document.getElementById('a');

window.add = function(){
    var obj = {
        todo: neww.value,
    } 
    var Userref = push(ref(Dt ,'Todos/'))
    obj.id = Userref.key 
    set(Userref,obj)
}

window.get = function(){
    var render = document.getElementById('render')
    onValue(ref(Dt,'Todos/'),
    function(todo){
        render.innerHTML = "";
        var Todos = Object.values(todo.val())
        for(var i=0; i < Todos.length; i++){
            var app = Todos[i]
            console.log(app.todo)
            render.innerHTML += `<p class="text-center d-flex justify-content-evenly ms-3 pt-4">Todo : ${app.todo}<button onclick="TodoUpdate('${app.id}')" class="btn btn-outline-success p-2 px-3  text-dark">EDIT</button><button onclick = "Tododel("${app.id}" )"class = btn btn-outline-danger p-2 px-4 mx-2 text-dark"> DELETE</button></p><br />`
        }
        var a = document.getElementById('a').value = ""
    })
}

get()
 window.Tododel = function(id){
   remove(ref(Dt,`Todos/`))
 }
 window.TodoUpdate = function(id){
    //console.log(id)
    var NewTodo = prompt("Enter update")
    update(ref(Dt ,`Todos/${id}`), {
        todo: NewTodo
    })
 }