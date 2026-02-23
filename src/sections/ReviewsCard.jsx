import { Star } from "lucide-react";



export default function ReviewsCard({ review }) {

    const { userName, ratings, profession, review: reviewText, user_photoURL } = review;
    return (
        <div className=" max-w-md mx-auto bg-zinc-900 text-white p-6 rounded-lg shadow-lg">
            <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, index) => (
                    <Star
                        key={index}
                        size={18}
                        className={
                            index < ratings
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-500"
                        }
                    />
                ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {reviewText}
            </p>

            {/* User Info */}
            <div className="flex items-center gap-4">

                {/* User Image */}
                <img
                    src={user_photoURL}
                    alt={userName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500"
                />

                {/* Name + Profession */}
                <div>
                    <p className="font-semibold text-white">
                        {userName}
                    </p>
                    <p className="text-xs text-cyan-400">
                        {profession}
                    </p>
                </div>

            </div>
        </div>

    )
}
