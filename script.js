//v3.4 Add popup describing app when visitors load webpage the first time
window.onload = function() {
    alert("Welcome to 'Shopping List' App!\n\nCreated by Rock Valley College\n**Javascript(Web233) Students**\n\nQuestions?\nemail Professor Chuck Konkol\nc.konkol@rockvalleycollege.edu\n\nRegister @ RockValleyCollege.edu");
    populateshoppinglistonload();
    displayShoppinglists();
    clearFocus();
};

//v 4.0 save / get array via cookies
//v 4.0 read cookie on load and display

//v4.1 get values via URL
function get(name){
    var url = window.location.search;
    var num = url.search(name);
    var namel = name.length;
    var frontlength = namel+num+1; //length of everything before the value
    var front = url.substring(0, frontlength);
    url = url.replace(front, "");
    num = url.search("&");
    if(num>=0) return url.substr(0,num);
    if(num<0)  return url;
}
//ShareList passbyvalues Week 14
function passlist()
{
 var url = "https://rvclist.github.io/rvclist14/index.html?list="+ shoppinglist;
 //Week 14 add link to sharelist id
      document.getElementById("sharelist").innerHTML = 'Share List:\n' + url;
 //Copy URL
      copyToClipboard(url);
}
//vFinal share function
function share()
{
   passlist();
}
//Copy URL Week 14
function copyToClipboard(text) {
  var passbyurl = document.createElement("textarea");
  passbyurl.value = text;
  document.body.appendChild(passbyurl);
  passbyurl.focus();
  passbyurl.select();
  document.execCommand("copy");
  document.body.removeChild(passbyurl);
  alert("URL has been copied. Ready to share: " + text);
  //window.prompt("Copy & Share List!", text);
    
}

function about()
{
    alert("Welcome to 'Shopping List' App!\n\nCreated by Rock Valley College\n**Javascript(Web233) Students**\n\nQuestions?\nemail Professor Chuck Konkol\nc.konkol@rockvalleycollege.edu\n\nRegister @ RockValleyCollege.edu");
    
}
//read cookie and return
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

//v. 4.0remove and format cookie
function remove_unwanted(str) {  
    
  if ((str===null) || (str===''))  
       return false;  
 else  
   str = str.toString();
    //clean space
   str = str.replace(/%20/g, " ");
    //clean !
    str = str.replace(/%21/g, "!");
   str = str.replace(/%24/g, "$"); 
   str = str.replace(/%7C/g, " | ");
  return str.replace(/[^\x20-\x7E]/g, '');  
}  


//v 4.0 save cookie
function savecookie()
{
  delete_cookie('konkollist');
   var date = new Date();
   //keeps for a year
    date.setTime(date.getTime() + Number(365) * 3600 * 1000);
   document.cookie = 'konkollist' + "=" + escape(shoppinglist.join(',')) + "; path=/;expires = " + date.toGMTString();
}


//v 4.0 delete cookie
function delete_cookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


function populateshoppinglistonload()
{
  shoppinglist = [];
  addtocart = [];
  //load cookie into array
  var y = readCookie('konkollist');
  //remove unwanted chars and format
  y = remove_unwanted(y); 
  //spit array by comma %2C
  
   //v 4.1 get URL
  var geturllistvalue = get("list");
    if (geturllistvalue) {
        geturllistvalue = remove_unwanted(geturllistvalue);
      geturllistvalue = geturllistvalue.split(',');
      shoppinglist = geturllistvalue;
  }else if (y){
       y = y.split('%2C');
      shoppinglist = y;
  }
}


var MyItems = {
  name:"",
  price:""
};

var shoppinglist = [];

//v 3.1 addtocart empty array
var addtocart = [];

//v3.1
function changeShoppinglist(position) {
  //document.getElementById("MyList").innerHTML = shoppinglist[position];
  var arrays = shoppinglist[position];
  arrays = arrays.split(",");
    var e1 = arrays[0];
   var e2 = arrays[1];
 var ReplacedAmount = e2.replace(/\$/g,'');
  var eitem = prompt("Please enter new item", e1);
  var ecost = prompt("Please enter your name", ReplacedAmount);
  shoppinglist[position] = eitem + "," + '$' + ecost;
  displayShoppinglists();
  displayShoppingCart();
  //v 4.0 save cookie
  savecookie();
}

//v3.1
function changeShoppingCart(position) {
  document.getElementById("MyCart").innerHTML = shoppinglist[position];
  var arrays = addtocart[position];
  arrays = arrays.split(",");
    var e1 = arrays[0];
   var e2 = arrays[1];
 var ReplacedAmount = e2.replace(/\$/g,'');
  var eitem = prompt("Please enter new item", e1);
  var ecost = prompt("Please enter your name", ReplacedAmount);
  addtocart[position] = eitem + "," + '$' + ecost;
  displayShoppinglists();
  displayShoppingCart();
  //v 4.0 save cookie
   savecookie();
}

