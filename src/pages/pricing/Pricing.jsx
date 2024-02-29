import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Lottie from 'lottie-react';
import animation from '../../../public/assets/pricing/Animation - 1709236587546.json'
export default function Pricing() {
    return (
        <div>
            <h1 className="font-inter font-extrabold text-4xl text-center mt-10">Pricing</h1>
        <div className='flex items-center justify-center mx-10 my-20'>
            <Box
            sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
                gap: 3,
                
            }}
        >
            <Card sx={{bgcolor: 'neutral.900'}} size="lg" variant="outlined">
                <Chip size="sm" variant="outlined" color="neutral">
                    BASIC
                </Chip>
                <Typography textColor='neutral.50' level="h2">Basic Repair Package</Typography>
                <Divider inset="none" />
                <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
                    <ListItem sx={{color: 'neutral.50'}}>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Screen or Battery Replacement
                    </ListItem>
                    <ListItem sx={{color: 'neutral.50'}}>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Diagnostic Check
                    </ListItem>
                    <ListItem sx={{color: 'neutral.50'}}>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        30-Day Warranty
                    </ListItem>
                    <ListItem sx={{color: 'neutral.50'}}>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Basic Support
                    </ListItem>
                </List>
                <Divider inset="none" />
                <CardActions>
                    <Typography textColor="neutral.50" level="title-lg" sx={{ mr: 'auto' }}>
                    $49.99{' '}
                        <Typography fontSize="sm" textColor="text.tertiary">
                            / month
                        </Typography>
                    </Typography>
                    <Button
                        variant="soft"
                        color="neutral"
                        endDecorator={<KeyboardArrowRight />}
                    >
                        Start now
                    </Button>
                </CardActions>
            </Card>
            <Card
                size="lg"
                variant="solid"
                color="neutral"
                invertedColors
                sx={{ bgcolor: 'focusVisible' }}
            >
                <Chip size="sm" variant="outlined">
                Plus
                </Chip>
                <Typography level="h2">Plus Repair Package</Typography>
                <Divider inset="none" />
                <List
                    size="sm"
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        mx: 'calc(-1 * var(--ListItem-paddingX))',
                    }}
                >
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Screen or Battery Replacement
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Diagnostic Check
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Camera Repair
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        60-Day Warranty
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Free Screen Protector
                    </ListItem>
                </List>
                <Divider inset="none" />
                <CardActions>
                    <Typography level="title-lg" sx={{ mr: 'auto' }}>
                    $89.99{' '}
                        <Typography fontSize="sm" textColor="text.tertiary">
                            / month
                        </Typography>
                    </Typography>
                    <Button endDecorator={<KeyboardArrowRight />}>Start now</Button>
                </CardActions>
            </Card>
            <Card
                size="lg"
                variant="solid"
                color="neutral"
                invertedColors
                sx={{ bgcolor: 'primary.700' }}
            >
                <Chip size="sm" variant="outlined">
                    PRO
                </Chip>
                <Typography level="h2">Pro Repair Package</Typography>
                <Divider inset="none" />
                <List
                    size="sm"
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        mx: 'calc(-1 * var(--ListItem-paddingX))',
                    }}
                >
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Screen and Battery Replacement
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Diagnostic Check
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Camera and Water Damage Repair
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Priority Service
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Priority Service
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        90-Day Warranty
                    </ListItem>
                </List>
                <Divider inset="none" />
                <CardActions>
                    <Typography level="title-lg" sx={{ mr: 'auto' }}>
                    $129.99{' '}
                        <Typography fontSize="sm" textColor="text.tertiary">
                            / month
                        </Typography>
                    </Typography>
                    <Button endDecorator={<KeyboardArrowRight />}>Start now</Button>
                </CardActions>
            </Card>
        </Box>
        <div>
            <Lottie animationData={animation}></Lottie>
        </div>
        </div>
        </div>
            
    );
}