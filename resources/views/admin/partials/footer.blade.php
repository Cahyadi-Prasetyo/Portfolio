</div>
<footer class="bg-white border-t border-gray-200 py-4 px-6">
    <div class="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <div class="text-gray-600 text-sm mb-2 md:mb-0">
            &copy; Now - {{ date('Y') }} Cahyadi Prasetyo. All rights reserved.
        </div>
    </div>
</footer>
</body>
<script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer></script>
<script>
    document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuButton = document.querySelectorAll(".mobile-menu-button");
    const sidebar = document.querySelector(".sidebar");

    mobileMenuButton.forEach((button) => {
        button.addEventListener("click", () => {
            sidebar.classList.toggle("-translate-x-full");
        });
    });

    const sidebarItems = document.querySelectorAll(".sidebar-item");

    sidebarItems.forEach((item) => {
        item.addEventListener("click", () => {
            sidebarItems.forEach((i) => i.classList.remove("active"));
            item.classList.add("active");

            if (window.innerWidth < 768) {
                sidebar.classList.add("-translate-x-full");
            }
        });
    });

    document.addEventListener("click", (e) => {
        if (
            window.innerWidth < 768 &&
            !sidebar.contains(e.target) &&
            !Array.from(mobileMenuButton).some((btn) => btn.contains(e.target))
        ) {
            sidebar.classList.add("-translate-x-full");
        }
    });

    function handleResize() {
        if (window.innerWidth >= 768) {
            sidebar.classList.remove("-translate-x-full");
        } else {
            sidebar.classList.add("-translate-x-full");
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        const editBiodataLink = document.createElement("a");
        editBiodataLink.addEventListener("click", function (e) {
            e.preventDefault();
            document.getElementById("dashboardContent").classList.add("hidden");
            document
                .getElementById("editBiodataForm")
                .classList.remove("hidden");
        });
    });

    window.addEventListener("resize", handleResize);
    handleResize();
});

</script>
</html>