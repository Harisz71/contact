      document.querySelector('#mainloginpage').addEventListener('click', showloginbox);
      document.querySelector('#loginDialogue #cancelbtn').addEventListener('click', (e)=>
    { 
      removeloginbox();
    });
        function showloginbox()
    {
        let loginDialogue= document.querySelector('#loginDialogue');
        loginDialogue.classList.add('active');
    }
    function removeloginbox()
    {
      let loginDialogue= document.querySelector('#loginDialogue');
      loginDialogue.classList.remove('active');
    }