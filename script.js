var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    // Menu JavaScript

    var sidem = document.getElementById("sidemenu");

    function openmenu(){
        sidem.style.right = "0";
    }
    function closemenu(){
        sidem.style.right = "-200px";
    }

    // Form Submission

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwpLH-gXlpOZdDdF5BPyGtrlRpowgaIXAwJ4IRr-x7xoGeWudpiw2PHj06EFlBN85Bx/exec'
  const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message is sent  Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

  // Preloader

  var loading = document.getElementById('preloader');
  
  function loadFunction(){
    loading.style.display = "none";
  }
