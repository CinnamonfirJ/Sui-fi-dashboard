'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import TitleHead from "../_components/TitleHead";
import { FaRegUser } from "react-icons/fa";
import { FaTelegramPlane, FaGoogle, FaTwitter } from 'react-icons/fa'

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState(null)

  const teamMembers = [
    {
      name: 'Alago Ugochi Precious',
      role: 'Assistant team lead, social media Manager',
      image: '/team1.jpg',
    },
    {
      name: 'Praise Okere',
      role: 'Smart contract dev',
      image: '/team2.jpg',
    },
    {
      name: 'David David',
      role: 'Blockchain dev',
      image: '/team3.jpg',
    },
    {
      name: 'Jesse Wisdom',
      role: 'Frontend dev',
      image: '/team4.jpg',
    },
    {
      name: 'Eromonsele Odigie',
      role: 'UI/UX designer, Frontend dev',
      image: '/team5.jpg',
    },
    {
      name: 'Giddel Wilson',
      role: 'Frontend dev',
      image: '/team6.jpg',
    },
  ]

  return (
    <section className="bg-white py-16 px-4">
      <TitleHead
          tag={"Contributors"}
          icon={<FaRegUser />}
        />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 relative group hover:cursor-pointer">
          MEET OUR TEAM
          <span className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary transition-all duration-300 ease-in-out group-hover:w-32"></span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-100 rounded-[30px] p-6 w-[280px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 ease-in-out">{member.name}</h3>
              <p className="text-gray-600 text-center text-sm mb-6 transition-colors duration-300 ease-in-out">{member.role}</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <FaTwitter className="text-gray-600 text-sm transition-colors duration-300 ease-in-out" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <FaGoogle className="text-gray-600 text-sm transition-colors duration-300 ease-in-out" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <FaTelegramPlane className="text-gray-600 text-sm transition-colors duration-300 ease-in-out" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

