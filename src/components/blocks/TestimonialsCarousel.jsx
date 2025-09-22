import { useState } from "react";

const reviews = [
    {
        name: "Sarah M.",
        rating: 4.9,
        review:
            "California Residence helped me find my dream home in Los Angeles. The process was smooth, professional, and stress-free!",
        date: "June 2024",
    },
    {
        name: "David R.",
        rating: 4.5,
        review:
            "Very responsive team and they understood exactly what I was looking for. I highly recommend their services.",
        date: "May 2024",
    },
    {
        name: "Emily K.",
        rating: 5,
        review:
            "Excellent experience! They guided me through buying my first property with patience and expertise.",
        date: "April 2024",
    },
    {
        name: "James L.",
        rating: 4.2,
        review:
            "Great customer service and local market knowledge. I sold my home above asking price thanks to their strategy.",
        date: "March 2024",
    },
];

function renderStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            // full star
            stars.push(
                <div key={i}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#ffc662" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z" />
                    </svg>
                </div>
            );
        } else if (rating >= i - 0.5) {
            // half star
            stars.push(
                <div key={i} className="relative w-5 h-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#ffc662" d="m15.15 16.85l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4v7.8zM5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z" />
                    </svg>
                </div>
            );
        } else {
            // empty star
            stars.push(
                <div key={i}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#374151" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z" />
                    </svg>
                </div>
            );
        }
    }
    return stars;
}

export default function TestimonialsCarousel() {
    const [index, setIndex] = useState(0);

    const prev = () => setIndex((index - 1 + reviews.length) % reviews.length);
    const next = () => setIndex((index + 1) % reviews.length);

    return (
        <div className="py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4 text-white font-roboto uppercase">What Our Clients Say</h2>

                <div className="relative max-w-xl mx-auto p-8">

                    <p className="text-white text-2xl mb-4 font-italiana">"{reviews[index].review}"</p>
                    <p className="text-white font-semibold">{reviews[index].name}</p>
                    <p className="text-white text-sm">{reviews[index].date}</p>

                    {/* Stars + numeric rating */}
                    <div className="flex justify-center items-center gap-2 mb-3">
                        <div className="flex">{renderStars(reviews[index].rating)}</div>
                        <span className="text-lg font-semibold text-white">
                            {reviews[index].rating.toFixed(1)}
                        </span>
                    </div>

                    <div className="flex justify-between absolute top-1/2 left-0 right-0 px-4 -translate-y-1/2">
                        <button
                            onClick={prev}
                            className="p-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <g fill="#ffffff">
                                    <path d="m13 7.757l1.414 1.415L11.586 12l2.828 2.828L13 16.243L8.757 12z" />
                                    <path fill-rule="evenodd" d="M19 1a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zm2 4v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" clip-rule="evenodd" />
                                </g>
                            </svg>
                        </button>
                        <button
                            onClick={next}
                            className="p-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <g fill="#ffffff">
                                    <path d="m16.485 12.045l-4.242-4.243l-1.415 1.415l2.829 2.828l-2.829 2.829l1.415 1.414z" />
                                    <path fill-rule="evenodd" d="M1 4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm3-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" clip-rule="evenodd" />
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
