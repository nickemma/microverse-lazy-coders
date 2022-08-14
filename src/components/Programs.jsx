import { Link } from 'react-router-dom';
import { FaCrown } from 'react-icons/fa';
import { AiFillCaretRight } from 'react-icons/ai';
import SectionTitle from './SectionTitle';
import { programs } from '../data';
import Card from '../UI/Card';

function Programs() {
  return (
    <section className="programs">
      <div className="container programs-content">
        <SectionTitle icon={<FaCrown />} title="Programs" />
        <div className="programs-wrapper">
          {programs.map(({ id, icon, title, info, path }) => {
            return (
              <Card className="programs-items" key={id}>
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{info}</p>
                <Link to={path} className="btn">
                  Learn More
                  <AiFillCaretRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Programs;
