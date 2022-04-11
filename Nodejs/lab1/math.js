

function Math(){
    function isValid(a,b)
    {
        if(typeof(a)=='number' && typeof(b)=='number')
        {
            return 1;
        }
        else return 0;
        
    }

    this.calc=function (operand,in1,in2)
    {
        retVal=isValid(in1,in2)?(operand(in1,in2)):"error:invalid input "
      return retVal

    }

   this.add=function(in1,in2){
       return in1+in2
       
   }

   this.sub=function(in1,in2){
    return in1-in2
    }

    this.multi=function(in1,in2){
        return in1*in2
        }

        this.div=function(in1,in2){
            return in1/in2
            }
}

module.exports=Math;
