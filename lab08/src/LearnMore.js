const LearnMore = () => {
    return (
        <div className="learn-more">
            <h2>Types of Swims</h2>
            <p>
                <h6>Lane Swims:</h6> The 50m pool is split into 10 lanes (each 2.5 m) with a maximum 4 people per lane. Lane Swims are best for atheletes training strokes. <br /><br />
                <h6>Leisure Swim:</h6> The 50m is split into two 25m pools with a maximum of 25 people per pool (50 total). Leisure Swims are best for water activities and non-lap training.
            </p>
            <h2>Costs</h2>
            <table>
                <tr>
                    <th>Age</th>
                    <th>Price ($)</th>
                </tr>
                <tr>
                    <td>18 and younger</td>
                    <td>5.00</td>
                </tr>
                <tr>
                    <td>19 to 64</td>
                    <td>7.50</td>
                </tr>
                <tr>
                    <td>65 and older</td>
                    <td>4.50</td>
                </tr>
            </table><br />
            <h2>Pool Specifications</h2>
            <p>
                613 Pools meets the Federation Inernationale de Natation regulations and can be used to host Olympic events.
                <br /><br /><strong>Measurements:</strong>
                <br />length: 50 metres (164 ft)
                <br />width: 25 metres (82 ft)
                <br />depth: 6 metres (6 ft)
                <br />lane width: 2.5 metres
            </p>
            <h2>Courses</h2>
            <p>
                <h6>613 Pools offers a the standard swimming courses and lifesaving courses.</h6><br />
                Red Cross swim kids courses are offered please refer <a href="https://join.ottawa.ca/swimming/" target="_blank">here</a> for more information.<br /><br />
                Lifesaving Society courses are offered at 613 Pools, complete the courses and come join us! Follow the sequence <a href="https://www.lifesavingsociety.com/find-a-course.aspx" target="_blank:">here</a>
            </p>
        </div>
    );
}
 
export default LearnMore;