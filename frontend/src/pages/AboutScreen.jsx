import React from 'react';

function AboutScreen() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center">
            <main className="w-full max-w-4xl p-6">
                <section className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
                    <p className="text-lg text-gray-600">
                        Welcome to ShelfWise Bookstore! We are passionate about connecting readers with the books they love. 
                        Our mission is to provide a wide selection of books, excellent customer service, and a seamless shopping experience.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Story</h2>
                    <p className="text-lg text-gray-600">
                        ShelfWise started as a small local bookstore and has grown into a thriving online platform for book enthusiasts. 
                        We believe in the power of stories to inspire, educate, and entertain.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">Contact Us</h2>
                    <p className="text-lg text-gray-600">
                        Have questions or need assistance? Feel free to reach out to us at{' '}
                        <a href="mailto:support@shelfwise.com" className="text-blue-500 hover:underline">
                            support@shelfwise.com
                        </a>.
                    </p>
                </section>
            </main>
        </div>
    );
}

export default AboutScreen;
