import { Link } from "wouter";
import { motion } from "framer-motion";
import { articles } from "@/lib/data";

export default function Writing() {
  return (
    <div className="max-w-3xl mx-auto w-full flex flex-col space-y-16 py-8">

      {/* Header */}
      <div className="border-b border-border/50 pb-10 space-y-6">
        <div className="flex items-center gap-4">
          <span className="w-8 h-[1px] bg-primary/60"></span>
          <span className="text-xs tracking-[0.18em] uppercase text-primary/80">Selected Writing</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif text-foreground">Writing</h1>
        <p className="text-muted-foreground font-light text-lg leading-relaxed max-w-xl">
          Critical essays, archival research, and personal writing spanning art history, emerging technology, and identity. Grounded in a deep curiosity about how images—painted, photographed, or algorithmically made—carry the weight of the cultures that produced them.
        </p>

        {/* Pull-quote */}
        <motion.blockquote
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-l-[3px] border-primary/50 pl-6 py-3 my-2"
          style={{
            background: "rgba(255,95,162,0.05)",
            borderRadius: "0 0.75rem 0.75rem 0",
          }}
        >
          <p className="font-serif text-lg italic text-foreground/90 leading-relaxed">
            "Exploring the Cost of AI Through Graphics: MoMA's <em>Anatomy of AI</em>."
          </p>
          <cite className="block mt-2 text-xs uppercase tracking-[0.16em] text-primary/70 not-italic">
            Featured Research
          </cite>
        </motion.blockquote>
      </div>

      {/* Article list */}
      <div className="space-y-16">
        {articles.map((article, i) => (
          <motion.article
            key={article.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex flex-col space-y-4"
          >
            <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-muted-foreground">
              <span>{article.date}</span>
              <span className="w-1 h-1 rounded-full bg-primary/30"></span>
              <span className="text-primary/75 font-medium">{article.category}</span>
            </div>

            <Link href={`/writing/${article.slug}`} className="block no-underline">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors leading-tight mb-4">
                {article.title}
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                {article.excerpt}
              </p>
            </Link>

            <div>
              <Link
                href={`/writing/${article.slug}`}
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-foreground hover:text-primary transition-colors pb-1 border-b border-border hover:border-primary"
              >
                Read Essay
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
