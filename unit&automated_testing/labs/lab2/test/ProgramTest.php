<?php 
use App\User;
class ProgramTest extends PHPUnit\Framework\TestCase {

    public static $user;

    // public function __construct()
    // {
    //    $this->user =new User();
        
    // }
    public static function  setUpBeforeClass():void{
        self::$user=new User();
    }
    public function testTrue_nameGetter(){
        return $this->assertTrue(self::$user->name()=="adham");
    }

    public function testTrue_nameSetter(){
        return $this->assertTrue(self::$user->name('amal')=='amal');
    }

    public function testTrue_emailGetter(){
        return $this->assertTrue(self::$user->email()=='adham@gmail.com');
    }

    public function testTrue_email(){
        return $this->assertTrue(self::$user->email('amal@yahoo.com')=='amal@yahoo.com');
    }

    

    
    
}
//$prog=new ProgramTest();
//echo($prog->testTrue());
