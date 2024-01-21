import type { ImageMetadata } from "astro";
import ac from "./assets/gallery/ac.jpg";
import door from "./assets/gallery/door.jpg";
import electrical from "./assets/gallery/electrical.jpg";
import floor from "./assets/gallery/flooring.jpg";
import kitchen from "./assets/gallery/kitchen.jpg";
import bathroom from "./assets/gallery/toilet.jpg";

interface GalleryProps {
  alt: string;
  image: ImageMetadata;
}
[];

export const IMG_GALLERY: GalleryProps[] = [
  {
    alt: "Cooling",
    image: ac,
  },
  {
    alt: "Refurbishing",
    image: door,
  },
  {
    alt: "Electrical",
    image: electrical,
  },
  {
    alt: "Flooring",
    image: floor,
  },
  {
    alt: "Kitchen",
    image: kitchen,
  },
  {
    alt: "Bathroom",
    image: bathroom,
  },
];
