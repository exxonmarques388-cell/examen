import{Emleado}from"./empleado.js";
import {validacionError}from "./Error.js";

try  {


}catch (error) {if
    (error instanceof validacionError){
        console.error(`Error:  ${error.message}`) 
    }else{
        console.error("error de sistema ",Error)
    }
}