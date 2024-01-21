import type { ImageMetadata } from "astro";
import ac from "./assets/gallery/ac.webp";
import door from "./assets/gallery/door.webp";
import electrical from "./assets/gallery/electrical.webp";
import flooring from "./assets/gallery/flooring.webp";
import kitchen from "./assets/gallery/kitchen.webp";
import toilet from "./assets/gallery/toilet.webp";

interface GalleryProps {
  alt: string;
  image: ImageMetadata;
  full: string;
}
[];

export const IMG_GALLERY: GalleryProps[] = [
  {
    alt: "Cooling",
    image: ac,
    full: "ac.jpg",
  },
  {
    alt: "Refurbishing",
    image: door,
    full: "door.jpg",
  },
  {
    alt: "Electrical",
    image: electrical,
    full: "electrical.jpg",
  },
  {
    alt: "Flooring",
    image: flooring,
    full: "flooring.jpg",
  },
  {
    alt: "Kitchen",
    image: kitchen,
    full: "kitchen.jpg",
  },
  {
    alt: "Bathroom",
    image: toilet,
    full: "toilet.jpg",
  },
];
