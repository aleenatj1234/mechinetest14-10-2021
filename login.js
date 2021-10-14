function login(){
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
}
