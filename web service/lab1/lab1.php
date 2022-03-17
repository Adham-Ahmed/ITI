<?php

if(isset($_GET['city'])){
    $city=$_GET['city'];
};
require_once("config.php");
try{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    //curl_setopt($ch, CURLOPT_HEADER, TRUE);
    //curl_setopt($ch, CURLOPT_NOBODY, TRUE); // remove body
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    $res = curl_exec($ch);
}
catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}
    $obj=json_decode($res);
    $cities=json_decode('eg.json');
    curl_close($ch);

?>