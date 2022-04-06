

function Math(){
    function isValid(a,b)
    {
        if(typeof(a)=='number' && typeof(b)=='number')
        {
            return 1;
        }
        else return 0;
        
    }

   this.add=function(in1,in2){
       
       retVal=isValid(in1,in2)?(in1+in2):"error:invalid input "
      return retVal
   }

   this.sub=function(in1,in2){
    retVal=isValid(in1,in2)?(in1-in2):"error:invalid input "
    return retVal
    }

    this.multi=function(in1,in2){
        retVal=isValid(in1,in2)?(in1*in2):"error:invalid input "
        return retVal
        }
}

module.exports=Math;
