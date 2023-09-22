const StatisticLine = (props) => {
    const { text, value } = props;

    return (
        <table>
            <tbody>
                <tr>
                    <td>{text}</td>
                    <td>{value}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default StatisticLine;
