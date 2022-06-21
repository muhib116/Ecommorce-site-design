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
        autoplay: true,
        autoplayHoverPause:true,
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


    // product slider start
    $('#product-carousel, #women_product-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause:true,
        margin: 16,
        dots: false,
        nav: false,
        items: 7,
        responsive : {
            0 : {
                items: 1
            },
            480 : {
                items: 2
            },
            768 : {
                items: 3
            },
            900 : {
                items: 4
            },
            1200 : {
                items: 5
            }
        }
    })
    // product slider end


    // new arrival product slider start
    $('#new_arrival_products-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause:true,
        margin: 16,
        dots: false,
        nav: false,
        items: 7,
        responsive : {
            0 : {
                items: 1
            },
            480 : {
                items: 2
            },
            768 : {
                items: 3
            },
            900 : {
                items: 4
            },
            1200 : {
                items: 5
            }
        }
    })
    // new arrival product slider end


    // best selling product slider start
    $('#best_selling_products-carousel, #best_rated_products-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause:true,
        margin: 16,
        dots: false,
        nav: false,
        items: 4,
        responsive : {
            0 : {
                items: 1
            },
            480 : {
                items: 2
            },
            768 : {
                items: 2
            },
            900 : {
                items: 3
            },
            1200 : {
                items: 3
            }
        }
    })
    // best selling product slider end

}, delay)