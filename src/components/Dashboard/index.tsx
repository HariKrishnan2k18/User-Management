import Header from "../Header";
import TodoApp from "../Todo";
import { Container, Wrapper } from "./styled.components";

function Dashboard() {
  return (
    <Container>
      <Wrapper>
        <Header />
        <TodoApp />
      </Wrapper>
    </Container>
  );
}
export default Dashboard;
