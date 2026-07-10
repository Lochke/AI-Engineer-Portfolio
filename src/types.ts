export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export interface ServiceStage {
  id: string;
  number: string;
  title: string;
  description: string;
}
