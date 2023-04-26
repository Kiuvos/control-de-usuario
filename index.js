let tabla=[
    {id:'83122998', nombre:'Maria',apellido:'Gomez',sexo:'Femenino',direccion:'Carrera 4',correo:'Mariagomez@gmail.com',sangre:'o+',numero:'+573235550123'},
    {id:'34522998', nombre:'Carlos',apellido:'Rosales',sexo:'Masculino',direccion:'Calle 7',correo:'Carlosrosales@gmail.com',sangre:'o-',numero:'+573234240567'},
    {id:'63128498', nombre:'Jesus',apellido:'Gonzales',sexo:'Masculino',direccion:'Avenida 8',correo:'Jesusgonzales@gmail.com',sangre:'a+',numero:'+573425550834'}
]

let cuerpotabla=document.getElementById('tbody')
let i=1

const listar=()=>{
    let usuarios="";
    for (let i = 0; i < tabla.length; i++) {
        usuarios+=`<tr><th scope="row">${tabla[i].id}</th><td>${tabla[i].nombre}</td><td>${tabla[i].apellido}</td><td>${tabla[i].sexo}</td><td>${tabla[i].direccion}</td><td>${tabla[i].correo}</td><td>${tabla[i].sangre}</td><td>${tabla[i].numero}</td></tr>`
    
    }
    cuerpotabla.innerHTML=usuarios;
}
const registrar=()=>{
    const id=document.getElementById('id').value
    const nombre=document.getElementById('nombre').value
    const apellido=document.getElementById('apellido').value
    const sexo=document.getElementById('sexo').value
    const direccion=document.getElementById('direccion').value
    const correo=document.getElementById('correo').value
    const sangre=document.getElementById('sangre').value
    const numero=document.getElementById('numero').value
    if (!id) {
        alert('Ingrese el ID.')
        return
    }
    if (!nombre) {
        alert('Ingrese el nombre.')
        return
    }
    if (!apellido) {
        alert('Ingrese el apellido.')
        return
    }
    if (!sexo) {
        alert('Ingrese su sexo.')
        return
    }
    if (!direccion) {
        alert('Ingrese la direccion.')
        return
    }
    if (!correo) {
        alert('Ingrese el correo.')
        return
    }
    if (!sangre) {
        alert('Ingrese el tipo de Sangre.')
        return
    }
    if (!numero) {
        alert('Ingrese su numero.')
        return
    }

    for (let i = 0; i < tabla.length; i++) {
        if (tabla[i].id == id) {
            alert('El ID ingresado ya existe. Ingrese un ID diferente.')
            return
        }
    }

    cuerpotabla.innerHTML+=`<tr><th scope="row">${id}</th><td>${nombre}</td><td>${apellido}</td><td>${sexo}</td><td>${direccion}</td><td>${correo}</td><td>${sangre}</td><td>${numero}</td></tr>`
    i++
    const nuevo={id,nombre,apellido,sexo,direccion,correo,sangre,numero}
    tabla.push(nuevo)
}