// =====================================================
// PEAK CART — JAVASCRIPT
// =====================================================


// =====================================================
// CART
// =====================================================

let cartCount = 0;

const cartCounter = document.getElementById("cartCount");

const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartCounter.textContent = cartCount;

        button.textContent = "✓ Added";

        button.style.background = "#ef1b23";
        button.style.color = "#fff";
        button.style.borderColor = "#ef1b23";

        setTimeout(() => {

            button.textContent = "🛒 Add to Cart";

            button.style.background = "";
            button.style.color = "";
            button.style.borderColor = "";

        }, 1200);

    });

});


// =====================================================
// WISHLIST
// =====================================================

const wishlistButtons =
    document.querySelectorAll(".wishlist");

wishlistButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (button.textContent === "♡") {

            button.textContent = "♥";

            button.style.color = "#ef1b23";

        } else {

            button.textContent = "♡";

            button.style.color = "";

        }

    });

});


// =====================================================
// SEARCH
// =====================================================

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchBtn");


function performSearch() {

    const query =
        searchInput.value.trim();

    if (query === "") {

        alert("Please enter a product name.");

        return;

    }

    alert(
        "Searching for: " + query
    );

}


searchButton.addEventListener(
    "click",
    performSearch
);


searchInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            performSearch();

        }

    }
);


// =====================================================
// NEWSLETTER
// =====================================================

const newsletterForm =
    document.getElementById("newsletterForm");


newsletterForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        const email =
            newsletterForm
                .querySelector("input")
                .value
                .trim();


        if (!email) {

            alert(
                "Please enter your email address."
            );

            return;

        }


        alert(
            "Thank you for subscribing!"
        );


        newsletterForm.reset();

    }
);


// =====================================================
// SHOP NOW
// =====================================================

const shopButtons =
    document.querySelectorAll(
        ".btn-primary"
    );


shopButtons.forEach(button => {

    if (
        button.textContent
            .toLowerCase()
            .includes("shop")
    ) {

        button.addEventListener(
            "click",
            () => {

                document
                    .getElementById("shop")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    }

});


// =====================================================
// COUNTDOWN TIMER
// =====================================================

let hours = 12;
let minutes = 45;
let seconds = 30;


function updateCountdown() {

    const countdown =
        document.querySelectorAll(
            ".countdown span b"
        );


    if (!countdown.length) {
        return;
    }


    seconds--;


    if (seconds < 0) {

        seconds = 59;
        minutes--;

    }


    if (minutes < 0) {

        minutes = 59;
        hours--;

    }


    if (hours < 0) {

        hours = 23;

    }


    countdown[0].textContent =
        String(hours).padStart(2, "0");


    countdown[1].textContent =
        String(minutes).padStart(2, "0");


    countdown[2].textContent =
        String(seconds).padStart(2, "0");

}


setInterval(
    updateCountdown,
    1000
);