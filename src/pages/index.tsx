import CardDashboard from '@components/CardDashboard'
import Admin from '@layout/Admin'
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,BarElement,Title,Tooltip,Legend} from 'chart.js'
import {Bar,Line} from 'react-chartjs-2'
import Card from '@components/Card'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Bar Chart',
    },
  },
};
const options2 = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Line Chart',
    },
  },
};
const labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const data = {
  labels,
  datasets:[
    {
      label: 'Data A',
      data: [34,55,21,77,32,63,86,42,34,18,16,41],
      backgroundColor: 'rgba(255, 99, 132, 1)'
    },
    {
      label: 'Data A',
      data: [10,63,41,37,52,23,76,62,44,38,26,31],
      backgroundColor: 'rgba(53, 162, 235, 1)'
    },
    {
      label: 'Data A',
      data: [24,35,41,57,62,53,46,32,24,18,26,31],
      backgroundColor: 'rgba(255, 206, 86, 1)'
    }
  ]
}
export default function Home() {
  return (
    <>
      <main className='p-2'>
        <div className='flex flex-wrap'>
          <div className='w-full sm:w-1/2 md:w-1/4'>
            <CardDashboard title="Order" value="1,235" icon="FiArchive"/>
          </div>
          <div className='w-full sm:w-1/2 md:w-1/4'>
            <CardDashboard title="Revenue" value="$35,723" icon="FiInbox" iconC='success'/>
          </div>
          <div className='w-full sm:w-1/2 md:w-1/4'>
            <CardDashboard title="Average Price" value="$16.2" icon="FiLifeBuoy" iconC="warning"/>
          </div>
          <div className='w-full sm:w-1/2 md:w-1/4'>
            <CardDashboard title="Earning" value="$34,252" iconfa="FaWallet" iconC="danger"/>
          </div>
          <div className='w-full md:w-1/2'>
            <div className='p-2'>
              <Card className='p-4 h-96'>
                <Bar data={data} options={options}></Bar>
              </Card>
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            <div className='p-2'>
              <Card className='p-4 h-96'>
                <Line data={data} options={options2}></Line>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
Home.layout = Admin
