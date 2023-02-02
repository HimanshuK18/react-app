import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from "react";
import { CatService } from '../services/catService';

function Effect() {
    const catService = new CatService();
    let [employees, setData] = useState<any>([]);
    useEffect(() => {
        async function fetchData() {
            const response = await catService.getCatData();
            let  fetchedData = response.data;
            setData(employees = fetchedData);
        }
        fetchData();
    }, []);
    return (<>
        <h6>Use Effcet Demo</h6>
        <div>
            {employees.map((data: any,index: Key) => <div key={index}>{data.name}</div>)}
        </div>
    </>);
}

export default Effect;