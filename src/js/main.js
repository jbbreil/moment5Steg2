"use strict"

// variabler 

let url = "http://localhost/Moment5steg2/restful";

let coursesEl = document.getElementById('courses-output');

let addCoursebtn = document.getElementById('addCourse');
let editCoursebtn = document.getElementById('editCourse');
let nameInput = document.getElementById('name');
let codeInput = document.getElementById('code');
let progressionInput = document.getElementById('progression');
let syllabusInput = document.getElementById('syllabus');

// handelselyssnare

window.addEventListener('load', getCourses);
addCoursebtn.addEventListener('click', addCourse);



function getCourses() {
    coursesEl.innerHTML = '';

    fetch(url)

    .then(response => response.json())   

    .then(data => { 
        data.forEach(course => {
            coursesEl.innerHTML += 
            '<tbody> '+
            '<tr>'+
            '<td>' +course.code+ '</td>'+
            '<td>'+course.name+ '</td>'+
            '<td>'+course.progression+'</td>'+
            '<td><a target="_blank" href='+course.syllabus+'>'+'Webblänk</a></td>'+
            "<td title='Radera'><button onclick='deleteCourse(\""+course.id+"\")'><i class='fa fa-trash'></i></button></td>"+
            "<td title='Redigera'><button onclick='editCourse(this, \""+course.id+"\")' id='editCourse'><i class='fa fa-edit'></i></button></td>"+
            '</tr>'+
            '</tbody> '
            
            
        })
    })

}

function deleteCourse(id){

    let url = "http://localhost/Moment5steg2/restful?id=";
    fetch(url + id, {
        //url: "courses/delete/"+id, 
        method: "DELETE",
        dataType: "json",
        cookie: false
      
    })
    
    .then(response => response.json())
    .then(data => {
        console.log(data);
        location.reload();
        //ladda om lista
        //loadCourses();
    })
.catch(error => {
    console.log('Error: ', error);
})

} 

// uppdatera kurn

/*function editCourse(val, id){

    let url = "http://localhost/Moment5.2/restful?id=";

    const formData = new FormData();
    
    formData.append('code', val.code);
    formData.append('name', val.name);
    formData.append('progression', val.progression);
    formData.append('syllabus', val.syllabus);
    
    fetch(url, + id, {
      method: 'PUT',
      body: formData
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });

} */

// Lägga till kurs 

function addCourse() {

    // lagra i variabelt användarens input från formulär
    let code = codeInput.value;
    let name = nameInput.value;
    let progression = progressionInput.value;
    let syllabus = syllabusInput.value;

    // lagra de sammanlagda variablerna som ett objekt 
    let course = {'code':code, 'name':name, 'progression':progression, 'syllabus':syllabus}

    // göra om i json fromat och skicka i självsa anropet

    let url = "http://localhost/Moment5steg2/restful";

    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(course),
      
    })
    
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        getCourses();
        //ladda om lista
        //loadCourses();
    })
.catch(error => {
    console.log('Error: ', error);
})

} 
