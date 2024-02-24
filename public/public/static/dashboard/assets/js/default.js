function triggerClick(x){
    document.querySelector(x).click();
   }
   function displayImage(e,x) {
     if (e.files[0]) {
       var reader = new FileReader();
       reader.onload = function(e){
         document.querySelector(x).setAttribute('src', e.target.result);
       }
       reader.readAsDataURL(e.files[0]);
     }
   }
   