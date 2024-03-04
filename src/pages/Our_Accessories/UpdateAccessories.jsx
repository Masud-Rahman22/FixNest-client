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
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

export default function UpdateAccessories() {
    const { handleSubmit, register, reset } = useForm();
    const onSubmit = ({ itemName, itemType, price, itemPicture, itemDescription }) => {
    
    }
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const id = useParams();
    console.log(id)
    const [data, setData] = useState({})
    let tableName = 'accessories'
    useEffect(() => {
        axios.get(`http://localhost:5000/${tableName}/${id.id}`)
            .then(res => setData(res.data))
            .catch(err => console.error(err))
    }, [id, tableName])
    const item = data[0];
    console.log(item)
    // const {name,type,price,picture,description} = item;
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
                Add new Accessories
            </Typography>
            <Divider inset="none" />
            <CardContent
            >
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-6'>
                    <FormControl sx={{ gridColumn: '1/-1' }}>
                        <FormLabel>Item Name</FormLabel>
                        <Input type='text' {...register("itemName")} value={item.name}/>
                    </FormControl>
                    <FormControl sx={{ gridColumn: '1/-1' }}>
                        <FormLabel>Item type</FormLabel>
                        <Input type='text' {...register("itemType")} value={item.type}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Price</FormLabel>
                        <Input type='number' {...register("price")} endDecorator={<CreditCardIcon />} value={item.price}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Picture URL</FormLabel>
                        <Input type='text' {...register("itemPicture")} value={item.picture}/>
                    </FormControl>
                    <FormControl sx={{ gridColumn: '1/-1' }}>
                        <FormLabel>Item Description</FormLabel>
                        <Input {...register("itemDescription")} type="text" placeholder="Enter some information" value={item.description}/>
                    </FormControl>
                    <Checkbox checked={isChecked}
                        onChange={handleCheckboxChange}
                        inputProps={{ 'aria-label': 'primary checkbox' }} label="Save card" sx={{ gridColumn: '1/-1', my: 1 }} />
                    <CardActions sx={{ gridColumn: '1/-1' }}>
                        <Button type="submit" variant="solid" color="primary" disabled={!isChecked}>
                            Add Item
                        </Button>
                    </CardActions>
                    <Toaster></Toaster>
                </form>
            </CardContent>
        </Card>
    );
}
