import { useEffect, useState } from "react";
import { getReadBooks } from "../../utils";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import PropTypes from "prop-types";
import EmptyState from "../../components/EmptyState/EmptyState";

// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const colors = scaleOrdinal(schemeCategory10).range();

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// const renderLegend = (props) => {
//     const { payload } = props;

//     return (
//         <ul>
//             {
//                 payload.map((entry, index) => (
//                     // <li key={`item-${index}`}>{entry.value}</li>
//                     <li key={`item-${index}`}>{`pages`}</li>
//                 ))
//             }
//         </ul>
//     );
// }

const PagesRead = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const books = getReadBooks();
        const bs = books.map(({ bookName: name, totalPages: pages }) => ({
            name,
            pages
        }));
        // setData(books);
        setData(bs);
    }, []);

    if (data.length < 1) {
        return (
            <EmptyState
                message='Read-list is empty'
                address='/'
                label='Browse Books'
                isPagesReadPage={true}
            />
        )
    }
    return (
        <div className="mt-8 mb-24 p-1 bg-base-200 rounded-2xl flex justify-center items-center">
            <BarChart
                width={1400}
                height={500}
                data={data}
                margin={{
                    top: 10,
                    right: 60,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                {/* <XAxis dataKey="bookName" /> */}
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* <Legend content={<CustomizedLegend external={external} />} /> */}
                {/* <Legend content={renderLegend} /> */}
                <Legend />
                {/* <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar> */}
                <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

TriangleBar.propTypes = {
    fill: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
};

export default PagesRead;