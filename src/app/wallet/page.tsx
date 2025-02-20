import Link from "next/link";
import HeroImg from "@/assets/images/wallet/wallet.svg";
import BlockImg from "@/assets/images/wallet/hand.png";
import GlobalImg from "@/assets/images/icons/global.svg";
import MultipleImg from "@/assets/images/icons/multiple.svg";
import TaxImg from "@/assets/images/icons/online.svg";
import AbstractImg from "@/assets/images/wallet/abstract.png";
import Image from "next/image";
import Layout from "@/components/layout";

const WalletPage = () => {
    return (
        <div>
            <Layout>
                <>
                    <div className="pt-10 px-32 grid grid-cols-2 gap-14 max-w-[1492px] mx-auto">
                        <div>
                            <h3 className="text-6xl mb-3">
                                Pay, Receive, and Manage Funds with Us
                            </h3>
                            <p className="text-lg mb-7 text-[#1B1B1B] leading-loose md:leading-loose">
                                Unlock a world of seamless transactions with the Pay4It Wallet. Designed for businesses, government agencies, and individuals, our digital wallet lets you make secure payments, receive funds, and manage your finances—all in one place.
                            </p>
                            <div className="flex gap-5">
                                <Link href="" className="bg-[#1F5E59] py-4 px-8 text-white rounded-[10px]">Get Started</Link>
                            </div>
                            <div className="flex items-center gap-2 mt-7">
                                <p className="text-black font-satoshiregular border-b-2 border-solid border-black text-lg">Join 500K+ Transactions </p>
                                <span className="text-black opacity-40 text-lg">Completed</span>
                            </div>
                        </div>
                        <div className="relative">
                            <Image src={HeroImg} alt="people smiling" className="w-full h-full" />
                            <Image src={AbstractImg} alt="people smiling" className="absolute left-0 top-20" />
                        </div>
                    </div>
                    <div className="py-14 mt-10 w-full bg-[#D3FFB4]"></div>
                    <div className="grid grid-cols-2 items-center px-24 gap-20 mt-5 max-w-[1492px] mx-auto">
                        <div>
                            <div>
                                <div className="w-[80%]">
                                    <h3 className="text-5xl mb-6 font-satoshibold leading-tight md:leading-tight text-[#222222]">
                                        Digital Wallet for Secure Transactions
                                    </h3>
                                    <p className="w-[100%] text-xl mb-5 text-black opacity-80 font-camptonthin leading-loose md:leading-loose">
                                        Whether you're an individual or a business, our wallet solution makes financial transactions effortless.
                                    </p>
                                    <button className="bg-[#202020] text-base py-4 px-10 rounded-full font-camptonthin text-white">Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image src={BlockImg} alt="a big block" className="w-full h-full" />
                        </div>
                    </div>
                    <div className="wallet-bg">
                        <div className="px-24 py-28 mt-28 max-w-[1583px] mx-auto">
                            <div className="flex justify-between items-end max-w-[1492px] mx-auto">
                                <div>
                                    <h2 className="text-6xl mb-5 font-satoshibold text-[#222]">
                                        Wallet Features
                                    </h2>
                                    <p className="text-black text-xl opacity-70 font-satoshilight">
                                        Manage your money effortlessly with Pay4It&apos;s Wallet Services.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-20 grid grid-cols-3 gap-8">
                                <div className="bg-white py-10 rounded-xl px-12">
                                    <Image src={GlobalImg} alt="global icon" className="w-[60px] h-[58px] mb-7" />
                                    <h4 className="text-2xl text-[#222222] mb-3">Virtual Wallets</h4>
                                    <p className="text-black opacity-70 leading-loose md:leading-loose font-camptonthin">
                                        Load your wallet via bank transfer, card payment, or direct deposit and pay for bills, salaries, government levies, and business expenses effortlessly.
                                    </p>
                                </div>
                                <div className="bg-white py-10 rounded-xl px-12">
                                    <Image src={MultipleImg} alt="global icon" className="w-[60px] h-[58px] mb-7" />
                                    <h4 className="text-2xl text-[#222222] mb-3">Multi-Currency Support</h4>
                                    <p className="text-black opacity-70 leading-loose md:leading-loose font-camptonthin">
                                        Manage and transact in different currencies with ease. Send and receive money in other currencies without hassle.
                                    </p>
                                </div>
                                <div className="bg-white py-10 rounded-xl px-12">
                                    <Image src={TaxImg} alt="global icon" className="w-[60px] h-[58px] mb-7" />
                                    <h4 className="text-2xl text-[#222222] mb-3">Bank Transfers</h4>
                                    <p className="text-black opacity-70 leading-loose md:leading-loose font-camptonthin">
                                        Transfer funds from your Pay4It wallet to any bank account instantly. Move your money from your wallet to your preferred bank account with ease
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </Layout>
        </div>
    )
}

export default WalletPage;