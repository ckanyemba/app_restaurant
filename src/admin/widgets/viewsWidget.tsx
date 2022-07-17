import { useTheme, Box, Card, CardContent } from "@mui/material";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
const data = [
  {
    name: "Jan",
    fb: 2.5,
  },
  {
    name: "Feb",
    fb: 1.4,
  },
  {
    name: "Mar",
    fb: 6,
  },
  {
    name: "Avr",
    fb: 4,
  },
];
const views = "6.967.431";
const ViewsWidget = () => {
  const theme = useTheme();

  return (
    <Card>
      <CardContent>
        <Box sx={{ height: 224 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis
                axisLine={false}
                dataKey="name"
                interval="preserveStartEnd"
                tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  boxShadow: theme.shadows[3],
                  backgroundColor: theme.palette.background.paper,
                  borderColor: theme.palette.background.paper,
                }}
              />
              <Area
                type="monotone"
                dataKey="fb"
                fill={theme.palette.primary.main}
                fillOpacity={0.3}
                stroke={theme.palette.primary.main}
                strokeWidth={6}
                activeDot={{ r: 8 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ViewsWidget;
