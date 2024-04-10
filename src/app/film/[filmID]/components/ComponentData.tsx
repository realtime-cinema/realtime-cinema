import exp from 'constants';

export type CommentData = {
  username: string;
  avt: string;
  time: string;
  purchaseMethod: string;
  rating: number;
  vote: string;
  content: string;
  likes: number;
};

export const Comments: CommentData[] = [
  {
    username: 'Nguyen Van A',
    avt: `/avt1.jpg`,
    time: '5 days ago',
    purchaseMethod: 'Đã mua qua MoMo',
    rating: 7,
    vote: 'Cực phẩm!',
    content:
      'Phim hay, chất lượng phim tốt, dàn diễn viên quá chất lượng. Nội dung phim cảm động, có nhiều kịch tính. Lời thoại tốt, gần gũi với thực tế. Cá nhân xem phim trung lập, không ủng hộ Trấn Thành mà ủng hộ phim chất lượng. À, nhạc phim cũng rất xuất sắc, cảnh nóng cũng vừa phải chứ không thừa, phim này cá thấy khoảng 16+ thôi',
    likes: 25,
  },

  {
    username: 'Tran Thi B',
    avt: `/avt2.jpg`,
    time: '3 days ago',
    purchaseMethod: 'Đã mua qua ZaloPay',
    rating: 8,
    vote: 'Hay nhưng còn thiếu sâu sắc',
    content:
      'Phim khá hay, dàn diễn viên đều diễn xuất tốt. Tuy nhiên, cốt truyện còn thiếu sâu sắc và có phần dễ đoán. Nhạc phim tương đối ổn, không quá ấn tượng. Tổng thể là một bộ phim giải trí khá hấp dẫn.',
    likes: 18,
  },

  {
    username: 'Le Van C',
    avt: `/avt3.jpg`,
    time: '1 week ago',
    purchaseMethod: 'Xem trên Netflix',
    rating: 9,
    vote: 'Phim xuất sắc!',
    content:
      'Phim thật sự xuất sắc! Cốt truyện hấp dẫn từ đầu đến cuối, không có khoảnh khắc nào làm mình thấy buồn chán. Diễn xuất của dàn diễn viên rất tốt, đặc biệt là vai diễn của Trấn Thành đã thể hiện được sự chuyên nghiệp và đa chiều của anh. Chắc chắn mình sẽ xem lại phim này nhiều lần nữa!',
    likes: 32,
  },

  {
    username: 'Pham Van D',
    avt: `/avt4.jpg`,
    time: '2 days ago',
    purchaseMethod: 'Xem trên CGV',
    rating: 9,
    vote: 'Rất hay!',
    content:
      'Phim rất hay! Cốt truyện hấp dẫn, diễn xuất của các diễn viên xuất sắc. Không gì để chê, mình đã thích thú từ đầu đến cuối phim.',
    likes: 28,
  },
];

export type PosterData = {
  age: number;
  posterFilm: string;
  name: string;
  year: number;
  time: number;
  rating: number;
  totalRatings: string;
  caption: string;
  description: string;
  releaseDate: string;
  filmGenres: string;
  nation: string;
  trailerLink: string;
  reviewLink: string;
};

export const poster: PosterData = {
  age: 18,
  posterFilm: 'poster.jpg',
  name: 'Mai',
  year: 2024,
  time: 151,
  rating: 9,
  totalRatings: '36.5k',
  caption: 'Quá khứ chưa ngủ yên, ngày mai liệu sẽ đến?',
  description:
    '"Mai" xoay quanh cuộc đời của một người phụ nữ đẹp tên Mai (do Phương Anh Đào thủ vai) có số phận rất đặc biệt. Bởi làm nghề mát xa, Mai thường phải đối mặt với ánh nhìn soi mói, phán xét từ những người xung quanh. Và rồi Mai gặp Dương (Tuấn Trần) - chàng trai đào hoa lãng tử. Những tưởng bản thân không còn thiết tha yêu đương và mưu cầu hạnh phúc cho riêng mình thì khao khát được sống một cuộc đời mới trong Mai trỗi dậy khi Dương tấn công cô không khoan nhượng. Họ cho mình những khoảnh khắc tự do, say đắm và tràn đầy tiếng cười. Liệu cặp đôi ấy có nắm giữ được niềm hạnh phúc đó dài lâu khi miệng đời lắm khi cay nghiệt, bất công?',
  releaseDate: '10/02/2024',
  filmGenres: 'Lãng mạn',
  nation: 'Việt Nam',
  trailerLink: 'https://www.youtube.com/watch?v=G9jTi7YA0xc',
  reviewLink: 'https://www.youtube.com/watch?v=xVWeRnStdSA',
};
