document.addEventListener("DOMContentLoaded", () => {
    
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenuClose = document.getElementById("mobile-menu-close");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenuButton && mobileMenuClose && mobileMenu) {
        mobileMenuButton.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
            document.body.style.overflow = mobileMenu.classList.contains(
                "hidden"
            )
                ? ""
                : "hidden";
            mobileMenuButton.setAttribute(
                "aria-expanded",
                mobileMenu.classList.contains("hidden") ? "false" : "true"
            );
        });

        mobileMenuClose.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
            document.body.style.overflow = "";
            mobileMenuButton.setAttribute("aria-expanded", "false");
        });
    }

    // Mobile Dropdown Toggle
    const mobileHomeDropdown = document.getElementById("mobile-home-dropdown");
    if (mobileHomeDropdown) {
        mobileHomeDropdown.addEventListener("click", function (e) {
            e.stopPropagation();
            const content = document.getElementById("mobile-dropdown-content");
            const icon = this.querySelector("i");

            content.classList.toggle("hidden");
            icon.classList.toggle("rotate-180");
            this.setAttribute(
                "aria-expanded",
                content.classList.contains("hidden") ? "false" : "true"
            );
        });
    }

    // Perbaikan Smooth Scrolling - Hanya untuk anchor #
    document
        .querySelectorAll('a[href^="#"]:not([href="#"])')
        .forEach((anchor) => {
            anchor.addEventListener("click", function (e) {
                // Skip jika bukan hash link
                if (this.getAttribute("href") === "#") return;

                e.preventDefault();
                const target = document.querySelector(
                    this.getAttribute("href")
                );
                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });

                    // Tutup mobile menu jika terbuka
                    if (
                        mobileMenu &&
                        !mobileMenu.classList.contains("hidden")
                    ) {
                        mobileMenu.classList.add("hidden");
                        document.body.style.overflow = "";
                        mobileMenuButton.setAttribute("aria-expanded", "false");
                    }
                }
            });
        });

    // Handle navigasi normal (articles, contact)
    document.querySelectorAll('a[href^="/"]').forEach((link) => {
        if (!link.getAttribute("href").startsWith("/#")) {
            link.addEventListener("click", function () {
                // Tutup mobile menu saat navigasi
                if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
                    mobileMenu.classList.add("hidden");
                    document.body.style.overflow = "";
                    mobileMenuButton.setAttribute("aria-expanded", "false");
                }
            });
        }
    });
});
