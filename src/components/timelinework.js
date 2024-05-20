import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdWorkOutline } from "react-icons/md";

const TimelineWork = () => {
    return (
        <VerticalTimeline lineColor='#33332d' className='text'>

<VerticalTimelineElement 
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#fff', color: '#33332d',border:"2px solid black"}}
    contentArrowStyle={{ borderRight: '7px solid  #33332d' }}
    date="Mar 2024 - Present"
    dateClassName='text'
    iconStyle={{ background: '#33332d', color: '#fff' }}
    icon={<MdWorkOutline></MdWorkOutline>}
  >
    <h3 className="vertical-timeline-element-title">Software Engineer Intern, Invigilo AI</h3>
    {/* <p>
        <table>
            
        </table>
        
    </p> */}
  </VerticalTimelineElement>
  <VerticalTimelineElement 
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#fff', color: '#33332d',border:"2px solid black"}}
    contentArrowStyle={{ borderRight: '7px solid  #33332d' }}
    date="Jan 2024 - Present"
    dateClassName='text'
    iconStyle={{ background: '#33332d', color: '#fff'}}
    icon={<IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline>}
  >
    <h3 className="vertical-timeline-element-title">Research Consultant, WorldQuant</h3>
    <p>
        <table>
            <li>Developed and improved on existing alphas to maximise the profits of US/China TOP500 stocks by backtesting against historical data.</li>
            <li>Gained deeper insights into algorithmic trading and financial modelling.</li>
        </table>
        
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement 
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#fff', color: '#33332d',border:"2px solid black"}}
    contentArrowStyle={{ borderRight: '7px solid  #33332d' }}
    date="Jan 2022 - Nov 2023"
    dateClassName='text'
    iconStyle={{ background: '#33332d', color: '#fff' }}
    icon={<IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline>}
  >
    <h3 className="vertical-timeline-element-title">Commando, National Service</h3>
    <p>
        <table>
            <li>Participated in numerous local exercises and outfields</li>
            <li>Engaged in overseas training in Brunei</li>
            <li>Completed the X72 (72Km route march) earning the Red Beret.</li>
            <li>Competed in the ATEC in Thailand, contributing to our unit winning the Best Combat Unit award.</li>
            <li>Represented the formation in the 2023 Bilateral exercise with the Chinese military</li>
            <li>Executed airborne jumps.</li>
            <li>Represented the formation in the Singapore Armed Forces (SAF) day and National Day Parade (NDP) 2023.</li>
        </table>
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    iconStyle={{ background: '#33332d', color: '#fff' }}
  />
</VerticalTimeline>
    )
}

export default TimelineWork