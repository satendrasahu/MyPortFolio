import React from 'react'
import Title from '../Components/Titles'
import ImageSection from '../Components/ImageSectionPage'
import SkillsSection from '../Components/SkillsSection'
import ServiceSection from '../Components/ServicesSection'
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';
import QualificationSectionPage from '../Components/QualificationSectionPage'
/**
* @author
* @function AboutPage
**/

const AboutPage = (props) => {
    return (
        <div className="AboutPage">
            <Title title={'About me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Qualifications'} span={'My Qualification'} />
            <div className="skillsContainer">
                <QualificationSectionPage skill={'High School (July 2012 - June 2013)'} progress={'82.17%'} width={'80.17%'} />
                <QualificationSectionPage skill={'Higher Secondary (July 2014 - June 2015)'} progress={'82%'} width={'82%'} />
                <QualificationSectionPage skill={'BSC Computer Science (July 2015 - June 2018) [Govt. Nirbhay Singh Patel Science Collage Indore(DAVV)]'} progress={'70%'} width={'70%'} />
                <QualificationSectionPage skill={'Master of Computer Application(MCA) (July 2018 - May 2021) [Birla Institute of Technology, Mesra(Ranchi)]'} progress={'80%'} width={'80%'} />
            </div>

            <Title title={'My Skills'} span={'My Skills'} />
            <h1>Front End</h1>
            <div className="skillsContainer">
                <SkillsSection skill={'HTML'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'CSS/SCSS/SASS'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Javascript'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'JQuery'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'Bootstrap'} progress={'95%'} width={'95%'} />
                <SkillsSection skill={'Material Css'} progress={'95%'} width={'95%'} />
            </div>

            <h1>Back End</h1>
            <div className="skillsContainer">
                <SkillsSection skill={'C'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'C++'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'php'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'dart'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'java'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'J2EE'} progress={'65%'} width={'65%'} />
                <SkillsSection skill={'Python'} progress={'40%'} width={'40%'} />
            </div>

            <h1>DataBase</h1>
            <div className="skillsContainer">
                <SkillsSection skill={'MySql'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'MongoDB/Mongoose'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'JDBC'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Firebase'} progress={'60%'} width={'60%'} />
            </div>

            <h1>FrameWork / Libraries</h1>
            <div className="skillsContainer">
                <SkillsSection skill={'Hibernate'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Spring Framework'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Spring MVC'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Spring Boot'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'MongoDB/Mongoose'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Express'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'React'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Redux'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Angular'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Node Js'} progress={'70%'} width={'70%'} />
            </div>

            <h1>App Devolopments</h1>
            <div className="skillsContainer">
                <SkillsSection skill={'Android'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'React Native'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Flutter'} progress={'50%'} width={'50%'} />
            </div>

            <h1>Others(Basic Knowledge Only)</h1>
            <div className="skillsContainer">
                <SkillsSection skill={'Data Structure & Algo'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'RDBMS'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'OS'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Computer Network & Network Security'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Automata & compiler Design'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'AI&Machine Learning'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Deep Learning'} progress={'20%'} width={'20%'} />
                <SkillsSection skill={'Cloud Computing'} progress={'40%'} width={'40%'} />

            </div>

            <h1>Tools</h1>
            <div className="skillsContainer">
                <SkillsSection skill={'Git/Github'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Eclipse'} progress={'95%'} width={'95%'} />
                <SkillsSection skill={'Netbeans'} progress={'95%'} width={'95%'} />
                <SkillsSection skill={'STS'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Vs Code'} progress={'95%'} width={'95%'} />
                <SkillsSection skill={'Sublime'} progress={'95%'} width={'95%'} />
                <SkillsSection skill={'Intellij Idea'} progress={'95%'} width={'95%'} />
                <SkillsSection skill={'Pycharm'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Jupyter Notebook'} progress={'95%'} width={'95%'} />
                <SkillsSection skill={'CodeBlock'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Postman'} progress={'95%'} width={'95%'} />
                <SkillsSection skill={'Ms Office'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Android Studio'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'Workbench'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Xampp Server'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Dev Azure'} progress={'70%'} width={'70%'} />

            </div>

            <Title title={'My Services'} span={'My Services'} />
            <div className="services-container">
                <ServiceSection image={design} title={'Web Development'} text={"this is lovely Lorem Ipsum is simply dummy text of the printing and typesetting industry."} />
                <ServiceSection image={intelligence} title={'Artificial Intellegence'} text={"this is lovely Lorem Ipsum is simply dummy text of the printing and typesetting industry."} />
                <ServiceSection image={gamedev} title={'App Development'} text={"this is lovely Lorem Ipsum is simply dummy text of the printing and typesetting industry."} />
            </div>

        </div>
    )

}

export default AboutPage