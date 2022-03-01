import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
    return (
        <section className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px] select-none">
                <Image
                   className="rounded-2xl"
                   src={img}
                   layout="fill"
                   objectFit="cover"
                /> 
            </div>

            <div className="absolute top-32 left-12">
                <h3 className="text-4xl mb-3 w-64 font-Poppins">{title}</h3>
                <p className="font-Poppins">{description}</p>

                <button className="text-sm text-white bg-gradient-to-br from-slate-900 to-blue-900 px-4 py-2 rounded-lg mt-5 select-none">{buttonText}</button>
            </div>
        </section>
    );
}

export default LargeCard;