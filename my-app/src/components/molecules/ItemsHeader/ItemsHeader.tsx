import { useEffect, useState } from "react";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import { Div, Button } from "./StyledItemsHeader";
interface Props {
  isSelect: boolean;
  
  onSelect: (isSelect: boolean) => void;
  onDelete: () => void;
}

const ItemsHeader = ({ isSelect, onSelect, onDelete }: Props) => {
  const [isChecked, setChecked] = useState<boolean>(false);

  const setSelect = useEffect(() => {
    setChecked(isSelect);
  });

  const handleChange = () => {
    setChecked(!isChecked);
    onSelect(isChecked);
  };

  return (
    <Div>
      <Checkbox primary checked={isChecked} onChange={handleChange}></Checkbox>
      <Button onClick={onDelete}>X</Button>
    </Div>
  );
};

export default ItemsHeader;
