import ItemInform from "../../molecules/ItemsInform/ItemsInform";
import ItemsHeader from "../../molecules/ItemsHeader/ItemsHeader";
import { Container, Div, Button} from "./StyledItem";

interface Props {
  title: string;
  date: Date;
  isCompleted: boolean;
  isSelect:boolean;
  onDelete: () => void;
  onSelect: (isSelect: boolean) => void;
  onCompleted: () => void;
}

const Item = ({
  title,
  date,
  isCompleted,
  isSelect,
  onCompleted,
  onDelete,
  onSelect,
}: Props) => {

  return (
    <Container isActive={isCompleted||isSelect} >
      <Div>
        <ItemsHeader onSelect={onSelect} onDelete={onDelete} />
        <ItemInform title={title} date={date}></ItemInform>
      </Div>
      <Button onClick={() => onCompleted()}>{!isCompleted ? 'Выполнено':'Не выполнено'}</Button>
    </Container>
  );
};
export default Item;
