function register(){
    let v1 = document.forms["myform"]["fname"].value;
    if( v1 == "")
    {
          alert("The First Name Field is Empty");
          return false;
    }

    let v2 = document.forms["myform"]["mailid"].value;
    if( v2 == "")
    {
          alert("The MaillD Field is Empty");
          return false;
    }

    let v3 = document.forms["myform"]["pwd"].value;
    if( v3 == "")
    {
          alert("The Password Field is Empty");
          return false;
    }

    let v4 = document.forms["myform"]["place"].value;
    if( v4 == "")
    {
          alert("The Place Field is Empty");
          return false;
    }
}