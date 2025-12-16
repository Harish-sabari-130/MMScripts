import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import BookCard from '../components/Bookcard/Bookcard';
import Footer from '../components/Footer/Footer';

const Home = () => {
  const books = [
    { 
      id: 1, 
      title: "The Midnight Chronicles", 
      description: "An epic journey through time and space.", 
      amazonLink: "https://amazon.com" 
    },
    { 
      id: 2, 
      title: "Whispers of Tomorrow", 
      description: "A profound exploration of human potential.", 
      amazonLink: "https://amazon.com" 
    },
    { 
      id: 3, 
      title: "Silent Revolution", 
      description: "Discover the power of quiet transformation.", 
      amazonLink: null 
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      
      {/* Books Section */}
      <section id="books" style={{ padding: '4rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>
            Featured <span className="gradient-text">Collection</span>
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>Handpicked for the modern reader</p>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '6rem 2rem', background: '#0f0f12', marginTop: '4rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem' }}>About MMScripts</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            MMScripts is dedicated to bringing you the finest selection of literature. 
            Whether you prefer digital copies or hardcovers, our seamless ordering process via WhatsApp 
            ensures you get your favorite books instantly.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;