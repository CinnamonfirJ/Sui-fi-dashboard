function TeamCard({ name, role, imgUrl }) {
  return (
    <div>
      <div className=' relative w-64 h-64 bg-blue-400'>
        <img
          src={imgUrl}
          alt=''
          className=' w-full h-full object-cover object-center bg-center'
        />
        <div className='bg-white absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-90%] w-[237px] px-3 py-2 rounded-md'>
          <p className=' font-medium text-[15px]'>{name}</p>
          <span className=' font-archivo text-lightDark __role_text '>
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
