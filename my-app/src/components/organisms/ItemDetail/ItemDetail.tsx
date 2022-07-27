import { TitleSecondary } from "../../atoms/TextElement/TextElement";
import { DateText } from "../../atoms/TextElement/Date";
import { dateT } from "../../../app/types/Item";

interface Props {
  title: string;
  date: dateT;
  isCompleted: boolean;
  isSelect:boolean;
  // onDelete: () => void;
  // onSelect: (isSelect: boolean) => void;
  // onCompleted: () => void;
}

const Item = ({
    title,
    date,
}: Props) => {

    return (
        <div>
            <TitleSecondary light={false}>{title}</TitleSecondary>
            <br />
            <DateText light={false}>{date}</DateText>
        </div>
    );
};
export default Item;
