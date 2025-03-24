import { createContext, useState } from "react";
import { employeeData } from "./data";

export const EmployeeContext = createContext();

export default function EmployeeContextProvider(props) {
  const data = employeeData;
  const [employeeList, setEmployeeList] = useState(data);

  return (
    <EmployeeContext.Provider value={{ employeeList, setEmployeeList }}>
      {props.children}
    </EmployeeContext.Provider>
  );
}
