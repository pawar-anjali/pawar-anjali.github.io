export type Post = {
  url: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  imageAlt?: string;
  topic?: string;
  number?: number;
  readMinutes?: number;
};

export function getPosts(): Post[] {
  const modules = import.meta.glob("./pages/blog/*.md", { eager: true });
  return Object.values(modules)
    .map((m: any) => ({ url: m.url, ...m.frontmatter }))
    .sort((a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}

export function pad(n?: number) {
  return n == null ? "" : String(n).padStart(2, "0");
}
