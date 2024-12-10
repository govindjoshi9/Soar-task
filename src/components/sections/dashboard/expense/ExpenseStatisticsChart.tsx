import { SxProps, useTheme } from '@mui/material';
import ReactEchart from 'components/base/ReactEchart';
import { ExpenseDataType } from 'data/expense-chart';
import { PieSeriesOption } from 'echarts';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { PieChart } from 'echarts/charts';
import {
  GridComponent,
  GridComponentOption,
  LegendComponent,
  TooltipComponentOption,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import 'echarts/lib/component/tooltip';
import { CanvasRenderer } from 'echarts/renderers';
import { useMemo } from 'react';

// Use ComposeOption to compose an Option type that only has required components and charts
export type ECOption = echarts.ComposeOption<
  PieSeriesOption | TooltipComponentOption | GridComponentOption
>;
echarts.use([PieChart, LegendComponent, CanvasRenderer, GridComponent]);

interface ExpenseStatisticsChartProps {
  chartRef: React.MutableRefObject<EChartsReactCore | null>;
  sx?: SxProps;
  seriesData: ExpenseDataType;
}
const ExpenseStatisticsChart = ({ chartRef, ...rest }: ExpenseStatisticsChartProps) => {
  const { seriesData } = rest;
  const theme = useTheme();
  const { palette } = theme;
  const chartOptions: ECOption = useMemo(() => {
    return {
      backgroundColor: palette.common.white, // Background color for chart container
      tooltip: {
        trigger: 'item',
      },
      color: [
        palette.primary.darker,
        palette.grey[900],
        palette.warning.main,
        palette.primary.main,
      ],
      series: [
        {
          name: 'Expense',
          type: 'pie',
          radius: '100%',
          center: ['50%', '50%'],
          avoidLabelOverlap: true,
          data: seriesData,
          label: {
            show: true,
            position: 'inside',
            formatter: '{b}: {d}%',
            fontSize: 10,
            color: palette.common.white,
            fontWeight: 'bold',
          },
          labelLine: {
            show: true,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
  }, [theme, seriesData]);

  return (
    <ReactEchart
      echarts={echarts}
      option={chartOptions}
      ref={chartRef}
      sx={{
        width: '100%',
        height: 100,
      }}
      {...rest}
    />
  );
};

export default ExpenseStatisticsChart;
