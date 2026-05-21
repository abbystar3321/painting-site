export type StickerShape = "square" | "portrait" | "landscape";

export type PrintMaterial = "paper" | "canvas";
export type PrintTier = "small" | "medium" | "large";

export type PrintOption = {
  tier: PrintTier;
  material: PrintMaterial;
  /** Display size, e.g. '12" × 16"'. */
  size: string;
  /** Retail price in USD. */
  price: number;
};

export type Painting = {
    slug: string;
    title: string;
    size?: string;
    medium: string;
    status: "For Sale" | "Sold";
    price?: number;
    /** Vinyl sticker — one size per painting, $8. */
    stickerShape: StickerShape;
    stickerSize: string;
    stickerPriceFrom: number;
    /** Cheapest paper print price, used in summary blurbs. */
    printPriceFrom: number;
    image: string;
    description?: string;
  };

  export const paintings: Painting[] = [
    {
      slug: "pulse-of-green",
      title: "Pulse of Green",
      medium: "Oil on canvas",
      status: "Sold",
      printPriceFrom: 28,
      stickerPriceFrom: 8,
      stickerShape: "portrait",
      stickerSize: '2" × 3"',
      image: "/paintings/pulse-of-green.jpeg",
    },
    {
      slug: "soft-spoken",
      title: "Soft Spoken",
      size: "18 x 24 inches",
      medium: "Oil on canvas",
      status: "For Sale",
      price: 800,
      printPriceFrom: 28,
      stickerPriceFrom: 8,
      stickerShape: "portrait",
      stickerSize: '2" × 3"',
      image: "/paintings/soft-spoken.jpeg",
    },
    {
      slug: "in-bloom",
      title: "In Bloom",
      size: "8 x 10 inches",
      medium: "Oil on canvas",
      status: "For Sale",
      price: 275,
      printPriceFrom: 28,
      stickerPriceFrom: 8,
      stickerShape: "square",
      stickerSize: '3" × 3"',
      image: "/paintings/in-bloom.jpeg",
    },
    {
      slug: "coral-hour",
      title: "Coral Hour",
      size: "8 x 10 inches",
      medium: "Oil on canvas",
      status: "For Sale",
      price: 275,
      printPriceFrom: 28,
      stickerPriceFrom: 8,
      stickerShape: "portrait",
      stickerSize: '2" × 3"',
      image: "/paintings/coral-hour.jpeg",
    },
    {
      slug: "inner-fire",
      title: "Inner Fire",
      size: "8 x 10 inches",
      medium: "Oil on canvas",
      status: "For Sale",
      price: 275,
      printPriceFrom: 28,
      stickerPriceFrom: 8,
      stickerShape: "portrait",
      stickerSize: '2" × 3"',
      image: "/paintings/inner-fire.jpeg",
    },
    {
      slug: "whisper",
      title: "Whisper",
      size: "12 x 12 inches",
      medium: "Oil on canvas",
      status: "For Sale",
      price: 500,
      printPriceFrom: 28,
      stickerPriceFrom: 8,
      stickerShape: "square",
      stickerSize: '3" × 3"',
      image: "/paintings/whisper.jpeg",
    },
    {
      slug: "iridescent",
      title: "Iridescent",
      size: "9 x 12 inches",
      medium: "Oil on canvas",
      status: "For Sale",
      price: 400,
      printPriceFrom: 28,
      stickerPriceFrom: 8,
      stickerShape: "portrait",
      stickerSize: '2" × 3"',
      image: "/paintings/iridescent.jpeg",
    },
    {
      slug: "cosmos",
      title: "Cosmos",
      medium: "Oil on canvas",
      status: "Sold",
      printPriceFrom: 28,
      stickerPriceFrom: 8,
      stickerShape: "square",
      stickerSize: '3" × 3"',
      image: "/paintings/cosmos.jpeg",
    },
    {
      slug: "twilight",
      title: "Twilight",
      medium: "Oil on canvas",
      status: "Sold",
      printPriceFrom: 28,
      stickerPriceFrom: 8,
      stickerShape: "landscape",
      stickerSize: '3" × 2"',
      image: "/paintings/twilight.jpeg",
    },
    {
      slug: "golden-hour",
      title: "Golden Hour",
      medium: "Oil on canvas",
      status: "Sold",
      printPriceFrom: 28,
      stickerPriceFrom: 8,
      stickerShape: "landscape",
      stickerSize: '3" × 2"',
      image: "/paintings/golden-hour.jpeg",
    },
  ];

/**
 * Paper and canvas print sizes per painting shape, with retail prices.
 * Sizes follow common ready-made frame dimensions so customers can easily
 * frame what they buy.
 */
const SIZE_MATRIX: Record<
  StickerShape,
  { small: string; medium: string; large: string }
> = {
  square:    { small: '10" × 10"', medium: '12" × 12"', large: '16" × 16"' },
  portrait:  { small: '8" × 10"',  medium: '12" × 16"', large: '18" × 24"' },
  landscape: { small: '10" × 8"',  medium: '16" × 12"', large: '24" × 18"' },
};

const PAPER_PRICES: Record<PrintTier, number> = {
  small: 28,
  medium: 48,
  large: 75,
};

const CANVAS_PRICES: Record<PrintTier, number> = {
  small: 85,
  medium: 135,
  large: 185,
};

/** All available print options for a painting, ordered paper-then-canvas. */
export function getPrintOptions(p: Painting): PrintOption[] {
  const sizes = SIZE_MATRIX[p.stickerShape];
  const tiers: PrintTier[] = ["small", "medium", "large"];
  return [
    ...tiers.map<PrintOption>((tier) => ({
      tier,
      material: "paper",
      size: sizes[tier],
      price: PAPER_PRICES[tier],
    })),
    ...tiers.map<PrintOption>((tier) => ({
      tier,
      material: "canvas",
      size: sizes[tier],
      price: CANVAS_PRICES[tier],
    })),
  ];
}

  export function getPainting(slug: string): Painting | undefined {
    return paintings.find((p) => p.slug === slug);
  }
