var dayName = document.getElementsByClassName("day");
var elements = document.getElementsByClassName("column");
var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var close = document.getElementById('submitForm');

function gridView()
{
    for(i = 0; i < dayName.length; i++)
    {
        elements[i].style.width = 14%;
    }
    for(i = 0; i < elements.length; i++)
    {
        elements[i].style.width = 14%;
    }
}
btn.onclick = function()
{
    modal.style.display = "block";
}
close.onclick = function()
{
    modal.style.display = "none";
}
window.onclick = function(event)
{
    if(event.target == modal)
    {
        modal.style.display = "none";
    }
    else
    {
        modal.style.display = "block";
    }

}