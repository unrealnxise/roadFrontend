const myChecks = document.querySelectorAll('.products-categories__check');

myChecks.forEach(myCheck => {
   myCheck.addEventListener('change', function() {
      if (this.checked) {
         myChecks.forEach(otherCheck => {
            if (otherCheck !== this) {
               otherCheck.checked = false;
               otherCheck.parentElement.classList.remove('products-categories__cat--check');
            }
         });
         this.parentElement.classList.add('products-categories__cat--check');
      } else {
         this.parentElement.classList.remove('products-categories__cat--check');
      }
   });
});