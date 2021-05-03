import React from 'react'
import Tittle from '../Components/Tittle'

import SkillsSection from '../Components/SkillsSection';

function SkillsPage() {
  return (
    <div className = "SkillsPage">
      <Tittle title={'My Skills'} span={'My Skills'} />
      <div className="skillsContainer">
        <SkillsSection skill={'Javascript'} progress={'30%'} width={'30%'} />
        <SkillsSection skill={'C language'} progress={'40%'} width={'40%'} />
        <SkillsSection skill={'UI/UX Design'} progress={'30%'} width={'30%'} />
        <SkillsSection skill={'Python'} progress={'20%'} width={'20%'} />
        <SkillsSection skill={'ReactJS'} progress={'20%'} width={'20%'} />
        <SkillsSection skill={'Web Design'} progress={'40%'} width={'40%'} />
      </div>
    </div>
  )
}

export default SkillsPage
