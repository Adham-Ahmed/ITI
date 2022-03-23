<?php
require_once("vendor/autoload.php");

$req=new RequestHandler();
$res=new ResponseHandler();
$method=$req->get__method();
$id=$req->get__resource_id();
//echo($id);

if($method=="GET"){
    echo(json_encode($res->handle_get($id)));
}
elseif ($method=="POST") {
    echo(json_encode($res->handle_post($id)));
}
else{
    echo(json_encode($method));//method invalid
}




?>