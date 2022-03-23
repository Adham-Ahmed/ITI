<?php

require_once("vendor/autoload.php");

class RequestHandler {
    private $__method;
    private $__parameters = array();
    private $__resource;
    private $__resource_id;
    private $__allowed_methods= array("GET","POST","DELETE","PUT");
    
    
    function get__method() {
        if($this->validate($this->__method,true))
        {return $this->__method;}
        else {
            return array("error" => "method not allowed!");
        }
        
    }

    function get__parameters() {
        return $this->__parameters;
    }

    function get__resource() {
        //http://localhost/web%20service/lab2/task2/index.php/glasses/5
        $this->__resource=explode("/",$_SERVER["REQUEST_URI"])[5];
        return $this->__resource;
    }

    function get__resource_id() {

          //http://localhost/web%20service/lab2/task2/index.php/glasses/5
         
            $idx=explode("/",$_SERVER["REQUEST_URI"])[6];
            $this->__resource_id=$idx;
          
          
          
    
        return $this->__resource_id;
    }

    
 

    public function __construct() {

        $this->__method=$_SERVER["REQUEST_METHOD"];

            
        
        
    }

     //***********************************************************************************************************
    //this function should output or return the request elements (resource, method, parameters and resource id)
	//if $output is false the function should returns otherwise it should echo the response in JSON formats
	//***********************************************************************************************************
    public function scan($output=true){
       
     
        
    }
	//***********************************************************************************************************
    //this function should validate the request 
	//if $output is false the function should returns the result otherwise it should echo the results in JSON formats
	//$correct_resource : The resource which the service should accepts, "items" in this example. 
	//***********************************************************************************************************
    public function validate($correct_resource,$output = true){
        if (in_array($this->__method, $this->__allowed_methods)) {
            return 1;
        }else {
            return 0;
        }
      
    }
    
    

}
