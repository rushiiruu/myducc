function validate()
{
    var username=document.getElementById("first").value;
    var password=document.getElementById("second").value;
    if ((username == 19)  && (password=="y" || password =="Y"))
    {
        alert("waw");
        window.location.replace("kenji.html"); 
    }
    
        if (username != 19)
        {
            document.getElementById("text1").innerHTML =
      "ay kinsa raman gud para hinomdoman ang date";
        }
        if (username == 19)
        {
            document.getElementById("text1").innerHTML =
      "";
        }

        if (password != "Y" || password != "y" )
        {
            document.getElementById("text2").innerHTML =
      "ay diay???";
        }
        if (password == "Y" || password == "y" )
        {
            document.getElementById("text2").innerHTML =
      "";
        }
        if ((username == "")  && (password==""))
    {
        alert("answeri pud intawn love");
        document.getElementById("text1").innerHTML =
      "";
      document.getElementById("text2").innerHTML =
      "";
    }
    if (password == "" )
        {
            document.getElementById("text2").innerHTML =
      "luh";
        }
    }
