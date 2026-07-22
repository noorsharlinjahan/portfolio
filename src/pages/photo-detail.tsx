import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { photos } from "@/lib/data";

export default function PhotoDetail() {
  const { id } = useParams();
  const photo = photos.find(p => p.id === id);

  if (!photo) {
    return (
      <div className="flex flex-col items-center justify-center flex-1 space-y-6">
        <p className="font-serif text-2xl text-muted-foreground">Image not found.</p>
        <Link href="/photography" className="text-sm tracking-widest uppercase hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
          Return to Gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[80vh]">
      <div className="mb-8">
        <Link href="/photography" className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex-1 w-full flex justify-center items-center max-h-[75vh]"
        >
          <img 
            src={photo.url} 
            alt={photo.title}
            className="max-w-full max-h-full object-contain shadow-2xl ring-1 ring-white/5 grayscale-[0.1] contrast-[1.1]"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full lg:w-64 shrink-0 space-y-6 border-l border-border/50 pl-6 py-4"
        >
          <div>
            <h1 className="font-serif text-3xl text-foreground mb-2 leading-tight">{photo.title}</h1>
            <p className="text-sm tracking-widest text-muted-foreground">{photo.year}</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Medium</p>
            <p className="text-sm text-foreground">{photo.medium}</p>
          </div>

          <div className="space-y-1">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Format</p>
            <p className="text-sm text-foreground capitalize">{photo.category}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
