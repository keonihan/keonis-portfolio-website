export interface EducationItem {
  id: number;
  school: string;
  degree_type: string;
  start_date: string;
  end_date: string;
  description?: string;
}

export interface ExperienceItem {
  id: number;
  type: string;
  company: string;
  position: string;
  start_date: string;
  end_date?: string;
  description?: string;
  tasks: string[];
  website?: string;
  linkedin?: string;
}

export interface CodingProjectItem {
  id: number;
  type: string;
  title: string;
  date: string;
  description: string;
  github?: string;
  demo?: string;
  images?: string[];
  image?: string;
}

export interface GraphicDesignProjectItem {
  id: number;
  type: string;
  title: string;
  date: string;
  description: string;
  video?: string;
  youtube?: string;
  spotify?: string;
  start_time?: number;
  images?: string[];
  image?: string;
}

export interface VideoEditItem {
  id: number;
  type?: string;
  title: string;
  location?: string;
  date: string;
  description: string;
  orientation: 'horizontal' | 'vertical';
  youtube: string;
  thumbnail?: string;
}

export interface HobbyItem {
  id: number;
  name: string;
  category?: string;
  icon?: string;
  image?: string;
}

export interface SocialItem {
  name: string;
  url: string;
  handle: string;
  description: string;
}

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  bio: string;
  status: string;
  hero_background_image?: string;
  contact_form_endpoint?: string;
  socials: SocialItem[];
}
