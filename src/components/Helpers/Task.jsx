import Products from "../../assets/database/products"

   const Task = new Promise((resolve, reject) => {
       let condition = true;
       condition ? setTimeout(() => { resolve(Products) }, 2000) : reject('not found');
   });//Seteo la promesa para que me resuelva lo que viene por Mock
  

export default Task