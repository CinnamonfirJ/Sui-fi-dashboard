function TeamCard({ name, role, imgUrl }) {
  return (
    <div>
      <div className=' relative w-64 h-64 bg-blue-400'>
        <img
          src={imgUrl}
          alt=''
          className=' w-full h-full object-cover object-center bg-center'
        />
        <div className='bg-white absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-90%] w-56 px-4'>
          <p className=' font-bold'>{name}</p>
          <span className=' text-sm italic text-black/60 leading-none'>
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
