type ColumnProps = {
  state: string;
};

const Column: React.FC<ColumnProps> = (props) => {
  return <div>{props.state}</div>;
};

export default Column;
