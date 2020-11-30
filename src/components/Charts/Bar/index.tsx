import React from 'react';
import { Chart } from 'react-google-charts';
import Loader from '../../Loader';

interface Props {
  data: Array<[any, number]>;
  identifiers: [string, string];
}

const BarChart: React.FC<Props> = ({ data, identifiers }) => {
  data.sort((first, second) => second[1] - first[1]);

  return (
    <Chart
      width={'100%'}
      height={'100%'}
      chartType="Bar"
      loader={<Loader />}
      data={[identifiers, ...data]}
      options={{
        fontName: 'Nunito, sans-serif',
        bars: 'horizontal',
        legend: { position: 'none' },
        axes: {
          x: {
            0: { side: 'bottom', label: 'Probabilidade' },
          },
        },
      }}
    />
  );
};

export default BarChart;
