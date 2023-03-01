import './index.scss';
import { Link } from 'react-router-dom';

export default function PortfolioInfoBox({ title, description, stack, url, demo }) {

  return (
    <div className="info-box">
      <div className="project-title">
        <h2 className="h2-title">
          {title}
        </h2>
      </div>
      <div className="project-description"> {description}</div>
      <div className="project-stack"> Built with {stack}</div>

      <div>
        <Link to={url[0]} target="_blank" className='flat-button project-link'>View Code</Link>
      </div>
    </div>);
}
