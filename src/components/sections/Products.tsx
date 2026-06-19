import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    title: 'CNC Machined Components',
    description: 'High precision components manufactured using advanced CNC technology. Perfect for tight tolerances.',
    image: 'https://images.unsplash.com/photo-1565515261923-1d014bc1220a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Industrial Parts',
    description: 'Durable and reliable components for heavy industries designed to withstand extreme conditions.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Custom Fabrication',
    description: 'Customized engineering solutions based on client requirements. Tailored to your exact specifications.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Machine Parts',
    description: 'Precision manufactured parts for industrial machinery ensuring seamless operations.',
    image: 'https://images.unsplash.com/photo-1611078440533-5c7961bd4e40?q=80&w=800&auto=format&fit=crop',
  },
];

const ProductCard = ({ product, index }: { product: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);

    // Glare position
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      className="relative overflow-hidden group interactive bg-brand-steel rounded-2xl cursor-none"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Glare Effect */}
      <div
        className="absolute inset-0 z-20 transition-opacity duration-300 opacity-0 pointer-events-none group-hover:opacity-100 mix-blend-overlay"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
        }}
      />

      <div className="relative h-64 overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-steel via-transparent to-transparent" />
        <motion.img
          src={product.image}
          alt={product.title}
          className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      <div className="relative p-6 z-30 bg-brand-steel" style={{ transform: 'translateZ(30px)' }}>
        <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">
          {product.title}
        </h3>
        <p className="mb-6 text-brand-gray/70 leading-relaxed text-sm">
          {product.description}
        </p>
        <button className="flex items-center gap-2 text-sm font-bold tracking-wide uppercase transition-colors text-brand-cyan hover:text-white">
          Learn More
          <span className="block w-6 h-px transition-all bg-brand-cyan group-hover:w-8 group-hover:bg-white" />
        </button>
      </div>
    </motion.div>
  );
};

const Products = () => {
  return (
    <section id="products" className="py-24 bg-brand-navy">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider uppercase border rounded border-brand-cyan/30 text-brand-cyan bg-brand-cyan/10"
          >
            Our Products
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-white md:text-5xl"
          >
            Engineered For <span className="text-gradient">Excellence</span>
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
