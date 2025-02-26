import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {getSongsRecommendation} from "@/actions/songRecommendation";

const SongsRecommendation = async () => {
    const SONGS_RECOMMENDATIONS = await getSongsRecommendation();

    return (
        <div className="flex flex-col justify-between w-[100vw] overflow-hidden">
            <section className="flex flex-row justify-between gap-[20px] items-center h-[300px]">
                {/* @ts-expect-error: L'API Youtube n'a pas défini de type pour les reponses api. */}
                {SONGS_RECOMMENDATIONS.map((song, index: number) => (
                    <div key={index} className="flex items-center justify-center">
                        <Link href={`https://youtube.com/watch?v=${song.id}`} target="_blank" className="h-[200px] w-[350px] flex justify-center items-center overflow-hidden">
                            <Image src={song.thumbnail} alt="" width={480} height={360} className=""/>
                        </Link>
                    </div>
                ))}
            </section>

            <div className='mt-[50px] flex justify-center items-center'>
                <p className="text-center font-bold w-[400px]">
                    A FEW SONG I CAN RECOMMEND IF YOU&apos;RE LOOKING FOR SOME GOOD ONES
                </p>
            </div>
        </div>
    );
};

export default SongsRecommendation;