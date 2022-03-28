<?php

namespace App;

class User 
{
 public $name;
 public $email;
    public function __construct()
    {
        $this->name='adham';
        $this->email='adham@gmail.com';
        
    }
    public function name($inName='adham')
    {
        if($inName)
        {
            $this->name=$inName;
        }
        return $this->name; 
    }

    public function email($inMail='adham@gmail.com')
    {
        if($inMail)
        {
            $this->email=$inMail;
        }
        return $this->email;
    }

    public function delete()
    {
        
    }

    
    
}

?>