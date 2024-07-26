import Link from 'next/link';
import Heading from '@/components/Heading';
import { getFeaturedReview } from '@/lib/reviews';
/* import { useEffect } from "react"; */

export default async function HomePage() {
    const review = await getFeaturedReview();
    
   /*  useEffect(() => {
        window.alert('Welcome to my site!!!');
    }, []);
    
    console.log('[Homepage] rendering'); */

    return (
        <>
            <Heading>Indie Gamer</Heading>
            <p className='pb-3'>Only the best Inde games, reviewed for you</p>
            
            <div className="bg-white border rounded shadow w-80 sm:w-full hover:shadow-xl">
                    <Link href={`/reviews/${review.title}`} 
                    className='flex flex-col sm:flex-row z'>
                        <img src={review.image} alt=""
                            width="320" height="180" className="rounded-t sm:rounded-l sm:rounded-r-none"
                        />
                        <h2 className="font-semibold font-orbitron py-1 text-center pl-2">{review.title}</h2>
                    </Link>
                </div>
        </>
    )
}