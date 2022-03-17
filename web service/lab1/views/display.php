
<html>
    <h1>Disuq weather status</h1>
   <?php
   require_once("../lab1.php");
    //date
    //city
    echo("<strong>City: </strong>".$_GET['city']);
   echo("<br>");
    //clear sky 
   echo("<strong>description: </strong>".$obj->weather[0]->description);
   echo("<br>");
    // //temperature min max
    echo("<strong>max Temp</strong> : ".($obj->main->temp_max-273)." °C");
    echo("<br>");
    // $obj->$main->temp_min;
    echo("<strong>min Temp</strong> : ".($obj->main->temp_min-273)." °C");
    echo("<br>");

    // //humidity
    echo("<strong>Humidity</strong> : ".$obj->main->humidity." %");
    echo("<br>");
    // //wind
    echo("<strong>wind speed</strong> : ".$obj->wind->speed." km/hr");
    echo("<br>");
   ?>
 
   
</html>