export default interface ReviewCard {
  name: string; // The reviewer's name
  rating: number; // The rating given by the reviewer
  nickname: string; // The reviewer's nickname or username
  content: string; // The content of the review
  imageUrl: string; // URL to the reviewer's profile picture
  className?: string;
}
