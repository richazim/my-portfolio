import React from 'react';
import Image from "next/image";
import Link from "next/link";

const songsRecommendation = [
    {
        url: 'https://open.spotify.com/intl-fr/album/7Euqy9cTEqWGmJUn0pc5k8?si=aKx4Z8KNSiKC_4n6E7pfTQ'
    },
    {
        url: 'https://open.spotify.com/intl-fr/album/7Euqy9cTEqWGmJUn0pc5k8?si=aKx4Z8KNSiKC_4n6E7pfTQ'
    },
    {
        url: 'https://open.spotify.com/intl-fr/album/7Euqy9cTEqWGmJUn0pc5k8?si=aKx4Z8KNSiKC_4n6E7pfTQ'
    },
    {
        url: 'https://open.spotify.com/intl-fr/album/7Euqy9cTEqWGmJUn0pc5k8?si=aKx4Z8KNSiKC_4n6E7pfTQ'
    }
]

const SongsRecommendation = () => {
    return (
        <div className="flex flex-col justify-between overflow-hidden">
            <section className="flex flex-row justify-between h-[250px]">
                {songsRecommendation.map((song, index) => (
                    <div key={index} className="relative">
                        <Link href={song.url} className="absolute h-[200px] w-[200px]">
                            <Image src="/assets/images/profile.png" alt="" width={200} height={200}/>
                        </Link>
                    </div>
                ))}
            </section>

            <div className='border'>
                <p className="text-center border-red-500 border">
                    A FEW SONG I CAN RECOMMEND IF YOU'RE LOOKING FOR SOME GOOD ONES
                </p>
            </div>
        </div>
    );
};

export default SongsRecommendation;