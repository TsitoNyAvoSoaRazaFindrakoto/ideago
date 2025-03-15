import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import React from "react";
import StartupCardType from "@/types/post";
import Link from "next/link";
import Image from "next/image";

const StartupCard = ({ post }: { post: StartupCardType }) => {
  const {
    _createdAt,
    views,
    author: { _id: authorId, name: authorName },
    title,
    category,
    _id,
		description,
		image
  } = post;

  return (
    <li className="startup-card group">
      <div className="flex-between -ml-1.5">
        <p className="startup-card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-15-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/startup/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{authorName}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold">{title}</h3>
          </Link>
        </div>
        <Link href={`/startup/${authorId}`}>
          <Image
            src="https://placehold.co/48x48"
            alt="placehoder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
      <img
        src={image}
        alt="placeholdeer"
        className="startup-card_img"
      />
      </Link>
    </li>
  );
};

export default StartupCard;
