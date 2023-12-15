import Header from "./Header.js";

function Read() {
   var token = localStorage.getItem('token')

   if(!token) {
      window.location.href = '/'
   }

   return (
      <Header
         nome="Produtos cadastrados"
      />
   )
}

export default Read