import React from "react";
import TitleHead from "../_components/TitleHead";
import { FaRegUser } from "react-icons/fa";
import TeamCard from "../_components/TeamCard";

function Contributors() {
  const contributors = [
    {
      name: "Alago Ugochi Precious",
      role: "Assistant team lead, social media Manager",
      imgUrl: "/team1.jpg",
    },
    {
      name: "Praise Okere",
      role: "Smart contract dev",
      imgUrl: "/team2.jpg",
    },
    {
      name: "David Aniefiok",
      role: "Blockchain dev",
      imgUrl: "/team3.jpg",
    },
    {
      name: "Jesse Wisdom",
      role: "Frontend Dev",
      imgUrl: "/team4.jpg",
    },
    {
      name: "Eromonsele Odigie",
      role: "UI/UX designer, Frontend dev",
      imgUrl: "/team5.jpg",
    },
  ];

  return (
    <section className='py-20 md:py-24 overflow-hidden'>
      <div className=' container flex flex-col'>
        <TitleHead
          tag={"Contributors"}
          icon={<FaRegUser />}
          title={"Meet the team"}
        />
        <div className='grid grid-cols-4 gap-8 mt-10'>
          {contributors.map((contributor, index) => (
            <div key={index}>
              <TeamCard
                name={contributor.name}
                role={contributor.role}
                imgUrl={contributor.imgUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contributors;
