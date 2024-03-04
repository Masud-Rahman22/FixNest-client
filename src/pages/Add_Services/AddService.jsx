import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function AddService() {
    const { handleSubmit, register, reset } = useForm();
    const onSubmit = ({ serviceName, charge, servicePicture, serviceDescription }) => {
        console.log(serviceDescription, serviceName, servicePicture, charge)
        axios.post('https://fix-nest-server-kappa.vercel.app/create', {serviceName, charge, servicePicture, serviceDescription})
        .then(res => 
            console.log(res.data),
            toast.success('service added'),
            reset()
            )
        .catch(err => console.log(err.message))
    }
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    return (
        <Card
            variant="outlined"
            sx={{
                maxHeight: 'max-content',
                maxWidth: '100%',
                mx: '70px',
                my: '50px',
                // to make the demo resizable
                overflow: 'auto',
                resize: 'horizontal',
            }}
        >
            
            <Typography level="title-lg" startDecorator={<InfoOutlined />}>
                Add new service
            </Typography>
            <Divider inset="none" />
            <CardContent
            >
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-6'>
                    <FormControl sx={{ gridColumn: '1/-1' }}>
                        <FormLabel>Service Name</FormLabel>
                        <Input type='text' {...register("serviceName")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Charge</FormLabel>
                        <Input type='number' {...register("charge")} endDecorator={<CreditCardIcon />} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Picture URL</FormLabel>
                        <Input type='text' {...register("servicePicture")} />
                    </FormControl>
                    <FormControl sx={{ gridColumn: '1/-1' }}>
                        <FormLabel>Service Description</FormLabel>
                        <Input {...register("serviceDescription")} type="text" placeholder="Enter some information" />
                    </FormControl>
                    <Checkbox checked={isChecked}
                        onChange={handleCheckboxChange}
                        inputProps={{ 'aria-label': 'primary checkbox' }} label="Save card" sx={{ gridColumn: '1/-1', my: 1 }} />
                    <CardActions sx={{ gridColumn: '1/-1' }}>
                        <Button type="submit"  variant="solid" color="primary" disabled={!isChecked}>
                            Add Service
                        </Button>
                    </CardActions>
                    <Toaster></Toaster>
                </form>
            </CardContent>
        </Card>
    );
}