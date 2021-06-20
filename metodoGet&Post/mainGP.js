function cambiar(){
    var xmlhttp;    

    var data = "name=Procode&saludo=Hola"

    if(window.XMLHttpRequest){
        //NAVEGADORE MODERNOS
        xmlhttp = new XMLHttpRequest();
        console.log(xmlhttp)
    } else if(window.ActiveXObject){
        // codigo  para IE
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = acciones;

    function acciones() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("demo").innerHTML=xmlhttp.responseText;           
        }
        
    }
    xmlhttp.open("POST", "enviar.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(data);
}