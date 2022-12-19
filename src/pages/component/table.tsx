import Card from "@components/Card";
import TableComponent from "@components/TableComponent";
import Admin from "@layout/Admin"
const data = [
    {
        name: 'Cy Ganderton',
        job: 'Quality Control Specialist',
        fc: 'Blue'
    },
    {
        name: 'Hart Hagerty',
        job: 'Desktop Support Technician',
        fc: 'Purple'
    },
    {
        name: 'Brice Swyre',
        job: 'Tax Accountant',
        fc: 'Red'
    },
    {
        name: 'Marjy Ferencz',
        job: 'Office Assistant I',
        fc: 'Crimson'
    }
]
const header = ['name','job','favorite color']
const Table = () => {
    return (
        <div className="p-2 flex flex-wrap">
            <div className="p-2 w-full md:w-1/2">
                <Card className="p-3 h-full">
                    <Card.main>
                        <h2 className="font-medium text-sm text-gray-700 mb-1">Basic usage</h2>
                        <p className="font-normal text-sm text-gray-500 mb-4">Basic usage example.</p>
                        <TableComponent header={header} data={data}/>
                    </Card.main>
                </Card>
            </div>
            <div className="p-2 w-full md:w-1/2">
                <Card className="p-3 h-full">
                    <Card.main>
                        <h2 className="font-medium text-sm text-gray-700 mb-1">Bordered Table</h2>
                        <p className="font-normal text-sm text-gray-500 mb-4">Tables display information in a way that easy to scan, so that users can look for patterns and insights</p>
                        <TableComponent bordered header={header} data={data}/>
                    </Card.main>
                </Card>
            </div>
            <div className="p-2 w-full md:w-1/2">
                <Card className="p-3 h-full">
                    <Card.main>
                        <h2 className="font-medium text-sm text-gray-700 mb-1">Hoverable Rows</h2>
                        <p className="font-normal text-sm text-gray-500 mb-4">Tables display information in a way that easy to scan, so that users can look for patterns and insights</p>
                        <TableComponent ishoverable header={header} data={data}/>
                    </Card.main>
                </Card>
            </div>
            <div className="p-2 w-full md:w-1/2">
                <Card className="p-3 h-full">
                    <Card.main>
                        <h2 className="font-medium text-sm text-gray-700 mb-1">Zebra Table</h2>
                        <p className="font-normal text-sm text-gray-500 mb-4">Tables display information in a way that easy to scan, so that users can look for patterns and insights</p>
                        <TableComponent zebra header={header} data={data}/>
                    </Card.main>
                </Card>
            </div>
            <div className="p-2 w-full md:w-1/2">
                <Card className="p-3 h-full">
                    <Card.main>
                        <h2 className="font-medium text-sm text-gray-700 mb-1">Colorable Table</h2>
                        <p className="font-normal text-sm text-gray-500 mb-4">Tables display information in a way that easy to scan, so that users can look for patterns and insights</p>
                        <TableComponent color={{header:"bg-blue-600 text-white",border:"border-white",zebra1:"odd:bg-blue-50",zebra2:"even:bg-blue-200",hover:"hover:bg-blue-300 text-blue-800"}} bordered ishoverable zebra header={header} data={data}/>
                    </Card.main>
                </Card>
            </div>
        </div>
    );
}

export default Table;
Table.layout = Admin