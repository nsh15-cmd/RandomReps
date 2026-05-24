import ProductCard from "../../components/user/ProductCard";

import { newArrivals, topSelling } from "../../data/products";

import { motion } from "framer-motion";

import { reviews } from "../../data/review";

import ReviewCard from "../../components/user/ReviewCard";

import { useRef, useEffect } from "react";

import { Link } from "react-router-dom";

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].clientWidth + 24;

      carouselRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,

        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const autoPlay = setInterval(() => {
      scrollCarousel("right");
    }, 3000);

    return () => clearInterval(autoPlay);
  }, []);

  const baseReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}

      {/* The background is a very light gray based on your design */}

      <section className="bg-[#F2F0F1] pt-10 md:pt-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Content: Text & Stats */}

          <div className="md:w-1/2 z-10 pb-12 md:pb-0">
            <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] mb-6 text-brand-black">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>

            <p className="text-brand-textMuted mb-8 max-w-md leading-relaxed text-sm md:text-base">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <a
              href="https://www.facebook.com/profile.php?id=61582440006612"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center w-full md:w-auto bg-brand-black text-white px-12 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors mb-12 shadow-lg"
            >
              Shop Now
            </a>
          </div>

          <div className="md:w-1/2 relative mt-10 md:mt-0 flex justify-center">
            <img
              src="model/hero-model-1.png"
              alt="RandomReps Model"
              className="w-full max-w-md lg:max-w-lg object-contain relative z-10"
            />

            {/* Optional: CSS Sparkles mimicking your Figma design */}

            <div className="absolute top-10 right-10 text-4xl text-brand-black">
              ✦
            </div>

            <div className="absolute bottom-1/2 left-0 text-3xl text-brand-black">
              ✦
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRANDS BANNER */}

      {/* Black strip with logos. For now, we use styled text to look like logos. */}

      <section className="bg-brand-black py-8 w-full">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-80">
          <span className="text-white font-serif text-2xl md:text-3xl tracking-wider uppercase">
            Coach
          </span>

          <span className="text-white font-sans text-2xl md:text-3xl font-black italic tracking-tighter uppercase">
            Nike
          </span>

          <span className="text-white font-sans text-2xl md:text-3xl font-bold tracking-widest uppercase">
            Crocs
          </span>

          <span className="text-white font-serif text-2xl md:text-3xl tracking-widest uppercase">
            Dior
          </span>

          <span className="text-white font-sans text-2xl md:text-3xl font-bold tracking-wider uppercase">
            Bally
          </span>
        </div>
      </section>

      {/* 3. NEW ARRIVALS SECTION */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-gray-200 overflow-hidden">
        <h2 className="text-center font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-12">
          New Arrivals
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},

            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory md:snap-none scrollbar-hide pb-4 mb-6 md:mb-10 cursor-grab active:cursor-grabbing"
        >
          {newArrivals.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, x: -50 },

                visible: {
                  opacity: 1,

                  x: 0,

                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="min-w-[190px] sm:min-w-[220px] md:min-w-0 flex-shrink-0 snap-start"
            >
              <ProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                originalPrice={product.originalPrice}
                discount={product.discount}
                rating={product.rating}
                imageUrl={product.imageUrl}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center">
          {/* Changed from <button> to <Link> to connect the routing */}

          <Link
            to="/category"
            className="px-16 py-3 rounded-full border border-gray-300 font-medium text-brand-black hover:bg-brand-black hover:text-white transition-colors w-full md:w-auto text-center inline-block"
          >
            View All
          </Link>
        </div>
      </section>

      {/* 3.5. TOP SELLING SECTION */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-gray-200 overflow-hidden">
        <h2 className="text-center font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-12">
          top selling
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},

            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory md:snap-none scrollbar-hide pb-4 mb-6 md:mb-10 cursor-grab active:cursor-grabbing"
        >
          {/* FIXED: Changed newArrivals to topSelling here! */}

          {topSelling.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 50 }, // Let's make this one slide up from bottom for variety!

                visible: {
                  opacity: 1,

                  y: 0,

                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="min-w-[190px] sm:min-w-[220px] md:min-w-0 flex-shrink-0 snap-start"
            >
              <ProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                originalPrice={product.originalPrice}
                discount={product.discount}
                rating={product.rating}
                imageUrl={product.imageUrl}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center">
          <Link
            to="/category"
            className="px-16 py-3 rounded-full border border-gray-300 font-medium text-brand-black hover:bg-brand-black hover:text-white transition-colors w-full md:w-auto text-center inline-block"
          >
            View All
          </Link>
        </div>
      </section>

      {/* 5. OUR HAPPY CUSTOMERS (CONTINUOUS MARQUEE) */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
        <div className="mb-10 md:mb-12">
          <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter text-brand-black">
            Our Happy Customers
          </h2>
        </div>

        {/* The Continuous Gliding Track */}

        <div className="overflow-hidden relative pb-8">
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex w-max pt-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,

              ease: "linear",

              duration: 40,
            }}
          >
            {/* FIRST HALF */}

            <div className="flex gap-6 pr-6">
              {baseReviews.map((review, index) => (
                <ReviewCard
                  key={`set1-${review.id}-${index}`}
                  name={review.name}
                  rating={review.rating}
                  text={review.text}
                />
              ))}
            </div>

            {/* SECOND HALF (Perfect Clone) */}

            <div className="flex gap-6 pr-6">
              {baseReviews.map((review, index) => (
                <ReviewCard
                  key={`set2-${review.id}-${index}`}
                  name={review.name}
                  rating={review.rating}
                  text={review.text}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
