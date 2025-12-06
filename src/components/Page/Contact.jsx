import React from 'react';
import { Navbar } from '../Navbar/Navbar.jsx';
import NavbarBanner from '../Navbar/NavbarBanner.jsx';
import Footer from '../Footer/Footer.jsx';
import { useState } from 'react';

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState('');
    const [bgClass, setBgClass] = useState('surface-primary');

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const validate = () => {
        if (!form.name || !form.email || !form.message) return 'すべての項目を入力してください。';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) return 'メールアドレスの形式が正しくありません。';
        return '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const v = validate();
        if (v) {
            setError(v);
            return;
        }
        setError('');
        // ここで API 呼び出し等を行う
        console.log('contact submit', form);
        alert('お問い合わせを送信しました。');
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <>
            <Navbar />
            <NavbarBanner />

            <div className={`page-wrapper ${bgClass}`}>
                <div
                    className={bgClass === 'surface-third' ? 'content-card--dark' : 'content-card'}
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">お問い合わせ</h2>

                    <div className="mb-4">
                        <label className="block mb-2 font-medium">背景カラー（プレビュー）</label>
                        <select
                            value={bgClass}
                            onChange={(e) => setBgClass(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md"
                        >
                            <option value="surface-primary">Primary（白）</option>
                            <option value="surface-secondary">Secondary（薄いグレー）</option>
                            <option value="surface-third">Third（グラデーション）</option>
                        </select>
                    </div>

                    {error && <p className="text-red-600 text-sm mb-4 font-semibold">{error}</p>}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block mb-2 font-medium">お名前</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
                                value={form.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">メールアドレス</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">お問い合わせ内容</label>
                            <textarea
                                name="message"
                                rows="5"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
                                value={form.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button type="submit" className="primary-button">
                            送信する
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Contact;
