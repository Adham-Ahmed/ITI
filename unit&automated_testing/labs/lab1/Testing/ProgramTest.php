<?php 
include("./program/filephp.php");
class ProgramTest extends PHPUnit\Framework\TestCase {

    public function testTrue_0_fact_is_1(){
        return $this->assertTrue(factx(0)==1);
    }

    public function testTrue_1_fact_is_1(){
        return $this->assertTrue(factx(1)==1);
    }
    public function testTrue_5_fact_is_120(){
        return $this->assertTrue(factx(5)==120);
    }
    public function testTrue_10_fact(){
        return $this->assertTrue(factx(10)==(factx(10-1))*10);
    }
    public function testTrue_negt_3_fact_is_NULL(){
        return $this->assertTrue(factx(-3)=='null');
    }

    public function testTrue_negt_1point5_fact_is_NULL(){
        return $this->assertTrue(factx(1.5)=='null');
    }

    public function testTrue_abc_is_NULL(){
        return $this->assertTrue(factx('abc')=='null');
    }
    
}
//$prog=new ProgramTest();
//echo($prog->testTrue());
