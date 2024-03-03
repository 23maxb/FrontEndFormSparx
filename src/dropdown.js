/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9nbpby5HqMR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {Slider} from "@/components/ui/slider"
import {Button} from "@/components/ui/button"
import {SelectValue, SelectTrigger, SelectItem, SelectContent, Select} from "@/components/ui/select"

export default function Component() {
    return (
        <main key="1" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mb-8">
                <h1 className="text-3xl font-bold mb-4">Customize Your Influencer Marketing Package</h1>
                <p className="text-center mb-8">
                    Tailor your package to fit your needs. Choose the number of influencers, your preferred platform,
                    and pick
                    your outreach goals.
                </p>
                <h2 className="text-xl font-semibold mb-4">Number of Influencers</h2>
                <p className="text-gray-500 mb-4">
                    Use the slider to select the desired number of influencers for your marketing package.
                </p>
                <div className="flex items-center justify-between">
                    <Slider className="w-full h-2 bg-gray-200 rounded-full" max={200} min={50}/>
                    <div className="ml-4 w-10 text-center border-2 border-gray-300">
                        <span contentEditable="true">100</span>
                    </div>
                </div>
                <h2 className="text-xl font-semibold mb-4 mt-8">Platform Selection</h2>
                <p className="text-gray-500 mb-4">
                    Choose between TikTok and YouTube as the desired platforms for your influencer marketing campaign.
                </p>
                <div className="flex space-x-4">
                    <Button className="flex-1 hover:bg-[#69C9D0]">
                        <YoutubeIcon className="w-4 h-4 mr-2"/>
                        TikTok
                    </Button>
                    <Button className="flex-1 bg-black hover:bg-red-500 text-white">
                        <YoutubeIcon className="h-4 w-4 mr-2"/>
                        YouTube
                    </Button>
                </div>
                <h2 className="text-xl font-semibold mb-4 mt-8">Outreach Goals</h2>
                <p className="text-gray-500 mb-4">Select the desired outreach goal for your influencer marketing
                    campaign.</p>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select an outreach goal"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="general">General Unclear Partnership</SelectItem>
                        <SelectItem value="paid">Paid Promo</SelectItem>
                        <SelectItem value="affiliate">Affiliate</SelectItem>
                        <SelectItem value="paid-affiliate">Paid Promo + Affiliate</SelectItem>
                    </SelectContent>
                </Select>
                <h2 className="text-xl font-semibold mb-4 mt-8">Target Audiences</h2>
                <p className="text-gray-500 mb-4">Define your target audience for the influencer marketing campaign.</p>
                <div className="border p-4 rounded-lg">
                    <p className="font-semibold">This audience is primarily interested in fitness and health
                        products.</p>
                    <hr className="my-2"/>
                    <p className="font-semibold">
                        This group is composed of tech enthusiasts who are always looking for the latest gadgets.
                    </p>
                    <hr className="my-2"/>
                    <p className="font-semibold">
                        This audience consists of young parents who are interested in baby and child care products.
                    </p>
                    <hr className="my-2"/>
                    <p className="font-semibold">This group is interested in sustainable and eco-friendly products.</p>
                    <hr className="my-2"/>
                    <p className="font-semibold">
                        This audience is composed of fashion-forward individuals who follow the latest trends.
                    </p>
                    <hr className="my-2"/>
                    <p className="font-semibold">This group is interested in home improvement and DIY projects.</p>
                    <hr className="my-2"/>
                    <p className="font-semibold">
                        This audience consists of foodies who are always looking for new recipes and cooking techniques.
                    </p>
                    <hr className="my-2"/>
                    <p className="font-semibold">
                        This group is composed of outdoor enthusiasts who enjoy camping, hiking, and other outdoor
                        activities.
                    </p>
                    <hr className="my-2"/>
                    <p className="font-semibold">This audience is interested in personal finance and investment
                        opportunities.</p>
                    <hr className="my-2"/>
                    <p className="font-semibold">
                        This group is composed of pet owners who are interested in pet care and pet products.
                    </p>
                </div>
                <h2 className="text-xl font-semibold mb-4 mt-8">Checkout</h2>
                <div className="p-6 rounded-lg bg-white shadow-md border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                        <p className="font-semibold text-2xl text-gray-900">Total Cost: $XXXX</p>
                        <CreditCardIcon className="w-8 h-8 text-blue-500"/>
                    </div>
                    <p className="text-gray-500 mb-4">
                        Proceed securely with Stripe. Our AI, backed by human guarantee, ensures quality results. If
                        unsatisfied, we
                        offer a 100% money-back guarantee upon review.
                    </p>
                    <Button
                        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Proceed to Checkout
                    </Button>
                </div>
            </div>
        </main>
    )
}

function CreditCardIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="14" x="2" y="5" rx="2"/>
            <line x1="2" x2="22" y1="10" y2="10"/>
        </svg>
    )
}


function YoutubeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path
                d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
            <path d="m10 15 5-3-5-3z"/>
        </svg>
    )
}
