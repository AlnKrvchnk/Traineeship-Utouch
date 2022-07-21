import ItemInform from "../../molecules/ItemsInform/ItemsInform";
import ItemsHeader from "../../molecules/ItemsHeader/ItemsHeader";
import { Container, Div, Button} from "./StyledItem";
import { Link } from "react-router-dom";
import { Paths } from "../../../routes/Paths";

interface Props {
  id:string,
  title: string;
  date: Date;
  isCompleted: boolean;
  isSelect:boolean;
  onDelete: () => void;
  onSelect: (isSelect: boolean) => void;
  onCompleted: () => void;
}

const Item = ({
  id,
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
            <ItemsHeader isSelect={isSelect} onSelect={onSelect} onDelete={onDelete} />
            <Link to={`${Paths.ToDo}/${id}`}>
              <ItemInform title={title} date={date}></ItemInform>
            </Link>
            </Div>
        
        <Button onClick={() => onCompleted()}>{!isCompleted ? 'Выполнено':'Не выполнено'}</Button>
    </Container>
  );
};
export default Item;
