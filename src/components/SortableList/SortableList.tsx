import { ReactNode, useState } from "react";
import {DndContext, closestCenter, DragEndEvent} from '@dnd-kit/core';
import {SortableContext, verticalListSortingStrategy, arrayMove} from '@dnd-kit/sortable'
import SortableItemWrapper from "../SortableItemWrapper/SortableItemWrapper";

export type EntityWithId = {id: number};

interface SortableListProps<T extends EntityWithId> {
    unsortedItems: T[];
    getItemComponent: (item: T) => ReactNode;
    onDragEnd: (newIndex: number) => void;
}

const SortableList = <T extends EntityWithId>({unsortedItems, getItemComponent, onDragEnd}: SortableListProps<T>): ReactNode => {
    const [items, setItems] = useState(unsortedItems);

    const handleDragEnd = (event: DragEndEvent) => {
        const {active, over} = event;        

        if (over && active.id !== over.id) {
            setItems((prevItems) => {
                const oldIndex = prevItems.findIndex(({id}) => id === active.id);
                const newIndex = prevItems.findIndex(({id}) => id === over.id);                  
                
                onDragEnd(newIndex);

                return arrayMove(prevItems, oldIndex, newIndex);
            })
        }
    }

    return (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={unsortedItems.map(({id}) => id)} strategy={verticalListSortingStrategy}>
                {items.map((item) => (<SortableItemWrapper key={item.id} id={item.id}>
                                        {getItemComponent(item)}
                                      </SortableItemWrapper>))}
            </SortableContext>
        </DndContext>
    )
}

export default SortableList;