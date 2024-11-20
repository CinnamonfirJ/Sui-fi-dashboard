export default function EarnPage() {
  return (
    <div className='mt-8 bg-white p-6 rounded-xl shadow-md'>
      <h3 className='text-xl font-bold'>Socials</h3>
      <div className='space-y-4 mt-6'>
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className='flex justify-between items-center border-b px-4 py-1 rounded-2xl bg-gradient-to-r from-grad1 to-grad2'
          >
            <div className=' flex justify-center items-center gap-4'>
              <img src='/twitterX.png' alt='' />
              <div>
                <p className='text-black font-bold'>
                  Like and Retweet (+38.2 fi)
                </p>
                <p className='text-gray-500 text-sm'>
                  Beeg Blue new post on X, ‘’x.com/beegblue....
                </p>
              </div>
            </div>
            <div className=' flex flex-col justify-center items-center gap-1'>
              <button className='bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full shadow hover:bg-accent'>
                Go
              </button>
              <div className=' flex justify-center items-center gap-4 text-sm'>
                <svg
                  width='5'
                  height='5'
                  viewBox='0 0 5 5'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='2.5' cy='2.5' r='2.5' fill='#2DBB53' />
                </svg>{" "}
                Active
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
