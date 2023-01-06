function search() {
   
   let list = document.querySelectorAll("ul#towns li");

   let searched = document.getElementById("searchText").value;

   let count = 0;


   for(let el of list){

      if(el.textContent.includes(searched)){
         count++;
         el.style.fontWeight = "bold";
         el.style.textDecoration = "underline";

      }
      
   }
   let result = document.getElementById("result");
   result.textContent = `${count} matches found`;
}
