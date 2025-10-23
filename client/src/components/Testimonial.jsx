export default function Example() {
    return (
        <div className="pt-14 mt-8 md:mt-16 xl:mt-24">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900">
                    Loved by <span className="text-purple-700">Creators</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mt-2">
                    Don’t just take our word for it — here’s what our users are saying.
                </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-10 mt-10 py-14">
                {[
                    {
                        name: "Donald Jackman",
                        role: "Content Creator",
                        img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
                        review:
                            "I've been using Quick.ai for some time, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
                    },
                    {
                        name: "Richard Nelson",
                        role: "Instagram Influencer",
                        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
                        review:
                            "Quick.ai has transformed my workflow! The simplicity and AI features save me hours each week.",
                    },
                    {
                        name: "James Washington",
                        role: "Marketing Manager",
                        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
                        review:
                            "Incredible experience using Quick.ai. Clean UI, smooth tools, and the AI magic really delivers.",
                    },
                ].map((user, index) => (
                    <div
                        key={index}
                        className="group relative text-sm h-72 w-80 pb-6 rounded-2xl shadow-md bg-black/5 hover:bg-black/10 border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300 cursor-pointer mb-8"
                    >
                        <div className="flex flex-col items-center px-6 py-6 relative">
                            <img
                                src={user.img}
                                alt={user.name}
                                className="h-24 w-24 rounded-full absolute -top-14 border-4 border-black/5 shadow-md transition-transform duration-300 group-hover:scale-110 group-active:scale-95"
                            />
                            <div className="pt-14 text-center">
                                <h1 className="text-lg font-semibold text-gray-900">{user.name}</h1>
                                <p className="text-purple-600">{user.role}</p>
                            </div>
                        </div>
                        <p className="text-gray-800 px-6 text-center">{user.review}</p>
                        <div className="flex justify-center pt-4">
                            <div className="flex gap-0.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg
                                        key={i}
                                        width="18"
                                        height="18"
                                        viewBox="0 0 22 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                                            fill="#FACC15"
                                        />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
