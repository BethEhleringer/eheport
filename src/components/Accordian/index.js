import React, { Fragment } from 'react';
//import React, { Fragment } from 'react';

import Grid, {Row, Col} from "../Grid";

import posed from 'react-pose';
import data2 from '../../data2';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

const plusIcon = <FontAwesomeIcon icon={faPlusCircle} />
const minusIcon = <FontAwesomeIcon icon={faMinusCircle} />



const Content = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' }
});

class Accordian extends React.Component {
  state = { open: false };

  render() {
    const { open } = this.state;

    return (
      <Fragment>
                {data2.map(({ title, image, link, codeLink, objective, role, skills, challenges, takeaways }, i) => (
          <Fragment>
            <h3
              className="title"
              onClick={() => this.setState({ open: open === i ? false : i })}
            >
              {open === i ? minusIcon : plusIcon }
              {" "}{title}
            </h3>
            <Content className="content" pose={open === i ? 'open' : 'closed'}>
              <div className="content-wrapper">
              <Row>
  <Col size="lg-6 md-6 sm-12 xs-12">
              <div className="img-container">
                <img alt={title} src={image} />
              </div>
              <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href={link} target="_blank" rel="noopener roreferrer nofollow">Deployed site</a></li>
        <li className="nav-item">
          <a href={codeLink} target="_blank" rel="noopener roreferrer nofollow">Git-Hub Repository</a></li></ul>
           </Col>
           <Col size="lg-6 md-6 sm-12 xs-12">
             <ul><li>{objective}</li>
             <li>{role}</li>
             <li>{skills}</li>
             <li>{challenges}</li>
             <li>{takeaways}</li>
              </ul>
              </Col>
              </Row>
              </div>
            </Content>
          </Fragment>
        ))}
      </Fragment>
    );
  }
}
export default Accordian;


/*const rootElement = document.getElementById('root');
ReactDOM.render(<Example />, rootElement);*/
