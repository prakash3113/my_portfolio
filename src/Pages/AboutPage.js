import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/web.png';
import intelligence from '../img/wordpress.png';
import gamedev from '../img/software.png';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Java'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'JavaScript'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'React Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Node Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'C Language'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'C++'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'PHP'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'HTML5'} progress={'95%'} width={'95%'} />
                <SkillsSection skill={'CSS3'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Web Design'} progress={'80%'} width={'85%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'Mysql'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'MongoDB'} progress={'50%'} width={'50%'} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} 
                text={'eCommerce, Landing Pages , Portfolios, Professional website, Static websites'}
                />
                <ServicesSection image={intelligence} title={'Wordpress web design'} 
                text={'eCommerce, Landing Pages , Portfolios, Professional website, Static websites'}
                />
                <ServicesSection image={gamedev} title={'Software Development'} 
                text={'conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components.'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;
