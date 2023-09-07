import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import CommentIcon from "@mui/icons-material/Comment";
import AttachmentIcon from "@mui/icons-material/Attachment";




export const DetailCard = ({temporaryHideMedia}) => {
  if(temporaryHideMedia){
    return (
        <Card sx={{
          cursor: "pointer",
          boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
          overflow: 'unset'
        }}>
          <CardContent sx={{
            p: 1.5,
            '&:last-child': { p: 1.5 }
          }}>
            <Typography>
              HuynhVi dev
            </Typography>
          </CardContent>
          
        </Card>
    )
  }
    return(
        <Card sx={{
          cursor: "pointer",
          boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
          overflow: 'unset'
        }}>
          <CardMedia
              sx={{ height: 140 }}
              image="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/369661221_3826208637606750_4850669531660191376_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=52f669&_nc_ohc=JUlJE5tmv6AAX9DKN3h&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfBTodeLh1Y_mcOhEp2oMlPs-IdB5ZYZUqPiO5FZh4tFfA&oe=64FCAAF5"
              title="Card Image"
          />
          <CardContent sx={{
            p: 1.5,
            '&:last-child': { p: 1.5 }
          }}>
            <Typography>
              HuynhVi dev
            </Typography>
          </CardContent>
          <CardActions sx={{ p: '0 4px 8px 4px' }}>
            <Button size="small" startIcon={<GroupIcon/>}>20</Button>
            <Button size="small" startIcon={<CommentIcon/>}>10</Button>
            <Button size="small" startIcon={<AttachmentIcon/>}>30</Button>
          </CardActions>
        </Card>
    )
}