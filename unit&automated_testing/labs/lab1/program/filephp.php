<?php

function factx($num)
{
    if(is_numeric($num) && is_int($num) && $num>0)
    {
        $factorial = 1;  
    for ($x=$num; $x>=1; $x--)   
    {  
        $factorial = $factorial * $x;  
    }  
    }
    elseif($num==0){
        return 1;
    }
    else{
        return 'null';
    }
return $factorial; 
}
?>