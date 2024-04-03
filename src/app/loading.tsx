export default function Loading() {
  return (
    <div className='loading'>
      <div className='loading__content'>
        <div className='loading__content__title'>
          <h1>Loading...</h1>
        </div>
        <div className='loading__content__loading'>
          <div className='loading__content__loading__bar' />
        </div>
      </div>
    </div>
  );
}
