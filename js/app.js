/*-------------------------------------------------------------------------------------------------------------------------------------------------- 

                                    select nav-link

--------------------------------------------------------------------------------------------------------------------------------------------------*/


document.querySelectorAll('.navbar .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()

        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        })
    })
})





/*-------------------------------------------------------------------------------------------------------------------------------------------------- 

                                    Nav Añadir class (bg)

--------------------------------------------------------------------------------------------------------------------------------------------------*/




window.onscroll = (e) => {

    const scroll = window.scrollY;
    const header = document.querySelector('#nav-principal');

    if (scroll > 300){
        header.classList.add('bg-secundary');
        header.classList.add('sombra');
    } else {
        header.classList.remove('bg-secundary');
        header.classList.remove('sombra');
    }
}





/*-------------------------------------------------------------------------------------------------------------------------------------------------- 

                                    Countdown

--------------------------------------------------------------------------------------------------------------------------------------------------*/



$(document).ready(function () { 
    $('#fecha').countdown('2020/10/22', function(e) {
        $(this).html(e.strftime('<span> %D </span> Dias <span> %H </span> Horas <span> %M </span> Minutos <span> %S </span> Segundos'))
    })
})