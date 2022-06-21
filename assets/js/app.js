let delay = 1000


setTimeout(()=>
{
    // cart toggle start
    let cart_toggle_btn = document.querySelectorAll('.cart_toggle_btn, .cart_close, .mobile_cart_toggle_btn')
    let cart_wrapper    = document.querySelector('.cart_wrapper')

    if(cart_toggle_btn && cart_wrapper)
    {
        cart_toggle_btn[0].addEventListener('click', toggleCart);
        cart_toggle_btn[1].addEventListener('click', toggleCart);
        cart_toggle_btn[2].addEventListener('click', toggleCart);

        function toggleCart(){
            cart_wrapper.classList.toggle('active')
        }
    }
    // cart toggle end


    // category toggler for mobile start
    let CategoriesBtn = document.querySelectorAll('.mobie_bottom_nav .Categories,.mobile_category_close');
    let bottom_bar_wrapper = document.querySelector('.bottom_bar_wrapper');
    if(CategoriesBtn && bottom_bar_wrapper)
    {
        CategoriesBtn[0].addEventListener('click', toggleCat);
        CategoriesBtn[1].addEventListener('click', toggleCat);

        function toggleCat()
        {
            bottom_bar_wrapper.classList.toggle('active');
        }
    }
    // category toggler for mobile end


    // categories slider start
    $('#categories-carousel').owlCarousel({
        loop: true,
        margin: 16,
        dots: false,
        nav: false,
        items: 7,
        responsive : {
            0 : {
                items: 2
            },
            480 : {
                items: 3
            },
            768 : {
                items: 5
            },
            900 : {
                items: 6
            },
            1200 : {
                items: 7
            }
        }
    })
    // categories slider end

}, delay)