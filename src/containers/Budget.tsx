import { useState, useEffect } from 'react';
import DateBar from '../components/DateBar';

const Budget = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    // Fetch Data Here
  }, []);

  return (
    <div>
      <DateBar year={2021} month={3} />
    </div>
  );
};

export default Budget;
