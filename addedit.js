var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var close = document.getElementById('submitForm');
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

