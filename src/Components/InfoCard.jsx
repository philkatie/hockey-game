import { Card, CardContent, Typography } from '@mui/material';

const InfoCard = ({ label, value }) => {
  return (
    <Card 
      sx={{ 
        m: 1, 
        minWidth: 120, 
        bgcolor: '#1a1a1a', 
        color: 'white',
        textAlign: 'center',
        boxShadow: 3,
        borderRadius: 2
      }}
    >
      <CardContent sx={{ p: 1.5 }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: 'green' }}>
          {value}
        </Typography>
        <Typography variant="caption" color="gray">
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;