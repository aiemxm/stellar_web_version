import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./MediaCard.css";

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      {props.media}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.job}
          <a>{props.github}</a>
        </Typography>
      </CardContent>
    </Card>
  );
}
