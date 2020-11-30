import React from 'react';
import { Chart } from 'react-google-charts';
import Loader from '../../Loader';

interface Props {
  data: Array<[any, number]>;
  identifiers: [string, string];
}

const Pie: React.FC<Props> = ({ data, identifiers }) => {
  data.sort((first, second) => second[1] - first[1]);

  return (
    <Chart
      width={'100%'}
      height={'100%'}
      chartType="PieChart"
      loader={<Loader />}
      data={[identifiers, ...data]}
      options={{
        fontName: 'Nunito, sans-serif',
        legend: {
          position: 'top',
          alignment: 'center',
          maxLines: 4,
          textStyle: {
            color: '#222',
            fontSize: 14,
          },
        },
        tooltip: {
          text: 'percentage',
          showColorCode: true,
          textStyle: {
            color: '#222',
            fontSize: 16,
          },
        },
        pieSliceTextStyle: {
          color: 'white',
        },
        // sliceVisibilityThreshold: 10 / 360,
        // pieResidueSliceLabel: 'Outros',
        is3D: true,
        chartArea: {
          left: 0,
          top: '20%',
          width: '100%',
          height: '80%',
        },
        fontSize: 14,
      }}
    />
  );
};

export default Pie;
