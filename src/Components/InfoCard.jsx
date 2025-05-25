import { Card, CardContent, Typography, Box } from '@mui/material';

const InfoCard = ({ label, value, correctValue }) => {
  let textColor = 'white';
  let borderColor = '#333'; // default border

  if (correctValue !== undefined) {
    const isCorrect = value === correctValue;
    textColor = isCorrect ? '#4caf50' : '#f44336'; // green/red
    borderColor = isCorrect ? '#4caf50' : '#f44336';
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 1 }}>
      <Card 
        sx={{ 
          minWidth: 120, 
          bgcolor: '#1a1a1a',
          color: 'white',
          textAlign: 'center',
          boxShadow: 3,
          borderRadius: 2,
          border: `2px solid ${borderColor}`,
        }}
      >
        <CardContent sx={{ p: 1.5 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', color: textColor }}
          >
            {value}
          </Typography>
        </CardContent>
      </Card>
      <Typography variant="caption" color="gray" sx={{ mt: 0.5 }}>
        {label}
      </Typography>
    </Box>
  );
};

export default InfoCard;