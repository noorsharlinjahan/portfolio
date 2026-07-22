/**
 * Static site content — exported from the portfolio database on 2026-07-22.
 * Images live in public/uploads/ and are served as static assets.
 */

const BASE = import.meta.env.BASE_URL;

/** Resolve an uploaded image filename to its public URL. */
export function uploadUrl(filename: string): string {
  return `${BASE}uploads/${filename}`;
}

export const settings = {
  blurb:
    "I’m a New York City–based educator and operations professional with experience across classrooms, arts programs, and administrative coordination. I’ve worked in spaces where creativity, organization, and communication all come together, and I’ve always been drawn to roles where I can support both people and the systems around them.\n\n\nI started my career in education, teaching visual arts and working closely with students in K–12 settings. Over time, I also took on advisory and program support roles, helping students with academic and personal goal-setting while staying connected with families and staff. Those experiences shaped how I think about structure, patience, and communication.\n\n\nMore recently, I’ve worked in operations and program coordination in fast-paced environments, including cultural and public sector spaces in New York City. I’ve supported teams with records, scheduling, and day-to-day coordination, and I enjoy work that requires attention to detail and steady collaboration.\n\n\nAt the center of everything I do is a simple goal: to be useful, dependable, and thoughtful in whatever space I’m in, whether that’s a classroom, an office, or a project team.",
  art_blurb:
    "Living in a busy city can feel overwhelming. There’s always movement, noise, and constant change happening all at once, like you’re trying to keep up with something that never really pauses.\n\nIn college, I found an outlet in a film class that shifted how I looked at everything around me. It slowed things down in a way I didn’t know I needed, teaching me to notice light, timing, and the small decisions inside a frame. Since then, I’ve been drawn to photography in a way that stuck.\n\nWorking with both digital and film, I focus on everyday moments and the spaces in between them. The quiet gestures, passing scenes, and ordinary details that usually get overlooked. There’s something grounding about holding onto those fragments of life, especially in a place that rarely stops moving.",
  linkedin_url: "https://www.linkedin.com/in/noorsharlinjahan97/",
  resume_url:
    "https://drive.google.com/file/d/1BSaL3xZmJWYzSrMdPP5yLC1m5usp05M0/view?usp=sharing",
  profile_photo: uploadUrl("9287c3d2-381a-474c-8cd5-600eef1c6935.png"),
};

export type Artwork = {
  id: number;
  url: string;
  caption: string;
};

export const artworks: Artwork[] = [
  { id: 1, url: uploadUrl("bcd61bc4-88d6-41f2-b8bf-96515b33e94e.jpg"), caption: "" },
  { id: 2, url: uploadUrl("92463c98-3015-48f6-b315-037c94497109.jpg"), caption: "" },
  { id: 3, url: uploadUrl("0561f22f-43b7-40fe-b337-e09dc7287ae4.jpg"), caption: "" },
  { id: 4, url: uploadUrl("ccb0e995-8dd2-4373-b329-ce99eda209ff.jpg"), caption: "" },
  { id: 5, url: uploadUrl("8f219cc6-55cf-4d88-bd33-e823c6086a77.jpg"), caption: "" },
  { id: 6, url: uploadUrl("55a08afd-6568-40ae-91ab-63318ae23147.jpg"), caption: "" },
  { id: 7, url: uploadUrl("1b7bc661-358c-44cd-b889-0ed370af80ab.jpg"), caption: "" },
  { id: 8, url: uploadUrl("fd085c0d-8001-49f1-9b58-02bb78616de2.jpg"), caption: "" },
  { id: 9, url: uploadUrl("500dac8d-e609-4f33-b81b-ee8e9b620453.jpg"), caption: "" },
  { id: 10, url: uploadUrl("e9758fc4-a42a-4e00-a5f9-652415dfb6a3.jpg"), caption: "" },
  { id: 11, url: uploadUrl("b16e859b-8900-4d52-a4a5-ef42e98a14cf.jpg"), caption: "" },
  { id: 12, url: uploadUrl("d472e59c-c37d-4edc-962d-7f6f3a190f5b.jpg"), caption: "" },
  { id: 13, url: uploadUrl("6fa1e97c-3eb1-4407-9c5e-78448c0358fc.jpg"), caption: "" },
  { id: 14, url: uploadUrl("4e9cba8c-65f7-4a60-94ab-9dc396046d71.jpg"), caption: "" },
  { id: 15, url: uploadUrl("281ce484-5299-4417-864f-8300a91c6d56.jpg"), caption: "" },
  { id: 16, url: uploadUrl("04cb8f89-8e13-4be3-aab7-1c105eea9d75.jpg"), caption: "" },
  { id: 17, url: uploadUrl("5e904f50-4fb4-454c-8964-e7aade3654e5.jpg"), caption: "" },
  { id: 18, url: uploadUrl("1171b149-000f-4d6e-957c-d7aa919beeb8.jpg"), caption: "" },
  { id: 19, url: uploadUrl("52efe0b1-c495-47fb-8f3e-d646c1be28c9.jpg"), caption: "" },
  { id: 20, url: uploadUrl("c74137fa-af06-46d3-bf17-9e42d830c651.jpg"), caption: "" },
  { id: 21, url: uploadUrl("e095296a-8734-4ca7-a269-32b4f764153d.jpg"), caption: "" },
  { id: 22, url: uploadUrl("17183f8b-c7b3-4e7b-878f-2d39a6bcd300.jpg"), caption: "" },
];

