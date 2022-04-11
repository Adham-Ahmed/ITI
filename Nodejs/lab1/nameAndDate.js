function nameAndDateLogger(name,birthDate)
{
    function validatebirthDate(){
        if(birthDate>2019)
        return 0;
        else {return 1}
    }
    this.log=function(){
        if(validatebirthDate())
        {
            return `Hello ${name} ,Your Age now is ${2022-birthDate}`
        }
        else 
        {
            return `Error:Please enter a valid year of birth`
        }
    }

}

module.exports=nameAndDateLogger;
