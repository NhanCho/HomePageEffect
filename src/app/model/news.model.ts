export interface News{
  type_of: string;
  id: number;
  user:{profile_image_90:string; name:string};
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  cover_image: string;
  social_image: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: number;
  published_timestamp: string;
}