export type ArticleImage = {
  id: number;
  url: string;
  caption: string;
};

export const articleImages: Record<string, ArticleImage[]> = {
  "representation-of-divinity": [
    {
      id: 1,
      url: uploadUrl("4d5e05e4-60af-47e1-a103-44dbd6db1f12.jpg"),
      caption:
        "The Goddess Durga Slaying the Demon Buffalo Mahisha, 12th century, Pala-Sena period, The Metropolitan Museum of Art (Accession No. 1993.7)",
    },
    {
      id: 2,
      url: uploadUrl("024ca9c3-cad6-4fa0-bf51-b6bd4deff58c.jpg"),
      caption:
        "Andy Warhol, Marilyn Diptych (1962), acrylic on canvas, Tate. © The Andy Warhol Foundation for the Visual Arts, Inc. Photo: rocor, CC BY-NC 2.0",
    },
    {
      id: 3,
      url: uploadUrl("d36a47bc-dad3-4f2d-8fcf-d995a7cb1fa3.jpg"),
      caption:
        "Nicolas Poussin, Midas Washing at the Source of the Pactolus (ca. 1627), oil on canvas, The Metropolitan Museum of Art, Accession No. 71.56",
    },
  ],
  "harmony-unveiled": [
    {
      id: 4,
      url: uploadUrl("844936ea-fb1f-4a06-b35f-433b77b359e9.jpg"),
      caption:
        "Frederic Leighton, The Return of Persephone (ca. 1890–91), oil on canvas, The Metropolitan Museum of Art, Accession No. 2021.10.1.",
    },
    {
      id: 5,
      url: uploadUrl("d4d48fb7-50d8-43ca-8d5c-6b6a15c3ead8.jpg"),
      caption:
        "Clara Peeters, A Bouquet of Flowers (ca. 1612), oil on wood, The Metropolitan Museum of Art, Accession No. 2020.22.",
    },
  ],
  "anatomy-of-ai": [
    {
      id: 7,
      url: uploadUrl("5eb6e07c-d697-4ab4-a9bd-39a96a9348e9.png"),
      caption: "Kate Crawford and Vladan Joler, Anatomy of an AI System (2018)",
    },
  ],
  "modern-bengali-art": [
    {
      id: 8,
      url: uploadUrl("3a4a2673-0d5b-4fb8-8a7f-8b1f5b32fb69.jpg"),
      caption: "Rabindranath Tagore",
    },
    {
      id: 9,
      url: uploadUrl("2cf91e07-3608-4da8-a78e-e313d78caf56.jpg"),
      caption: "Zainul Abedin, Muktijuddho",
    },
    {
      id: 10,
      url: uploadUrl("f993efe0-9384-4d2e-abcb-a47c37dee681.jpg"),
      caption:
        "Zainul Abedin, The Rebel Cow (1951), Famine Series, Bangladesh National Museum. Approx. 30 × 40 in",
    },
    {
      id: 11,
      url: uploadUrl("9cdb0354-876e-4f0f-8711-6aa87e84ac2a.png"),
      caption: "Zainul Abedin, Famine Sketch (1943), ink on paper, 65.6 × 42.5 cm.",
    },
    {
      id: 12,
      url: uploadUrl("c9928d53-c0ab-45e0-bd0e-2ca2cc1fa433.png"),
      caption: "Zainul Abedin, Famine Sketch (1943), ink on paper, 43 × 56.5 cm",
    },
    {
      id: 13,
      url: uploadUrl("533af17c-7160-4388-85ca-5b8eb25e1d8c.png"),
      caption: "Chittaprosad Bhattacharya",
    },
  ],
};
