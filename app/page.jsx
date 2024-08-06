import Image from 'next/image';
import Link from 'next/link';
import Heading from '@/components/Heading';
import { getReviews } from '@/lib/reviews';
/* import { useEffect } from "react"; */

export default async function HomePage() {
    const reviews = await getReviews(3);
    
   /*  useEffect(() => {
        window.alert('Welcome to my site!!!');
    }, []);
    
    console.log('[Homepage] rendering'); */

    return (
        <>
            <Heading>Indie Gamer</Heading>
            <p className='pb-3'>Only the best Inde games, reviewed for you</p>
            <ul className="flex flex-col gap-3">
                {reviews.map((review, index) => (
            <li key={review.slug}
                className="bg-white border rounded shadow w-80 sm:w-full hover:shadow-xl">
                    <Link href={`/reviews/${review.slug}`} 
                    className='flex flex-col sm:flex-row z'>
                        <Image src={review.image} alt="" priority= {index=== 0}
                            width="320" height="180" className="rounded-t sm:rounded-l sm:rounded-r-none"
                        />
                        <div className='px-2 py-1 text-center sm:text-left'>
                            <h2 className="font-semibold">{review.title}</h2>
                            <p className='hidden pt-2 sm:block'>
                                {review.subtitle}
                            </p>
                        </div>
                    </Link>
                </li>
                    
                ))}
            </ul>
        </>
    )
}