//v3.1 
function addbacktoshoppinglist(item,num) {
  //push to deleteShoppingCar
   deleteShoppingCart(num);
  shoppinglist.push(item);
  //display shoppinglist
  displayShoppinglists();
//v3.1 display displayShoppingCart() 
  displayShoppingCart(); 
  clearFocus();
  //v 4.0 save cookie
   savecookie();
}

//v 3.1 Update function addShoppinglist by adding objects
function addtoshopcart(item, num) {
    document.getElementById("sharelist").innerHTML = ' ';
    deleteShoppinglists(num);
    addtocart.push(item);
  //display shoppinglist
  displayShoppinglists();
//v3.1 display displayShoppingCart() 
  displayShoppingCart(); 
  //Clear
  clearFocus();
  //v 4.0 save cookie
   savecookie();
}

//v 3.1 Update function addShoppinglist by adding objects
function addShoppinglist(item) {
  //v 3.0 declare variable for groc string
  //push to shoppinglist
  if (item != "")
  {
  document.getElementById("sharelist").innerHTML = ' ';
  shoppinglist.push(item);
  //display shoppinglist
  displayShoppinglists();
//v3.1 display displayShoppingCart() 
  displayShoppingCart(); 
  clearFocus();
  //v 4.0 save cookie
  savecookie();
  }else
  {
  alert("Item Description Required: Please enter now :)");
  clearFocus();
  }
}

function clearFocus()
{
  document.getElementById("item").value = "";
 //  document.getElementById("cost").value = "";
  document.getElementById("item").focus();
}


//Update ShoppinhList Week 14
function displayShoppinglists() {
document.getElementById("MyList").innerHTML = '';
var TheList = "";
var TheRow = "";
//Get length of arraylist
var arrayLength = shoppinglist.length;
for (var i = 0; i < shoppinglist.length; i++) {
  //v 3.1 change button name to btndelete
var btndelete =  ' <input class="button" id="remove" name="delete" type="button" value="Remove" onclick="deleteShoppinglists(' + i + ')" />';
//var btnupdate =  ' <input class="button" name="edit" type="button" value="Edit Item" onclick="changeShoppinglist(' + i + ')" />';
//v 3.1 add edit button using below i index & name it btnpdate
var arrays = shoppinglist[i];
arrays = "'"+arrays+"'";
var btnaddcart =  '<input name="add" type="checkbox" id="adds" value="Add to Shopping Cart" onclick="addtoshopcart('+arrays+','+ i +')" />';
//Week 14 Add Share Button
var btnsharelist = '<input class="button" id="shares" name="shares" type="submit" value="Share Shopping List" onclick="share()" />';
TheRow = '<li>' + shoppinglist[i] + btndelete + ' '  + btnaddcart + '</li>';
TheList += TheRow;
}
//v3.1 add Title
if (arrayLength > 0)
{
  document.getElementById("MyList").innerHTML = '<ul>' + TheList + '</ul>';
//Week 14 Add Share Button if arraylist contains values 
  document.getElementById("sharebutton").innerHTML = btnsharelist;
}else
{
  document.getElementById("MyList").innerHTML = ' ';
//Week 14 Remove Share Button and Sharelist if arraylist contains values 
  document.getElementById("sharebutton").innerHTML = ' ';
    document.getElementById("sharelist").innerHTML = ' ';
}
}

//v3.1
function displayShoppingCart() {
document.getElementById("MyCart").innerHTML = ''
var TheList = "";
var TheRow = "";
var arrayLength = addtocart.length;
for (var i = 0; i < arrayLength; i++) {
  //v 3.1 change button name to btndelete
var btndelete =  ' <input class="button" id="remove" name="delete" type="button" value="Remove" onclick="deleteShoppingCart(' + i + ')" />';
//v 3.1 add edit button using below i index & name it btnpdate
var btnupdate =  ' <input class="button" name="edit" type="button" value="Edit Item" onclick="changeShoppingCart(' + i + ')" />';
var arrays = addtocart[i];
arrays = "'"+arrays+"'";
//v 3.1 add edit button using below i index & name it btnpdate
var btnaddlist =  '<input name="add" type="checkbox" id="adds" value="Add to Shopping List" onclick="addbacktoshoppinglist('+arrays+',' + i + ')" checked="checked"/>';
TheRow =  "<li>" + addtocart[i] + btndelete + ' ' +  ' ' + btnaddlist + '</li>';
TheList += TheRow;
}
if (arrayLength > 0)
{
  document.getElementById("labels").innerHTML = 'Purchased';
  document.getElementById("MyCart").innerHTML = '<ul>' + TheList + '</ul>';
}else{
  document.getElementById("labels").innerHTML = '';
  document.getElementById("MyCart").innerHTML = '';
    
}
}

//v3.1
function deleteShoppinglists(position) {
  document.getElementById("sharelist").innerHTML = ' ';
  shoppinglist.splice(position, 1);
  displayShoppinglists();
  displayShoppingCart();
   //v 4.0 save cookie
  savecookie();
}
//v3.1
function deleteShoppingCart(position) {
  document.getElementById("sharelist").innerHTML = ' ';
  addtocart.splice(position, 1);
  displayShoppinglists();
  displayShoppingCart();
}


