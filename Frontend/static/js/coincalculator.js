document.getElementById("myBtn").addEventListener("click", function() {
$Cent=parseInt(document.getElementById("myCents").value);
$Quaters=parseInt($Cent/25);
$Cent=parseInt($Cent%25);
$Dimes=parseInt($Cent/10);
$Cent=parseInt($Cent%10);
$Nickle=parseInt($Cent/5);
$Penny=parseInt($Cent%5);
document.getElementById("myQts").value=$Quaters;
document.getElementById("myDim").value=$Dimes;
document.getElementById("myNic").value=$Nickle;
document.getElementById("myPen").value=$Penny;
})






