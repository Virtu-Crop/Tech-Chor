import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {

  const [funkyLines, setFunkyLines] = useState([
    {
      x1: 100,
      y1: 200,
      x2: 300,
      y2: 400,
      color: '#FFCCCC',
    },
    {
      x1: 400,
      y1: 300,
      x2: 600,
      y2: 500,
      color: '#FFFFE0',
    },
    {
      x1: 700,
      y1: 400,
      x2: 900,
      y2: 600,
      color: '#99CC99',
    },
  ]);

  return (
    <div className="landing-page">
      <div className="funky-lines">
        {funkyLines.map((line, index) => (
          <div
            key={index}
            className="funky-line"
            style={{
              position: 'absolute',
              left: line.x1,
              top: line.y1,
              width: line.x2 - line.x1,
              height: line.y2 - line.y1,
              backgroundColor: line.color,
            }}
          />
        ))}
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faCode} />
        <FontAwesomeIcon icon={faDatabase} />
        <FontAwesomeIcon icon={faServer} />
      </div>
    </div>
  );
};

export default LandingPage;