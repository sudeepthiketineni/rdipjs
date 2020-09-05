 function obsolute(){
        var a=document.getElementById('edu').value;
        var r=Math.abs(a);
        return r;
    }
     function squareroot(){
        var a=document.getElementById('edu').value;
         
        var r=Math.sqrt(a);
        var tr=r.toFixed(3);
    
        return tr;
    }
function dis(val)
{
if(val=='abs'){
        var dis=this.obsolute();
document.getElementById('edu').value=dis;}
    else if(val=='sqrt'){
        var dis=this.squareroot();

    document.getElementById('edu').value=dis;}
else{
document.getElementById("edu").value+=val;}}
function solve()
{
let x = document.getElementById("edu").value
let y = eval(x)
document.getElementById("edu").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("edu").value = ""
}
function validation(){

			var user = document.getElementById('user').value;
			var mobileNumber = document.getElementById('mobileNumber').value;
			var emails = document.getElementById('emails').value;





			if(user == ""){
				document.getElementById('username').innerHTML =" ** Please fill the username field";
				return false;
			}
			if((user.length <= 2) || (user.length > 20)) {
				document.getElementById('username').innerHTML =" ** Username length must be between 2 and 20";
				return false;	
			}
			if(!isNaN(user)){
				document.getElementById('username').innerHTML =" ** only characters are allowed";
				return false;
			}

			if(mobileNumber == ""){
				document.getElementById('mobileno').innerHTML =" ** Please fill the mobile Number field";
				return false;
			}
			if(isNaN(mobileNumber)){
				document.getElementById('mobileno').innerHTML =" ** user must write digits only not characters";
				return false;
			}
			if(mobileNumber.length!=10){
				document.getElementById('mobileno').innerHTML =" ** Mobile Number must be 10 digits only";
				return false;
			}



			if(emails == ""){
				document.getElementById('emailids').innerHTML =" ** Please fill the email field";
				return false;
			}
			if(emails.indexOf('@') <= 0 ){
				document.getElementById('emailids').innerHTML =" ** @ Invalid Position";
				return false;
			}

			if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
				document.getElementById('emailids').innerHTML =" ** . Invalid Position";
				return false;
			}
		}
function palindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while(i < j) {
        if(str[i] == str[j]) {
            i++; 
            j--;
        }
        else {
            return false;
        }
    }
    return true;
}
function secondFunction()
         {
         	var x = document.getElementById("myText").value;
            var result;
            result = palindrome(x);
            window.alert(result );
         }
function compare(a,b) {
    var c = a.replace(/\W+/g, '').toLowerCase().split("").sort().join("");
    var d = b.replace(/\W+/g, '').toLowerCase().split("").sort().join("");
        return (c ===d) ?true:false;
}
function secondFunction1()
         {
         	var x = document.getElementById("myText1").value;
            var y = document.getElementById("myText2").value;
            var result;
            result = compare(x,y);
            window.alert(result );
         }

function myfun() {
  var a=Math.floor(Math.random() * 1000);
  var b=Math.floor(Math.random() * 1000);

  document.getElementById("a").value = Math.floor(Math.random() * 1000);
  document.getElementById("b").value = Math.floor(Math.random() * 1000);
  var map1=new Map();
  map1.set("0","Human");
  map1.set("1","Cockroach");
  map1.set("2","NuclearBomb");
  
  var m=parseInt(a)%3;
  var n=parseInt(b)%3;
   
  if(m==n){
    return 1;
  }
  else if(m==1&&n==0||m==0&&n==1){
    return 2;
  }
  else if(m==1&&n==2||m==2&&n==1){
    return 3;
  }
  else if(m==0&&n==2||m==2&&n==0){
    return 4;
  }
}
function game(){
  var q=this.myfun();
  if(q==1){
    document.getElementById('p').innerHTML="TIE";
  }
  if(q==2){
    document.getElementById('p').innerHTML="HUMAN SURVIVES";
  }
  if(q==3){
    document.getElementById('p').innerHTML="COCKROACH SURVIVES";
  }
  if(q==4){
    document.getElementById('p').innerHTML="HUMAN DIES";
  }
}