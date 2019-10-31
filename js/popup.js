      var link = document.querySelector(".contacts-button");
      var popap = document.querySelector(".modal");
      var close = document.querySelector(".appointment-exit");
      var foc = popap.querySelector("[name=name]");
      var foc2 = popap.querySelector("[name=mail]");
      var form = popap.querySelector(".appointment-form");
      var firstname = popap.querySelector("[name=name]");
      var mail = popap.querySelector("[name=mail]");
    
      var storage = "";
      var isStorageSupport = "true";      

      try {
        storage = localStorage.getItem("mail");
      }
      catch (err) {
        isStorageSupport = "false";
      }


      link.addEventListener("click", function (evt) {

        evt.preventDefault();
        popap.classList.add("modal-show");

        if (storage) {
          storage = mail.value;
          foc.focus();
        } else {
          foc.focus();
        }

      });


      close.addEventListener("click", function (evt) {

        evt.preventDefault();
        popap.classList.remove("modal-show");
        popap.classList.remove("modal-erorr");

      });


      form.addEventListener("submit", function (evt) {

        if (!firstname.value || !mail.value) {

              evt.preventDefault();
              popap.classList.remove("modal-error");
              popap.offsetWidth = popap.offsetWidth;
              popap.classList.add("modal-error");
            }
            else {
              if (isStorageSupport) {
                localStorage.setItem("mail", mail.value)
              }
            }

      });


        window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          if (popap.classList.contains("modal-show")) {
            evt.preventDefault();
            popap.classList.remove("modal-show");
          }

        }  

        });


