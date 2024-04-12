const productsContainer = $('#products')
const communityContainer = $('#community-container');
const newProductsContainer = $('#new-products-container');

const getProducts = async () => {
    try {
        const response = await fetch('./data/index.json').then(response => response.json());
        const { products, community, newProducts } = response;
        products.forEach(({ title, src }) => productsContainer.append(productCard(title, src)))
        community.forEach(({ description, date, artist, src }) => communityContainer.append(communityCard(src, description, date, artist)))
        newProducts.forEach(({ description, src, price }) => newProductsContainer.append(newProductsCard(src, description, price)))
    } catch (error) {
        console.log(error);
    }
}

const initCarousel = () => {
    var fullHeight = function () {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    var carousel = function () {
        productsContainer.owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplayHoverPause: false,
            items: 1,
            nav: true,
            dots: true,
            navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 5,
                }
            }
        });
        communityContainer.owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplayHoverPause: false,
            items: 1,
            nav: true,
            dots: true,
            navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                }
            }
        });
        newProductsContainer.owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplayHoverPause: false,
            items: 1,
            nav: true,
            dots: true,
            navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 5,
                }
            }
        });

    };
    carousel();

}

const init = async () => {
    await getProducts();
    initCarousel();
}
init();