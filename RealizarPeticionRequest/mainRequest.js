function cambiar(){
    var xmlhttp;    

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
    xmlhttp.open("GET", "archivo.txt", true);
    xmlhttp.send();
}