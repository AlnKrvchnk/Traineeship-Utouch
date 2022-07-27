import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Item } from '../../../app/types/Item';
import { Paths } from '../../../routes/Paths';
import Button from '../../atoms/Button/Button';
import { Title } from '../../atoms/TextElement/TextElement';
import Nav from '../../molecules/Nav/Nav';
// import ItemDetail
// from '../../organisms/ItemDetail/ItemDetail';
import { Container, Div } from './StyledToDoDetailsConatainer';

interface Props {
    items: Item[];
    currentItem: Item | undefined;
    exit: () => void;
}
const ItemDetail = React.lazy(
    () => import('../../organisms/ItemDetail/ItemDetail')
);

const ToDoDetailsContainer = ({ items, currentItem, exit }: Props) => {
    return (
        <div>
            <Container>
                <div>
                    <Link to={Paths.ToDo}>
                        <Button small={false}>Все задачи</Button>
                    </Link>
                </div>
                <div>
                    <Link to={Paths.SignIn}>
                        <Button small={false} onClick={exit}>
                            Выйти
                        </Button>
                    </Link>
                </div>
            </Container>
            <Nav
                links={items.map((item) => {
                    return {
                        url: `${Paths.ToDo}/${String(item.id)}`,
                        title: item.title,
                    };
                })}
            />
            <Div>
                <Suspense
                    fallback={<Title light={false}>Loading Item...</Title>}
                >
                    <ItemDetail
                        title={`${currentItem ? currentItem.id : ''}. ${
                            currentItem ? currentItem.title : ''
                        }`}
                        date={currentItem ? currentItem.date : ''}
                        isCompleted
                        isSelect
                    />
                </Suspense>
            </Div>
        </div>
    );
};

export default ToDoDetailsContainer;
