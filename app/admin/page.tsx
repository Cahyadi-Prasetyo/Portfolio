export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-muted/20 p-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8 flex items-center justify-between">
                    <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
                    <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                        Sign Out
                    </button>
                </header>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Projects Card */}
                    <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
                        <div className="p-6 flex flex-col space-y-1.5">
                            <h3 className="font-semibold leading-none tracking-tight">Projects</h3>
                            <p className="text-sm text-muted-foreground">Manage your portfolio projects.</p>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="text-2xl font-bold">0</div>
                            <p className="text-xs text-muted-foreground">Total projects</p>
                        </div>
                        <div className="p-6 pt-0">
                            <button className="w-full rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                                Manage Projects
                            </button>
                        </div>
                    </div>

                    {/* Skills Card */}
                    <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
                        <div className="p-6 flex flex-col space-y-1.5">
                            <h3 className="font-semibold leading-none tracking-tight">Skills</h3>
                            <p className="text-sm text-muted-foreground">Update your technical skills.</p>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="text-2xl font-bold">0</div>
                            <p className="text-xs text-muted-foreground">Total skills</p>
                        </div>
                        <div className="p-6 pt-0">
                            <button className="w-full rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                                Manage Skills
                            </button>
                        </div>
                    </div>

                    {/* Messages Card */}
                    <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
                        <div className="p-6 flex flex-col space-y-1.5">
                            <h3 className="font-semibold leading-none tracking-tight">Messages</h3>
                            <p className="text-sm text-muted-foreground">View contact form submissions.</p>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="text-2xl font-bold">0</div>
                            <p className="text-xs text-muted-foreground">Unread messages</p>
                        </div>
                        <div className="p-6 pt-0">
                            <button className="w-full rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                                View Messages
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
