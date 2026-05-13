export type Painting = {
    slug: string;
    title: string;
    size?: string;
    medium: string;
    status: "For Sale" | "Sold";
    image: string;
    description?: string;
  };
  
  export const paintings: Painting[] = [
    {
      slug: "cosmos",
      title: "Cosmos",
      medium: "Oil on canvas",
      status: "Sold",
      image: "/paintings/cosmos.jpeg",
    },
    {
      slug: "golden-hour",
      title: "Golden Hour",
      medium: "Oil on canvas",
      status: "Sold",
      image: "/paintings/golden-hour.jpeg",
    },
    {
      slug: "in-bloom",
      title: "In Bloom",
      size: "8 x 10 inches",
      medium: "Oil on canvas",
      status: "For Sale",
      image: "/paintings/in-bloom.jpeg",
    },
    {
      slug: "inner-fire",
      title: "Inner Fire",
      size: "8 x 10 inches",
      medium: "Oil on canvas",
      status: "For Sale",
      image: "/paintings/inner-fire.jpeg",
    },
    {
      slug: "iridescent",
      title: "Iridescent",
      size: "9 x 12 inches",
      medium: "Oil on canvas",
      status: "For Sale",
      image: "/paintings/iridescent.jpeg",
    },
    {
      slug: "pulse-of-green",
      title: "Pulse of Green",
      medium: "Oil on canvas",
      status: "Sold",
      image: "/paintings/pulse-of-green.jpeg",
    },
    {
      slug: "soft-spoken",
      title: "Soft Spoken",
      size: "18 x 24 inches",
      medium: "Oil on canvas",
      status: "For Sale",
      image: "/paintings/soft-spoken.jpeg",
    },
    {
      slug: "twilight",
      title: "Twilight",
      medium: "Oil on canvas",
      status: "Sold",
      image: "/paintings/twilight.jpeg",
    },
    {
      slug: "whisper",
      title: "Whisper",
      size: "12 x 12 inches",
      medium: "Oil on canvas",
      status: "For Sale",
      image: "/paintings/whisper.jpeg",
    },
  ];
  
  export function getPainting(slug: string): Painting | undefined {
    return paintings.find((p) => p.slug === slug);
  }