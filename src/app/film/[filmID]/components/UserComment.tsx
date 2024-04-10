import Image from 'next/image';
import Link from 'next/link';

import { Comment } from './Comment';
import { type CommentData } from './ComponentData';

type Props = {
  readonly comments: CommentData[]; // Specify the type of the 'comments' prop
};

export default function UserComment({ comments }: Props) {
  return (
    <div>
      {/* users comment  */}
      <div className='w-[100%] h-[100%] border-t border-gray-200 '>
        <div className='mx-[300px] '>
          {/* evaluation */}
          <h2 className='mb-3 text-[30px] font-bold'>Bình luận từ người xem</h2>

          <div className='flex'>
            <div>
              <Image
                src='/star.svg'
                width={35}
                height={35}
                className='w-[35px] h-[35px] items-center justify-self-center mt-1'
                alt='./star.svg icon'
              />
            </div>
            <div className='pl-2 pr-0.5 text-4xl text-gray-600 sm:text-5xl'>
              9.1
            </div>
            <div className='mr-1 self-end pb-[3px] text-sm font-nomal text-gray-600 text-2xl mt-2'>
              /10{' '}
            </div>
            <div className=' self-end pb-[3px] text-sm font-nomal text-gray-600 text-2xl mt-2'>
              · 34.2K đánh giá
            </div>
          </div>

          {/* Render commments */}
          {comments.map((comment) => (
            <Comment key={comment.username} comment={comment} />
          ))}

          {/* <Comment comments={comments}/> */}
        </div>
      </div>
    </div>
  );
}
