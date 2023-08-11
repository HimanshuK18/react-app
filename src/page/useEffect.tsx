import { Key, useEffect, useState } from "react";
import { CatService } from '../services/catService';

function Effect() {
    const catService = new CatService();
    let [employees, setData] = useState<any>([]);
    useEffect(() => {
        (async () => {
            const response = await catService.getCatData();
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setData(employees = response.data);
        })();

        return () => {
            console.log('clean up')
        }
    }, []);
    return (<>
        <h6>Use Effcet Demo</h6>
        <div>
            {employees.map((data: any, index: Key) => <div key={index}>{data.name}</div>)}
        </div>
    </>);
}

export default Effect;