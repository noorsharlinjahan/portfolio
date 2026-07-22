import { motion } from "framer-motion";
import { articleImages } from "../lib/content";

interface ImageManagerProps {
  slug: string;
}

export default function ImageManager({ slug }: ImageManagerProps) {
  const images = articleImages[slug] ?? [];

  if (images.length === 0) return null;

  return (
    <div className="mt-16 border-t border-border/40 pt-10 space-y-8">
      <h2 className="text-xs uppercase tracking-widest text-muted-foreground">Visuals</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((img) => (
          <motion.figure
            key={img.id}
            data-testid={`figure-article-image-${img.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative"
          >
            <img
              src={img.url}
              alt={img.caption || "Article visual"}
              className="w-full h-auto object-cover contrast-[1.05] grayscale-[0.1]"
            />
            {img.caption && (
              <figcaption className="mt-3 text-xs text-muted-foreground/70 font-light leading-relaxed italic">
                {img.caption}
              </figcaption>
            )}
          </motion.figure>
        ))}
      </div>
    </div>
  );
}
