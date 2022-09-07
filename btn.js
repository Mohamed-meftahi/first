function calculer(){


    var valeur1 , valeur2 , resultat ;
    valeur1 = document.getElementById ("nbre1").value ;
    valeur2 = document.getElementById ("nbre2").value ;
    if ( document.getElementById ("add") . selected ) 
    {
       resultat =parseInt ( valeur1 ) + parseInt ( valeur2 );
    }     
    else if ( document.getElementById ("sous") . selected ) {
        resultat =parseInt ( valeur1 ) - parseInt ( valeur2 );
       }           
    else if ( document.getElementById ("mult") . selected ) {
             resultat = parseInt ( valeur1 ) * parseInt ( valeur2 );
         }
    else  {
            resultat = parseInt ( valeur1 ) / parseInt ( valeur2 );
        }

       document.getElementById ("btn").onclick=calculer();



}


