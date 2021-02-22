import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const Heading = styled.h3`
  margin: 0;
  padding-bottom: .8rem;
  text-align: center;
`;

const CenteredColumn = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const TopBanner = () => {
  return (
    <Jumbotron>
      <Container fluid>
        <Row>
          <Col sm={12} md={6} lg={3}>
            <Heading>Spending Categories</Heading>
            {/* Budget spending categories */}
          </Col>
          <Col sm={12} md={6} lg={3}>
            <h3>Spending Budget</h3>
          </Col>
          <CenteredColumn sm={12} md={6} lg={3}>
            <Heading>Total Available Budget</Heading>
            {/* Budget available */}
          </CenteredColumn>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default TopBanner;
