import Image from 'next/image';
import Heading from "@/components/Heading";
import ShareButtons from "@/components/ShareButtons";
import { getReview, getSlugs } from "@/lib/reviews";


export async function generateStaticParams() {
    const slugs = await getSlugs();
    /* console.log('[Review page] generateStaticParams', slugs); */
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({params: {slug} }) {
    const review = await getReview(slug);
    return {
        title: review.title,
    }
}

export default async function ReviewPage({params: {slug} }) {
    /* console.log('[Review Page] props:', props); */
    const review = await getReview(slug);
   /*  console.log('[ReviewPage] review', review); */
    return (
        <>
            <Heading>{review.title}</Heading>
            <p className='font-semibold pb-3'>
                {review.subtitle}
            </p>
           <div className="flex gap-3 items-baseline">
                <p className='italic pb-2'>{review.date}</p>
                <ShareButtons/>
           </div>
            <Image src={review.image} alt="" priority
            width="640" height="360" className="mb-2 rounded"
            />
            <article dangerouslySetInnerHTML={{ __html: review.body }} className='max-w-screen-sm prose prose-slate' />
        </>
    )
}