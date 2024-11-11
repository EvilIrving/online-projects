// types/card.ts
export interface BaseCardProps {
  type: "weibo" | "wechat" | "music" | "podcast" | "website";
  title: string;
  avatar?: string;
  username: string;
  followers?: number;
  following?: number;
  actionText?: string;
  quote?: string;
}

export interface WeiboCardProps extends BaseCardProps {
  type: "weibo";
  content: string;
}

export interface MusicCardProps extends BaseCardProps {
  type: "music";
  coverImage: string;
  songName: string;
}

export interface PodcastCardProps extends BaseCardProps {
  type: "podcast";
  coverImage: string;
  description: string;
}

export interface WebsiteCardProps extends BaseCardProps {
  type: "website";
  description: string;
  url: string;
  screenshots?: string[];
}

export type CardProps =
  | WeiboCardProps
  | MusicCardProps
  | PodcastCardProps
  | WebsiteCardProps;
