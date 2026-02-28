import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";

export default function Kanban() {
  const [columns, setColumns] = useState({
    upcoming: {
      name: "Upcoming 🎬",
      items: [
        { id: "1", title: "Pushpa 3" },
        { id: "2", title: "Avengers Secret Wars" },
      ],
    },
    running: {
      name: "Running 🎥",
      items: [
        { id: "3", title: "KGF Chapter 2" },
      ],
    },
    ended: {
      name: "Ended 🍿",
      items: [
        { id: "4", title: "RRR" },
      ],
    },
  });

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];

    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];

    const [removed] = sourceItems.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
      });
    } else {
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Movie Status Board</h2>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-3 gap-6">

          {Object.entries(columns).map(([columnId, column]) => (
            <div
              key={columnId}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4"
            >
              <h3 className="text-xl font-semibold mb-4 text-center">
                {column.name}
              </h3>

              <Droppable droppableId={columnId}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="min-h-40 space-y-3"
                  >
                    {column.items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow hover:scale-105 transition cursor-pointer"
                          >
                            {item.title}
                          </div>
                        )}
                      </Draggable>
                    ))}

                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}

        </div>
      </DragDropContext>
    </div>
  );
}
