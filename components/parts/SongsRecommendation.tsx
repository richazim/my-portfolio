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
    },
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
        <div className="flex flex-col justify-between">
            <section className="flex flex-row justify-between gap-[20px] items-center h-[300px]">
                {songsRecommendation.map((song, index) => (
                    <div key={index} className="w-[250px] flex items-center justify-center border-[1px]">
                        <Link href={song.url} className="h-[200px] w-[200px]">
                            <Image src="/assets/images/profile.png" alt="" width={200} height={200}/>
                        </Link>
                    </div>
                ))}
            </section>

            <div className='mt-[50px] flex justify-center items-center'>
                <p className="text-center font-bold w-[400px]">
                    A FEW SONG I CAN RECOMMEND IF YOU'RE LOOKING FOR SOME GOOD ONES
                </p>
            </div>
        </div>
    );
};

export default SongsRecommendation;