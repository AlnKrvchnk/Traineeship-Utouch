import { TitleSecondary } from "../../atoms/TextElement/TextElement";
import { DateText } from "../../atoms/TextElement/Date";

interface Props {
  title: string;
  date: Date;
  isCompleted: boolean;
  isSelect:boolean;
  // onDelete: () => void;
  // onSelect: (isSelect: boolean) => void;
  // onCompleted: () => void;
}

const Item = ({
  title,
  date,
  isCompleted,
  isSelect,
  // onCompleted,
  // onDelete,
  // onSelect,
}: Props) => {

  return (
    <div>
    <TitleSecondary light={false}>{title}</TitleSecondary>
    <DateText light={false}>{date}</DateText>
    </div>
  );
};
export default Item;
