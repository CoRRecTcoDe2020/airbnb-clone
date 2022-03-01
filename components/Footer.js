import Link from "next/Link";
import { CurrencyPoundIcon, GlobeAltIcon } from "@heroicons/react/outline"

function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gradient-to-bl from-black to-blue-900">
            <div className="space-y-4 text-xs font-Poppins text-white">
                <h5 className="font-bold">About</h5>
                <p className="hover:underline cursor-pointer">How Airbnb works</p>
                <p className="hover:underline cursor-pointer">Newsroom</p>
                <p className="hover:underline cursor-pointer">Investors</p>
                <p className="hover:underline cursor-pointer">Airbnb Plus</p>
                <p className="hover:underline cursor-pointer">Airbnb Luxe</p>
            </div>

            <div className="space-y-4 text-xs font-Poppins text-white">
                <h5 className="font-bold">Community</h5>
                <p>This is not real airbnb site</p>
                <p>Its a pretty awesome modern clone</p>
                <p>Referrals accepted</p>
                <Link href="https://github.com/CoRRecTcoDe2020/airbnb-clone">
                    <p className="hover:underline cursor-pointer">Source code</p>
                </Link>
            </div>

            <div className="space-y-4 text-xs font-Poppins text-white">
                <h5 className="font-bold">Host</h5>
                <p className="hover:underline cursor-pointer">Try hosting</p>
                <p className="hover:underline cursor-pointer">AirCover: protection for Hosts</p>
                <p className="hover:underline cursor-pointer">Explore hosting resources</p>
                <p className="hover:underline cursor-pointer">Visit our community forum</p>
                <p className="hover:underline cursor-pointer">How to host responsibly</p>
            </div>

            <div className="space-y-4 text-xs font-Poppins text-white">
                <h5 className="font-bold">Support</h5>
                <p className="hover:underline cursor-pointer">Help Centre</p>
                <p className="hover:underline cursor-pointer">Safety information</p>
                <p className="hover:underline cursor-pointer">Cancellation options</p>
                <p className="hover:underline cursor-pointer">Supporting people withisabilities</p>
                <p className="hover:underline cursor-pointer">Report a neighbourhood concern</p>
            </div>

            <div className="hidden xl:inline-flex border-b w-[85vw] pt-2 border-sky-500">
                <div className="absolute flex mt-4 text-sm">
                    <p className="text-white font-Poppins">© 2022 CoRRecT CoDe</p>
                    <p className="text-white font-Poppins ml-3">·</p>
                    <p className="text-white font-Poppins ml-3 hover:underline cursor-pointer">Privacy</p>
                    <p className="text-white font-Poppins ml-3">·</p>
                    <p className="text-white font-Poppins ml-3 hover:underline cursor-pointer">Terms</p>
                    <p className="text-white font-Poppins ml-3">·</p>
                    <p className="text-white font-Poppins ml-3 hover:underline cursor-pointer">Sitemap</p>
                    <p className="text-white font-Poppins ml-3">·</p>
                    <p className="text-white font-Poppins ml-3 hover:underline cursor-pointer">UK Modern Slavery Act</p>
                    <p className="text-white font-Poppins ml-3">·</p>
                    <p className="text-white font-Poppins ml-3 hover:underline cursor-pointer">Company details</p>
                </div>
                <div className="flex  justify-end  font-Poppins text-white cursor-pointer">
                    <CurrencyPoundIcon className="h-6 absolute ml-[80vw] mt-3" />
                    <GlobeAltIcon className="h-6 absolute ml-[71vw] mt-3" />
                </div>
                <h1 className="h-8 absolute ml-[80vw] mt-2 text-sm text-white font-Poppins pl-1 p-2 cursor-pointer underline">GBP</h1>
                <h1 className="h-8 absolute ml-[71vw] mt-2 text-sm text-white font-Poppins pl-1 p-2 cursor-pointer underline">English (GB)</h1>
            </div>
        </div>
    );
}

export default Footer;