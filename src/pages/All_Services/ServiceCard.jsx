import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

// eslint-disable-next-line react/prop-types
export default function ServiceCard({service}) {
    // eslint-disable-next-line react/prop-types
    const {charge,description,name,picture,time} = service;
    return (
        <Card variant="outlined" sx={{ width: 320 }}>
            <CardOverflow>
                <AspectRatio ratio="2">
                    <img
                        // eslint-disable-next-line react/prop-types
                        src=''
                        srcSet={picture}
                        loading="lazy"
                        alt=""
                    />
                </AspectRatio>
            </CardOverflow>
            <CardContent>
                <Typography sx={{my: '5px'}} level="title-md">{name}</Typography>
                <Typography level="body-sm">{description}</Typography>
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                    <Typography level="body-xs" fontWeight="md" textColor="text.primary">
                        <p className='text-blue-400 font-inter'>${charge}</p>
                    </Typography>
                    <Divider orientation="vertical" />
                    <Typography level="body-xs" fontWeight="md" textColor="text.primary">
                        <p className='font-extrabold'>{time}</p>
                    </Typography>
                </CardContent>
            </CardOverflow>
        </Card>
    );
}