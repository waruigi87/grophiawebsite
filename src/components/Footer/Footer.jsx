import React from 'react';

function Footer() {
    return (
        <>
            <div className="surface-third text-white">
                <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h1 className="font-bold mb-4 text-3xl">Grophia</h1>
                        <p className="text-sm opacity-80">
                            人が育つ場所に、共に育つ緑を。
                            <br />
                            「育つ」をデザインする会社
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2 ">お問い合わせ</h3>
                        <p className="text-sm opacity-80">hello@reallygreatesite.com</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2 ">住所</h3>
                        <p className="text-sm opacity-80">
                            〒123-4567 東京都渋谷区渋谷1-2-3 グロフィアビル5F
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2 ">電話番号</h3>
                        <p className="text-sm opacity-80">03-1234-5678</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Social</h3>
                        <ul className="space-y-1 text-sm opacity-80">
                            <li>
                                <a href="#" className="hover:text-green-200 transition">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-200 transition">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-200 transition">
                                    X (旧Twitter)
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div></div>
                </div>

                <div className="container mx-auto px-4 items-center text-center text-white">
                    <p>© 2025 Grophia. All rights reserved.</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
