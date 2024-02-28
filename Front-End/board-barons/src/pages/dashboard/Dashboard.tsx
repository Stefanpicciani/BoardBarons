import { Box, Typography } from "@mui/material";
import TemplateDefault from "../../components/templates/TemplateDedault";

const Dashboard = () => {

    return(
    <TemplateDefault>
        <Box  sx={{ backgroundColor: "#161616" , py: 10}} display={'flex'} justifyContent={'center'}>
            <Box maxWidth={'md'}>
                <Typography component={'h1'} variant="h3" 
                    style={{ color: "#00ff68" , margin: 0}}
                >
                    GROUPS
                </Typography>
                <Typography 
                    sx={{ color: "#ffffff" , px: 10, mt: 4}}
                >
                    I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
                </Typography>
            </Box>          
        </Box>
        <Box>       
                <Box>
                    <Typography color={"#ffffff"}>
                        Groups Feed
                    </Typography>
                </Box>
                <Box display={"flex"} justifyContent={"center"}>
                    <Box sx={{ backgroundColor: "#ffffff" , mx : 1 }} >
                        <h5>Box1</h5>
                    </Box>
                    <Box sx={{ backgroundColor: "#ffffff", mx:1 }}>
                        <h5>Box 2</h5>
                    </Box>
                </Box>               
           
        </Box>
    </TemplateDefault>
    );
};

export default Dashboard;