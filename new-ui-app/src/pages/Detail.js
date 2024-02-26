import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const Detail = () => {
    function convertISOToDateTime(isoDateTime) {
        const date = new Date(isoDateTime);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
      
        return `${hours}:${minutes} ${day}-${month}-${year}`;
    }
  const location = useLocation();
  const { author, content, description, publish, title, url, urlToImage} = location.state;

  return (
    <div className='containerdetail'>
    <Container style={{ fontSize: "30px", marginRight: "20%" }}>
        <h1>
        <Badge bg="secondary">{title}</Badge>
      </h1>
      <Row>
        <Col>
        <Image src={urlToImage} fluid />
        <Row>
        <Col style={{ fontSize: "20px" }}>Author: {author}</Col>
        <Col style={{ fontSize: "20px" }}>Publish: {convertISOToDateTime(publish)}</Col>
      </Row>
        </Col>
    <Col style={{ textAlign: "justify" }}>
        <Row>
        <Col>{description}</Col>
      </Row>
      <Row>
        <Col>{content}</Col>
      </Row>
        </Col>
      </Row>

    <div>
        You can view detail in: 
        <a  target='_blank' href={url}>
            <Button variant="outline-primary">Link</Button>
        </a>
    </div>
  </Container>
    </div>

   
  );
};

export default Detail;