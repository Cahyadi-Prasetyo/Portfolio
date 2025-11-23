export default function Footer() {
    return (
        <footer className="border-t border-border bg-white/30 backdrop-blur-sm py-8 mt-auto">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
}
