function openMe(inside){
    var i,maincontent;

    maincontent = document.getElementsByClassName("maincontent");
        for(i=0;i<maincontent.length;i++){
            maincontent[i].style.display = "none";
        }
        document.getElementById(inside).style.display = "block";
}