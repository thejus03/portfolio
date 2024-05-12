import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LiaUniversitySolid } from "react-icons/lia";

const Timeline = () => {
    return (
    <VerticalTimeline lineColor='#33332d' className='text'>
  <VerticalTimelineElement 
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#fff', color: '#33332d',border:"2px solid black"}}
    contentArrowStyle={{ borderRight: '7px solid  #33332d' }}
    date="Aug 2024 - Present"
    dateClassName='text'
    iconStyle={{ background: '#33332d', color: '#fff' }}
    icon={<LiaUniversitySolid></LiaUniversitySolid>}
  >
    <h3 className="vertical-timeline-element-title">National University of Singapore (NUS)</h3>
    <h4 className="vertical-timeline-element-subtitle">B.Comp, Computer Science and Quantitative Finance</h4>
    <p>
        Freshman at NUS
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement 
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#fff', color: '#33332d',border:"2px solid black"}}
    contentArrowStyle={{ borderRight: '7px solid  #33332d' }}
    date="Jan 2020 - Dec 2021"
    dateClassName='text'
    iconStyle={{ background: '#33332d', color: '#fff' }}
    icon={<IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline>}
  >
    <h3 className="vertical-timeline-element-title">Anderson Serangoon Junior College (ASRJC)</h3>
    <h4 className="vertical-timeline-element-subtitle">Physics, Chemistry, Maths, Economics</h4>
    <p>
        <div>"A" Level Score - AAA/A</div>
        <table> <b>Awards & Honors</b>
            <li>SINDA Excellence Award - Highest honour awarded to Indian students who perform exceptionally well in academics</li>
            <li>Consistently in the top 10 percentile throughout the 2 years.</li>
            <li>Top in cohort for Economics in Prelims.</li>
            <li>CCC-WEST COAST COMMUNITY AWARD -  Awarded for performing well in academics </li>
        </table>
        <table> <b>Co-Curricular Activities</b>
            <li>Hockey</li>
        </table>
        
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement 
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#fff', color: '#33332d',border:"2px solid black"}}
    contentArrowStyle={{ borderRight: '7px solid  #33332d' }}
    date="Jan 2016 - Dec 2019"
    dateClassName='text'
    iconStyle={{ background: '#33332d', color: '#fff' }}
    icon={<IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline>}
  >
    <h3 className="vertical-timeline-element-title">Clementi Town Secondary School (CTSS)</h3>
    <h4 className="vertical-timeline-element-subtitle">Physics, Chemistry, Geography, Social Studies, E-Maths, Advanced Maths, Computing</h4>
    <p>
        <table><b>Co-Curricular Activities</b>
            <li>Badminton - Vice Captain</li>
            <li>Sports Leader</li>
        </table>
    </p>
    </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: '#33332d', color: '#fff' }}
  />
</VerticalTimeline>
    )
} 

export default Timeline