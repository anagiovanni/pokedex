function filter(type)
{
    let cards, i;
    let count = 0;  
    cards = document.getElementsByClassName("card");
    buttons = document.getElementsByClassName("btn-filter");
    for(i = 0; i < cards.length; i++)
    {
        cards[i].parentElement.style.display = 'none';
        if (cards[i].classList.contains(type) || type === "all")
        {
            cards[i].parentElement.style.display = 'block';
            count += 1;
        };
    };
    for(i = 0; i < buttons.length; i++)
    {
        if(buttons[i].id == `btn-${type}`)
        {
            //Continue aqui Giovanni Futuro - Vá Pg 157
        }
    }
}