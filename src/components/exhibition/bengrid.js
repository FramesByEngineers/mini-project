import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-5xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          image={item.image}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    image:
      "https://i.pinimg.com/564x/72/a8/d4/72a8d47192ef0c99f3c3dc3d17fd2d6e.jpg",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    image:
      "https://i.pinimg.com/564x/50/c0/e6/50c0e61277d10524d94ed015f761237c.jpg",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    image:
      "https://i.pinimg.com/564x/a4/20/3d/a4203d67400a99ff27c0b64821c85e13.jpg",
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    image:
      "https://i.pinimg.com/564x/4f/99/14/4f9914b95cfdca6a8098681f965b6d0e.jpg",
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    image:
      "https://i.pinimg.com/736x/bd/67/39/bd67391923336a3127c6d658e3a550bf.jpg",
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    image:
      "https://i.pinimg.com/564x/72/a8/d4/72a8d47192ef0c99f3c3dc3d17fd2d6e.jpg",
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    image:
      "https://i.pinimg.com/736x/85/bf/d3/85bfd3ea513efc44bf02685213ce3e6b.jpg",
  },
];
