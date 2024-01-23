import React, { useEffect, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

let dragSource = null;
const DropDown = ({ id, collapseId, title, handleChangePosition, children }) => {
  const dropDownIcon = `./assets/icons/drop_down_${id}_icon.svg`;
  const draggingClass = 'dragging';

  const [ dropDownStatus, setDropDownStatus ] = useState(null);

  const [ { dragClass }, dragRef ] = useDrag(
    () => ({
      type: 'accordion',
      options: { dropEffect: 'move' },
      item: { id },
      collect: monitor => ({ draggingClass: monitor.isDragging() ? draggingClass : '' }),
    }),
    [],
  );

  const [ _, dropRef ] = useDrop(
    () => ({
      accept: [ 'accordion' ],
      drop (_item, monitor) {
        handleChangePosition(monitor.getItem()?.id, id);
      },
    }),
    [ handleChangePosition ],
  );

  useEffect(() => {
    chrome.storage.local.get([ `${id}_drop_down` ]).then(res => {
      setDropDownStatus(res[`${id}_drop_down`]);
    });
  }, []);

  return (
    <>
      <div ref={dropRef}>
        <div className={`accordion-item ${dragClass}`} ref={dragRef} draggable="true" id={id}>
          <h2 className="accordion-header" id={`heading${collapseId}`}>
            <button
              className={`accordion-button ${!(dropDownStatus ?? true) ? 'collapsed' : ''} py-1`}
              type="button"
              onClick={() => {
                chrome.storage.local.set({ [`${id}_drop_down`]: !(dropDownStatus ?? true) });

                setDropDownStatus(!dropDownStatus);
              }}
              id={`${id}_drop_down_button`}
              data-bs-toggle={`${dropDownStatus ?? true ? 'collapse' : ''}`}
              data-bs-target={`#collapse${collapseId}`}
              aria-expanded={dropDownStatus ?? true ? 'true' : 'false'}
              aria-controls={`collapse${collapseId}`}
            >
              <div className="d-flex align-items-center gap-1" id={`${id}_image_changing`}>
                <img src={chrome.runtime.getURL(dropDownIcon)} alt="item" />
                <span>{title}</span>
              </div>
            </button>
          </h2>
        </div>
      </div>

      <div className="accordion-item">
        <div className={`accordion-collapse collapse ${(dropDownStatus ?? true) && 'show'}`} id={`collapse${collapseId}`} aria-labelledby={`heading${collapseId}`}>
          {children}
        </div>
      </div>
    </>
  );
};

export default React.memo(DropDown);
