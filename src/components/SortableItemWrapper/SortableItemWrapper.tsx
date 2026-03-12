import React, { ReactNode } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { EntityWithId } from "../SortableList/SortableList";
import Style from './SortableItemWrapper.module.css'

interface SortableItemWrapperProps extends EntityWithId {
    children: ReactNode;
}

const SortableItemWrapper: React.FC<SortableItemWrapperProps> = ({id, children}) => {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id});    

    return <div ref={setNodeRef} className={Style.container} style={{transition, transform: CSS.Transform.toString(transform)}}>
            <span {...attributes} {...listeners} className={Style.grabButton}>=</span>
            
            {children}
           </div>
}

export default SortableItemWrapper;