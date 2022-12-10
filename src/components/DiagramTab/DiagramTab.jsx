import Chart from '../Chart/Chart';
import Table from '../Table/Table';

import { Container, ChartWrapper, Title } from './DiagramTab.styled';

const DiagramTab = () => {

  return (
    <Container>
      <ChartWrapper>
        <Title>Statistics</Title>
        <Chart />
      </ChartWrapper>
      <Table />
    </Container>
  );
}

export default DiagramTab;