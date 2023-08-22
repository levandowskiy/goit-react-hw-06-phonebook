import { handleFilterChange } from "../../redux/filterSlice";
import { useSelector, useDispatch } from "react-redux";

export function Filter() {
  const handleInputChange = (event) => {
    const value = event.target.value;
    dispatch(handleFilterChange(value));
  };

  const filter = useSelector(s => s.filter);
  const dispatch = useDispatch()
  return <input type="text" onChange={handleInputChange} value={filter} />;
}

