import { v4 as uuid } from "uuid";

export const categories = [
  {
    _id: uuid(),
    categoryName: "Indian",
    description:
      "Delicious and flavorful dishes from India, known for their rich spices and diverse regional cuisines.",
  },
  {
    _id: uuid(),
    categoryName: "Chinese",
    description:
      "Authentic Chinese cuisine offering a variety of flavors and cooking styles, including Cantonese, Sichuan, and more.",
  },
  {
    _id: uuid(),
    categoryName: "Italian",
    description:
      "Classic Italian dishes with fresh ingredients, pasta, pizza, and a range of mouthwatering flavors from different regions of Italy.",
  },
];
