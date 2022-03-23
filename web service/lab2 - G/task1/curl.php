<?php
require("vendor/autoload.php");
if(isset($_GET['city'])){
    $city=$_GET['city'];
}
else{
    $city="alexandria";
}

    require("config.php");
    $url=str_replace("{{city}}",$city,$url);
    $client=new GuzzleHttp\Client();



   try {
    $res=$client->get($url);
   } catch (Exception $e) {
       //throw $th;
   }
    $cities=json_decode('eg.json');
    $obj=json_decode($res->getBody());

?>