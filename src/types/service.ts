export type Service = {
  id: string;
  title: string;
  description: string | null;
  price: number;
  image_url: string | null;
  delivery_time: string | null;
  category_id: string | null;
  created_at: string;
  category?: {
    name: string;
  };
};
