import React from 'react'
import MainProfile from './MainProfile';
import SuggestedBox from './SuggestedBox';
import Analysis from './Analysis';
import Featured from './Featured';
import Education from './Education';
import ProjectsBox from './ProjectsBox';
import Skills from './Skills';
import Languages from './Languages';
import AboutSection from './AboutSection';
import aboutText from '../assets/aboutText';
import InterestSection from './InterestSection';

const LeftBox = () => {
  return (
    <div>
      <div className='rounded-xl h-full bg-white overflow-x-hidden pb-8 shadow-md border border-[#f4f2ee]'>
        <div className=" h-full">
          {/* Profile box */}
          <MainProfile />
        </div>
      </div>
      {/* Suggested for you box */}
      <div className='rounded-xl h-full bg-white overflow-x-hidden pb-3 mt-4 shadow-md border border-[#f4f2ee]'>
        <div className=" h-full p-2">
          <SuggestedBox />
        </div>
      </div>

      {/* Analysis  */}
      <div className='rounded-xl h-full bg-white overflow-x-hidden  mt-4 border border-[#f4f2ee] shadow-md'>
        <div className=" h-full">
          <Analysis />
        </div>
      </div>

      {/* About */}
      <div className='rounded-xl h-full bg-white overflow-x-hidden  mt-4 border border-[#f4f2ee] shadow-md'>
        <div className=" h-full">
          <AboutSection text={aboutText} />
        </div>
      </div>

      {/* Featured  */}
      <div className='rounded-xl h-full bg-white overflow-x-hidden pb-3 mt-4 shadow-md border border-[#f4f2ee]'>
        <div className=" h-full w-full">
          <Featured />
        </div>
      </div>

      {/* Education  */}
      <div className='rounded-xl h-full bg-white overflow-x-hidden pb-3 mt-4 shadow-md border border-[#f4f2ee]'>
        <div className=" h-full w-full">
          <Education />
        </div>
      </div>

      {/* Projects */}
      <div className='rounded-xl h-full bg-white overflow-x-hidden pb-3 mt-4 shadow-md border border-[#f4f2ee]'>
        <div className=" h-full w-full">
          <ProjectsBox />
        </div>
      </div>

      {/* Skills */}
      <div className='rounded-xl h-full bg-white overflow-x-hidden mt-4 shadow-md border border-[#f4f2ee]'>
        <div className=" h-full w-full">
          <Skills />
        </div>
      </div>

      <div className='rounded-xl h-full bg-white overflow-x-hidden mt-4 shadow-md border border-[#f4f2ee]'>
        <div className=" h-full w-full">
          <Languages />
        </div>
      </div>

      <div className='rounded-xl h-full bg-white overflow-x-hidden mt-4 shadow-md border border-[#f4f2ee]'>
        <div className=" h-full w-full">
          <InterestSection />
        </div>
      </div>

    </div>
  )
}

export default LeftBox
