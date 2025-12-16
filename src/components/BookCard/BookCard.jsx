import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MessageCircle, ShoppingCart } from 'lucide-react';
import './BookCard.css';

const BookCard = ({ book }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Physics settings for that "heavy" high-end feel
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // WhatsApp Redirect Logic
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi MMScripts, I am interested in buying: ${book.title}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <motion.div
      className="card-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      <div className="card-inner" style={{ transform: "translateZ(20px)" }}>
        <div className="card-image-placeholder">
          <h3 style={{fontFamily: 'var(--font-serif)', fontStyle:'italic', opacity:0.5}}>{book.title}</h3>
        </div>
        
        <h3 className="card-title">{book.title}</h3>
        <p className="card-desc">{book.description}</p>
        
        <div className="card-actions">
          <button className="btn-action btn-whatsapp" onClick={handleWhatsApp}>
            <MessageCircle size={16} /> Buy
          </button>
          
          {book.amazonLink && (
            <a href={book.amazonLink} target="_blank" rel="noopener noreferrer" className="btn-action btn-amazon">
              <ShoppingCart size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BookCard;