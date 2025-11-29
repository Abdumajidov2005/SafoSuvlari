import { useState } from 'react';

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="accordion-item">
      <button 
        className={`accordion-header ${isOpen ? 'active' : ''}`}
        onClick={onToggle}
      >
        <span>{title}</span>
        <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="accordion-body">
          {children}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items, allowMultiple = false }) => {
  const [openItems, setOpenItems] = useState([]);

  const handleToggle = (index) => {
    if (allowMultiple) {
      setOpenItems(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems(prev => 
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openItems.includes(index)}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
