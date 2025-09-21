export interface WorkProps {
  slug: string;
  title: string;
  date: string;
  image: {
    assets: {
      paths: string[];
      credit: string;
    };
  };
  video?: {embed: string}
  description: string;
  programs: {
    title: string;
    link: string;
  }[];
  credits: { contribution: string; contributors: string }[];
  duration: number;
}

export interface WorkMobileProps {
  performance: WorkProps;
}