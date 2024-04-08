import exp from 'constants';

export type PosterData = {
  id: number;
  age: number;
  imgPoster: string;
  filmName: string;
  filmLink: string;
  filmGenre: string;
  rating: string;
};

export const posterfilms: PosterData[] = [
  {
    id: 1,
    age: 18,
    imgPoster: '/avt1.jpg',
    filmName: 'Điềm Báo Của Quỷ',
    filmLink: 'https://www.youtube.com/watch?v=bNp9pn0ni3I',
    filmGenre: 'Kinh Dị',
    rating: '10.0',
  },

  {
    id: 2,
    age: 16,
    imgPoster: '/avt2.jpg',
    filmName: 'Những Kẻ Trở Lại',
    filmLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    filmGenre: 'Hành Động',
    rating: '8.5',
  },
  {
    id: 3,
    age: 16,
    imgPoster: '/avt3.jpg',
    filmName: 'Cuộc Phiêu Lưu Của Lý Tiểu Long',
    filmLink: 'https://www.youtube.com/watch?v=J7qyfNhjGuw',
    filmGenre: 'Phiêu Lưu',
    rating: '9.2',
  },
  {
    id: 4,
    age: 13,
    imgPoster: '/avt4.jpg',
    filmName: 'Bí Mật Của Bóng Đêm',
    filmLink: 'https://www.youtube.com/watch?v=5xLbL7Zo3_A',
    filmGenre: 'Bí Ẩn',
    rating: '7.8',
  },
  {
    id: 5,
    age: 13,
    imgPoster: '/avt5.jpg',
    filmName: 'Sự Im Lặng Của Lâm Gia Đống',
    filmLink: 'https://www.youtube.com/watch?v=u9hN6tfdQ2A',
    filmGenre: 'Tâm Lý',
    rating: '8.9',
  },
  // {
  //   id: 6,
  //   age: 13,
  //   imgPoster: '/avt6.jpg',
  //   filmName: 'Những Kẻ Khờ Mộng',
  //   filmLink: 'https://www.youtube.com/watch?v=9RC8SwvJIxM',
  //   filmGenre: 'Hài Hước',
  //   rating: '7.5',
  // },
  // {
  //   id: 7,
  //   age: 18,
  //   imgPoster: '/avt7.jpg',
  //   filmName: 'Đêm Kinh Hoàng',
  //   filmLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  //   filmGenre: 'Kinh Dị',
  //   rating: '9.0',
  // },
  // {
  //   id: 8,
  //   age: 16,
  //   imgPoster: '/avt8.jpg',
  //   filmName: 'Sự Trả Thù Của Quỷ',
  //   filmLink: 'https://www.youtube.com/watch?v=J7qyfNhjGuw',
  //   filmGenre: 'Hành Động',
  //   rating: '8.3',
  // },
  // {
  //   id: 9,
  //   age: 16,
  //   imgPoster: '/avt9.jpg',
  //   filmName: 'Chạy Trốn Khỏi Thế Giới Quái Vật',
  //   filmLink: 'https://www.youtube.com/watch?v=5xLbL7Zo3_A',
  //   filmGenre: 'Phiêu Lưu',
  //   rating: '9.5',
  // },
  // {
  //   id: 10,
  //   age: 13,
  //   imgPoster: '/avt10.jpg',
  //   filmName: 'Bí Mật Kinh Hoàng',
  //   filmLink: 'https://www.youtube.com/watch?v=u9hN6tfdQ2A',
  //   filmGenre: 'Bí Ẩn',
  //   rating: '8.7',
  // },
];
