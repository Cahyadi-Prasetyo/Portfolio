import "./bootstrap";
import * as THREE from "three";

document.addEventListener("DOMContentLoaded", () => {
    // --- Three.js Background Animation ---
    let scene, camera, renderer, stars, frameId;
    let isAnimationRunning = false;

    function initThreeJS() {
        try {
            const canvas = document.getElementById("bg-canvas");
            if (!canvas) return;

            // Scene setup
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(
                60,
                window.innerWidth / window.innerHeight,
                1,
                1000
            );
            camera.position.z = 1;

            // Renderer with performance optimizations
            renderer = new THREE.WebGLRenderer({
                canvas: canvas,
                alpha: true,
                antialias: true,
                powerPreference: "high-performance",
            });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000000, 0);

            // Create stars with BufferGeometry for better performance
            const starCount = 5000;
            const positions = new Float32Array(starCount * 3);
            const sizes = new Float32Array(starCount);

            for (let i = 0; i < starCount; i++) {
                const i3 = i * 3;
                positions[i3] = (Math.random() - 0.5) * 2000;
                positions[i3 + 1] = (Math.random() - 0.5) * 2000;
                positions[i3 + 2] = (Math.random() - 0.5) * 2000;

                sizes[i] = Math.random() * 1.5 + 0.5;
            }

            const starGeometry = new THREE.BufferGeometry();
            starGeometry.setAttribute(
                "position",
                new THREE.BufferAttribute(positions, 3)
            );
            starGeometry.setAttribute(
                "size",
                new THREE.BufferAttribute(sizes, 1)
            );

            const starMaterial = new THREE.PointsMaterial({
                color: 0xaaaaaa,
                size: 1,
                sizeAttenuation: true,
                transparent: true,
                opacity: 0.8,
            });

            stars = new THREE.Points(starGeometry, starMaterial);
            scene.add(stars);

            // Start animation
            isAnimationRunning = true;
            animateThreeJS();

            // Handle cleanup
            window.addEventListener("beforeunload", cleanupThreeJS);
        } catch (error) {
            console.error("Three.js initialization failed:", error);
        }
    }

    function animateThreeJS() {
        if (!isAnimationRunning) return;

        frameId = requestAnimationFrame(animateThreeJS);

        // Smooth animation using delta time
        const time = performance.now() * 0.0001;
        stars.rotation.x = time * 0.1;
        stars.rotation.y = time * 0.05;

        renderer.render(scene, camera);
    }

    function cleanupThreeJS() {
        isAnimationRunning = false;
        if (frameId) {
            cancelAnimationFrame(frameId);
        }
        if (renderer) {
            renderer.dispose();
        }
        if (scene) {
            scene.traverse((object) => {
                if (object instanceof THREE.Mesh) {
                    object.geometry.dispose();
                    if (object.material instanceof Array) {
                        object.material.forEach((m) => m.dispose());
                    } else {
                        object.material.dispose();
                    }
                }
            });
        }
        window.removeEventListener("resize", onWindowResize);
    }

    function onWindowResize() {
        if (camera && renderer) {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
    }

    // Initialize Three.js if WebGL is supported
    function checkWebGLSupport() {
        try {
            const canvas = document.createElement("canvas");
            return (
                !!window.WebGLRenderingContext &&
                (canvas.getContext("webgl") ||
                    canvas.getContext("experimental-webgl"))
            );
        } catch (e) {
            return false;
        }
    }

    if (checkWebGLSupport()) {
        // Wait for DOM to be fully loaded
        const waitForCanvas = setInterval(() => {
            if (
                document.readyState === "complete" &&
                document.getElementById("bg-canvas")
            ) {
                clearInterval(waitForCanvas);
                initThreeJS();
                window.addEventListener("resize", onWindowResize);
            }
        }, 100);
    }

    const shareBtn = document.getElementById("shareBtn");
    const socialIcons = document.getElementById("socialIcons");

    shareBtn.addEventListener("click", function () {
        socialIcons.classList.toggle("active");
    });

    // Close social icons when clicking outside
    document.addEventListener("click", (e) => {
        if (!shareBtn.contains(e.target) && !socialIcons.contains(e.target)) {
            socialIcons.classList.remove("active");
        }
    });
    

    // --- Scroll Reveal Animation ---
    function initializeScrollReveal() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const delay = entry.target.dataset.delay || "0";
                        entry.target.style.animationDelay = `${delay}s`;
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        document.querySelectorAll(".reveal").forEach((el) => {
            observer.observe(el);
        });
    }

    // Initialize scroll reveal after a slight delay
    setTimeout(initializeScrollReveal, 300);

    // --- Parallax Effect for Hero Title ---
    const heroTitle = document.getElementById("hero-title");
    if (heroTitle) {
        let mouseX = 0,
            mouseY = 0;
        let targetX = 0,
            targetY = 0;
        const factor = 0.05; // Easing factor

        const updateParallax = () => {
            // Calculate new position with easing
            const dx = (targetX - mouseX) * factor;
            const dy = (targetY - mouseY) * factor;

            mouseX += dx;
            mouseY += dy;

            // Apply transformation
            heroTitle.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

            // Continue animation
            requestAnimationFrame(updateParallax);
        };

        // Start animation
        updateParallax();

        // Update target position on mouse move
        window.addEventListener("mousemove", (e) => {
            targetX = (e.clientX / window.innerWidth - 0.5) * 30;
            targetY = (e.clientY / window.innerHeight - 0.5) * 30;
        });
    }
});

// Handle page visibility changes for performance
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        // Pause animations when tab is not visible
        if (typeof isAnimationRunning !== "undefined") {
            isAnimationRunning = false;
        }
    } else {
        // Resume animations when tab becomes visible
        if (typeof isAnimationRunning !== "undefined" && !isAnimationRunning) {
            isAnimationRunning = true;
            animateThreeJS();
        }
    }

});
