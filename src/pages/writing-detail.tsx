import { useState } from "react";
import { useParams, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Link2, Check, Share2 } from "lucide-react";
import { articles } from "@/lib/data";
import ImageManager from "@/components/ImageManager";

function CitationPanel({ article }: { article: { title: string; date: string; category: string; slug: string } }) {
  const [copied, setCopied] = useState<'link' | 'cite' | null>(null);

  const url = typeof window !== "undefined"
    ? `${window.location.origin}/writing/${article.slug}`
    : `/writing/${article.slug}`;

  const mlaCitation = `Jahan, Noor Sharlin. "${article.title}." noorsharlinjahan.com, ${article.date}, ${url}.`;
  const apaCitation = `Jahan, N. S. (${article.date}). ${article.title}. ${url}`;

  const copyText = (text: string, type: 'link' | 'cite') => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="border border-border/60 bg-background/80 backdrop-blur-sm p-6 space-y-6"
    >
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Direct Link</p>
        <div className="flex items-center gap-3">
          <code className="flex-1 text-sm text-foreground/80 font-mono bg-muted/30 px-3 py-2 truncate border border-border/40">
            {url}
          </code>
          <button
            data-testid="button-copy-link"
            onClick={() => copyText(url, 'link')}
            className="shrink-0 flex items-center gap-2 text-xs tracking-widest uppercase px-4 py-2 border border-border/60 hover:border-primary text-muted-foreground hover:text-foreground transition-colors"
          >
            {copied === 'link' ? <Check className="w-3 h-3 text-primary" /> : <Link2 className="w-3 h-3" />}
            {copied === 'link' ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Citation</p>
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground/60 uppercase tracking-widest">MLA</p>
          <div className="flex items-start gap-3">
            <p className="flex-1 text-sm text-foreground/80 font-light leading-relaxed bg-muted/30 px-3 py-2 border border-border/40">
              {mlaCitation}
            </p>
            <button
              data-testid="button-copy-mla"
              onClick={() => copyText(mlaCitation, 'cite')}
              className="shrink-0 mt-0.5 flex items-center gap-2 text-xs tracking-widest uppercase px-4 py-2 border border-border/60 hover:border-primary text-muted-foreground hover:text-foreground transition-colors"
            >
              {copied === 'cite' ? <Check className="w-3 h-3 text-primary" /> : <Link2 className="w-3 h-3" />}
              {copied === 'cite' ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground/60 uppercase tracking-widest">APA</p>
          <p className="text-sm text-foreground/80 font-light leading-relaxed bg-muted/30 px-3 py-2 border border-border/40">
            {apaCitation}
          </p>
        </div>
      </div>

      <p className="text-xs text-muted-foreground/50 leading-relaxed border-t border-border/30 pt-4">
        Please cite or link to the original source. Reproduction or reposting without permission is not permitted.
      </p>
    </motion.div>
  );
}

export default function WritingDetail() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);
  const [showCitation, setShowCitation] = useState(false);

  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center flex-1 space-y-6">
        <p className="font-serif text-2xl text-muted-foreground">Piece not found.</p>
        <Link href="/writing" className="text-sm tracking-widest uppercase hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
          Return to Index
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto w-full py-8">
      <div className="mb-12 flex items-center justify-between">
        <Link href="/writing" className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Index
        </Link>

        <button
          data-testid="button-cite-share"
          onClick={() => setShowCitation(v => !v)}
          className={`inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors border-b pb-0.5 ${
            showCitation
              ? "text-primary border-primary"
              : "text-muted-foreground border-transparent hover:text-foreground hover:border-border"
          }`}
        >
          <Share2 className="w-3 h-3" />
          Cite & Share
        </button>
      </div>

      <AnimatePresence>
        {showCitation && (
          <motion.div className="mb-10">
            <CitationPanel article={article} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <header className="mb-16 space-y-6 text-center">
          <div className="flex items-center justify-center gap-4 text-xs tracking-widest uppercase text-primary/80">
            <span>{article.category}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            {article.title}
          </h1>
          <p className="text-sm tracking-widest text-muted-foreground uppercase">
            {article.date}
          </p>
        </header>

        <div
          className="prose prose-invert prose-lg max-w-none prose-p:font-light prose-p:leading-relaxed prose-p:text-muted-foreground prose-headings:font-serif prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <ImageManager slug={article.slug} />

        <hr className="my-16 border-border/50" />

        <div className="flex flex-col items-center gap-6">
          <div className="w-2 h-2 rounded-full bg-primary/40"></div>
          <button
            data-testid="button-cite-share-bottom"
            onClick={() => { setShowCitation(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-transparent hover:border-border pb-0.5"
          >
            <Share2 className="w-3 h-3" />
            Cite this piece
          </button>
        </div>
      </motion.article>
    </div>
  );
}
