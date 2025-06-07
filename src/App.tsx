import React from 'react';
import { 
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
  Container
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SendIcon from '@mui/icons-material/Send';

export default function VibeGoPage() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <Box sx={{
      position: 'relative',
      width: '1920px',
      height: '1066.67px',
      backgroundColor: '#FFFFFF',
      overflow: 'hidden',
      fontFamily: "'Roboto', sans-serif"
    }}>
      {/* Topbar */}
      <Box sx={{
        position: 'absolute',
        width: '1920px',
        height: '96px',
        left: '0px',
        top: '0px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Container sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '10.6667px 32px',
          gap: '21.33px',
          width: '1600px',
          height: '96px'
        }}>
          <Typography variant="h4" sx={{
            width: '168.4px',
            height: '74.67px',
            fontWeight: 500,
            fontSize: '50px',
            lineHeight: '90%',
            letterSpacing: '-2.40564px',
            color: '#333333'
          }}>
            VibeGo
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          
          <Typography sx={{
            width: '25px',
            height: '25px',
            fontSize: '28px',
            lineHeight: '90%',
            color: '#1976D2'
          }}>
            ru
          </Typography>
          
          <Typography sx={{
            width: '31px',
            height: '25px',
            fontSize: '28px',
            lineHeight: '90%',
            color: '#333333'
          }}>
            en
          </Typography>
          
          <IconButton 
            onClick={() => setDarkMode(!darkMode)} 
            sx={{
              width: '36.52px',
              height: '36.52px',
              border: darkMode ? 'none' : '1px solid #1976D2',
              backgroundColor: darkMode ? '#1976D2' : '#FFFFFF',
              borderRadius: '35.8704px'
            }}
          >
            {darkMode ? 
              <Brightness7Icon sx={{ color: '#FFFFFF' }} /> : 
              <Brightness4Icon sx={{ color: '#1976D2' }} />
            }
          </IconButton>
        </Container>
      </Box>
      
      <Divider sx={{
        position: 'absolute',
        width: '1920px',
        height: '1px',
        left: '0px',
        top: '73px'
      }} />
      
      {/* Background Image */}
      <Box sx={{
        position: 'absolute',
        width: '962.18px',
        height: '962.18px',
        left: '9.82px',
        top: '104.49px',
        backgroundColor: '#f5f5f5',
        backgroundImage: 'url(src/4c52628d1439fe1419f8395b83e84ef7b1f90cab.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
      
      {/* Decorative Lines */}
      <Box sx={{
        position: 'absolute',
        width: '376.34px',
        height: '10px',
        left: '966.71px',
        top: '182px',
        backgroundColor: '#1976D2'
      }} />
      
      <Box sx={{
        position: 'absolute',
        width: '510.06px',
        height: '10px',
        left: '966.71px',
        top: '276px',
        backgroundColor: '#1976D2'
      }} />
      
      <Box sx={{
        position: 'absolute',
        width: '661.99px',
        height: '10px',
        left: '966.71px',
        top: '370px',
        backgroundColor: '#1976D2'
      }} />
      
      {/* Main Title */}
      <Typography sx={{
        position: 'absolute',
        width: '756px',
        height: '282px',
        left: '972px',
        top: '103px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '94px',
        lineHeight: '100%',
        letterSpacing: '-5px',
        textTransform: 'uppercase',
        color: '#333333'
      }}>
        ВАЙБУЙ. ПЛАНИРУЙ. ПУТЕШЕСТВУЙ.
      </Typography>
      
      {/* Subtitle */}
      <Typography sx={{
        position: 'absolute',
        width: '669.24px',
        height: '125px',
        right: '278.76px',
        top: '420px',
        fontFamily: 'Roboto, sans-serif',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '28px',
        lineHeight: '90%',
        color: '#7B7B7B'
      }}>
        <Box component="span" sx={{ color: '#1976D2' }}>Путешествуй по внутреннему вайбу.</Box> Не знаешь, куда поехать? Зато знаешь, как себя чувствуешь. Вот и отлично. VibeGo — сервис, который помогает находить места, исходя из того, какой ты сегодня, а не только из бюджета или дат.
      </Typography>
      
      {/* Chat Box */}
      <Box sx={{
        position: 'absolute',
        width: '756px',
        height: '283.07px',
        left: '972px',
        top: '683.6px',
        background: '#FFFFFF',
        border: '1px solid #7B7B7B',
        borderRadius: '30px'
      }}>
        {/* Avatar */}
        <Box sx={{
          position: 'absolute',
          width: '35px',
          height: '35px',
          left: '30px',
          top: '30px',
          backgroundColor: '#f5f5f5',
          border: '0.5px solid #7B7B7B',
          borderRadius: '50%',
          backgroundImage: 'url(src/5999fa46933670ed2fec850cd9549f9f524acacd.jpg)',
          backgroundSize: 'cover'
        }} />
        
        <Typography sx={{
          position: 'absolute',
          width: '70px',
          height: '35px',
          left: '75px',
          top: '30px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '23px',
          lineHeight: '90%',
          letterSpacing: '-1px',
          color: '#333333'
        }}>
          VibeGo
        </Typography>
        
        <Typography sx={{
          position: 'absolute',
          width: '624.91px',
          height: '80px',
          left: '30px',
          top: '71px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '20px',
          lineHeight: '100%',
          letterSpacing: '-1px',
          color: '#333333'
        }}>
          Приветики! Я — VibeGo. Помогаю планировать путешествия по настроению, интересам и стилю. Просто напиши, чего ты хочешь и какой у тебя бюджет. Остальное сделаю я.
        </Typography>
        
        {/* Input Field */}
        <Box sx={{
          position: 'absolute',
          width: 'calc(100% - 60px)',
          height: '79.38px',
          left: '30px',
          top: '173.69px',
          backgroundColor: '#EFEFEF',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          boxSizing: 'border-box',
          border: '1px solid #7B7B7B'
        }}>
          <TextField
            fullWidth
            placeholder="Напишите что-нибудь..."
            variant="standard"
            InputProps={{
              disableUnderline: true,
              style: {
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '90%',
                letterSpacing: '-1px',
                color: '#C2C2C2',
                padding: '0'
              }
            }}
            sx={{
              '& .MuiInputBase-input': {
                padding: '0'
              }
            }}
          />
          
          <IconButton sx={{
            width: '33.52px',
            height: '33.52px',
            backgroundColor: '#1976D2',
            borderRadius: '50%',
            marginLeft: '10px',
            flexShrink: 0
          }}>
            <SendIcon sx={{ 
              color: '#FFFFFF',
              transform: 'rotate(-45deg)',
              fontSize: '14.17px'
            }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}