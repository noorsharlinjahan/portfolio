import { Link } from "wouter";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 space-y-8 min-h-[60vh]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-4"
      >
        <h1 className="font-serif text-8xl text-foreground opacity-20">404</h1>
        <p className="font-serif text-2xl text-foreground">The darkroom is empty.</p>
        <p className="text-muted-foreground font-light max-w-md mx-auto">
          The page you are looking for has either been moved, deleted, or never existed in the first place.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link href="/" className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-foreground hover:text-primary transition-colors no-underline group border border-border/50 px-6 py-3 hover:border-primary">
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
