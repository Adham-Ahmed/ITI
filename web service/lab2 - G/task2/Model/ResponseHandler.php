<?php

require_once("vendor/autoload.php");

class ResponseHandler {

    private $db;  //an object from MYSQLHandler class
	
	
   //$db : an object from MYSQLHandler class
    public function __construct() {
		$this->db=new MySQLHandler("items");
		
     
    }

    //***********************************************************************************************************
	//use this function for output all success responses
	//it has a log parameters just incase you want to log the response (bonus)
	//$data could be any thing you send but mostlikely it will be an array or a confirmation message	
	//***********************************************************************************************************
    public function output_with_success($data) {


    }
    
	 //***********************************************************************************************************
	//use this function for output and log any error
	//it has a log parameters just incase you want to log the response (bonus)
	//$error message is the text you want to display for the client of your API 	
	//***********************************************************************************************************
    public static function output_with_error($code = 400, $error_msg, $log = null) {

    }
    
	 //***********************************************************************************************************
	//use this function to handle the GET HTTP Verb
	//$id is the resource_id	
	//***********************************************************************************************************
    public function handle_get($id) {

		if((is_numeric($id)))
		{
			return $this->db->get_record_by_id($id);
		}
		elseif(!is_numeric($id) && $id){
			return array("error"=> "Resource doesn't exist");
			http_response_code(404);
		}
		else 
		{
			return $this->db->get_data([],0);
		}
    
    }
     //***********************************************************************************************************
	//use this function to handle the POST HTTP Verb
	//$params is sent params for a new resource
	//***********************************************************************************************************
    public function handle_post($params) {

     
    }

	//***********************************************************************************************************
	//use this function to handle the PUT HTTP Verb
	//$params is sent params for a new resource
	//$id is the resource_id
	//***********************************************************************************************************
    public function handle_put($params, $id) {
     
    }
    //***********************************************************************************************************
	//use this function to handle the GET HTTP Verb
	//$id is the resource_id
	//***********************************************************************************************************
    public function handle_delete($id) {
 
    }

}
