import Container from "@/components/Container";

const index = () => {
  return (
    <div className="flex row">
      <div className="flex col">
        <Container heigth={200} width={400}>
          <div> hei</div>
        </Container>
        <Container heigth={200} width={400}>
          <div> hei</div>
        </Container>
      </div>
      <Container heigth={600} width={300}>
        <div> hei</div>
      </Container>
    </div>
  );
};

export default index;
