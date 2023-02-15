import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CustomMap from "../CustomMap/CustomMap";

export default function MediaCard() {
    return (
        <Card sx={{maxWidth: 1400, marginTop: 5, marginLeft: 25}}>
            <CustomMap/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    About us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    We are Elliot and Maxime, two french developers. We created Stellar in order to improve ourselves
                    and
                    share with the world you these beautiful pictures. We hope you will enjoy our work!
                </Typography>
            </CardContent>
        </Card>
    );
}