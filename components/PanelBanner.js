/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import {
    Grid,
    Paper,
} from '@mui/material'

import axios from 'axios'
import { Image } from 'cloudinary-react'

const PanelBanner = () => {

    const [imageSelected, setImageSelected] = useState('');

    const handleUploadImage = () => {
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "jwmwjxec")

        axios.post(
            "https://api.cloudinary.com/v1_1/dxx3qxsxt/image/upload", formData
        ).then(res => console.log(res))
    }

    const [banner, setBanner] = useState([
        {
            image: ''
        },
    ])
    
    useEffect(() => {
        setBanner([
            {
                image: 'https://cdna.artstation.com/p/assets/images/images/023/753/384/large/dantas-jorge-banner-frete-gratis.jpg?1580238593'
            },
            // {
            //     image: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.kantilalchhotalal.com%2Fjewellery-banner-3%2F&psig=AOvVaw2R6mBaEmgfpXsxUndxsTLC&ust=1648151061431000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPi7tqf_3PYCFQAAAAAdAAAAABAD'
            // }
        ])
    },[])

    return (
        <Grid 
            container
            spacing={3}
            justifyContent="center"
            pb={5}
            pt={5}
            display="flex"
        >
            {banner.map( ({ image }) => image && (
                <Grid 
                    item
                    xs={9} 
                    md={4}
                    sm={7}
                    textAlign="center"
                >
                    <Paper style={{ height: 200  }}>
                        <input 
                            type="file" 
                            onChange={(event) => setImageSelected(event.target.files[0])}
                        />
                        <button onClick={(e) => handleUploadImage(e.target.files)}>Upload Image</button>
                        <Image
                            style={{ width: 200 }}
                            cloudName="jwmwjxec"
                            publicId="https://res.cloudinary.com/dxx3qxsxt/image/upload/v1648407369/srilllswwnujy6gmpwkd.png"
                        />
                    </Paper>
                </Grid>
            ))}

                <Grid 
                    item
                    xs={9} 
                    md={4}
                    sm={4}
                    textAlign="center"
                >
                <Paper style={{ height: 200  }}>
                    {/* <img
                        display="flex"
                        width={500}
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c311eb59940635.5a3516bb49b45.jpg" 
                        alt="banner"
                    /> */}
                    BANNER 2
                </Paper>
            </Grid>

            <Grid 
                item
                xs={9} 
                md={4}
                sm={6}
                textAlign="center"
            >
                <Paper style={{ height: 200  }}>
                    {/* <img
                        display="flex"
                        width={400}
                        src="https://i.pinimg.com/564x/a1/83/7b/a1837bd992681c561de4985a48884f7a.jpg"
                        alt="banner"
                    /> */}
                    BANNER 3
                </Paper>
            </Grid>

            <Grid 
                item
                xs={9} 
                md={12}
                sm={5}
                textAlign="center"
            >
                <Paper style={{ height: 200 }}>
                    {/* <img
                        display="flex"
                        width={400}
                        src="https://i.pinimg.com/564x/a1/83/7b/a1837bd992681c561de4985a48884f7a.jpg"
                        alt="banner"
                    /> */}
                    BANNER 4
                </Paper>
            </Grid>
        
        </Grid>
    )
}

export default PanelBanner