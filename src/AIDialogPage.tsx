import React from 'react';
import { 
  Box,
  Typography,
  TextField,
  IconButton,
  Divider,
  Button
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function AIDialogPage() {
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
      {/* Top Bar */}
      <Box sx={{
        position: 'absolute',
        width: '1920px',
        height: '96px',
        left: '0px',
        top: '0px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.1)'
      }}>
        <Box sx={{
          display: 'flex',
          width: '1600px',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 32px'
        }}>
          <Typography sx={{
            fontFamily: 'Roboto',
            fontWeight: 500,
            fontSize: '50px',
            lineHeight: '90%',
            letterSpacing: '-2.405px',
            color: '#333333'
          }}>
            VibeGo
          </Typography>

          <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Button sx={{ 
              minWidth: '25px',
              color: '#1976D2',
              fontSize: '28px',
              lineHeight: '90%'
            }}>
              ru
            </Button>
            <Button sx={{ 
              minWidth: '31px',
              color: '#333333',
              fontSize: '28px',
              lineHeight: '90%'
            }}>
              en
            </Button>
            <IconButton onClick={() => setDarkMode(!darkMode)} sx={{
              width: '36px',
              height: '36px',
              border: darkMode ? 'none' : '1px solid #1976D2',
              backgroundColor: darkMode ? '#1976D2' : 'transparent',
              borderRadius: '50%'
            }}>
              {darkMode ? 
                <Brightness7Icon sx={{ color: '#FFFFFF', fontSize: '24px' }} /> : 
                <Brightness4Icon sx={{ color: '#1976D2', fontSize: '24px' }} />
              }
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Divider */}
      <Divider sx={{
        position: 'absolute',
        width: '1920px',
        height: '1px',
        left: '0px',
        top: '73px',
        backgroundColor: 'rgba(0, 0, 0, 0.12)'
      }} />

      {/* Decorative Line */}
      <Box sx={{
        position: 'absolute',
        width: '661.99px',
        height: '10px',
        left: '188.47px',
        top: '309.53px',
        backgroundColor: '#1976D2'
      }} />

      {/* Main Title */}
      <Typography sx={{
        position: 'absolute',
        width: '910px',
        height: '188px',
        left: '192px',
        top: '136.53px',
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
        width: '1432.48px',
        height: '75px',
        right: '295.52px',
        top: '359.53px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '28px',
        lineHeight: '90%',
        color: '#7B7B7B' // Основной цвет текста
      }}>
        <Box component="span" sx={{ color: '#1976D2' }}>Путешествуй по внутреннему вайбу.</Box> Не знаешь, куда поехать? Зато знаешь, как себя чувствуешь. Вот и отлично. VibeGo — сервис, который помогает находить места, исходя из того, какой ты сегодня, а не только из бюджета или дат.
      </Typography>

      {/* Chat Container */}
      <Box sx={{
        position: 'absolute',
        width: '1530.01px',
        height: '517.14px',
        left: '192px',
        top: '469.53px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #7B7B7B',
        borderRadius: '30px',
        padding: '30px',
        boxSizing: 'border-box'
      }}>
        {/* VibeGo Message */}
        <Box sx={{
          display: 'flex',
          alignItems: 'flex-start',
          mb: '40px',
          width: '1101.54px'
        }}>
          {/* Avatar */}
          <Box sx={{
            width: '35px',
            height: '35px',
            backgroundColor: '#f5f5f5',
            border: '0.5px solid #7B7B7B',
            borderRadius: '50%',
            marginRight: '10px',
            flexShrink: 0,
            backgroundImage: 'url(27603f15-d1e1-4275-84fe-d54ea99b2134.jpg)',
            backgroundSize: 'cover'
          }} />

          <Box>
            <Typography sx={{
              fontFamily: 'Roboto',
              fontWeight: 400,
              fontSize: '23px',
              lineHeight: '90%',
              letterSpacing: '-1px',
              color: '#333333',
              mb: '10px'
            }}>
              VibeGo
            </Typography>
            <Typography sx={{
              fontFamily: 'Roboto',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '100%',
              letterSpacing: '-1px',
              color: '#333333',
              width: '1051.54px'
            }}>
              Приветики! Я — VibeGo. Помогаю планировать путешествия по настроению, интересам и стилю. Просто напиши, чего ты хочешь и какой у тебя бюджет. Остальное сделаю я.
            </Typography>
          </Box>
        </Box>

        {/* User Message */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mb: '40px'
        }}>
          <Box sx={{
            width: '786px',
            backgroundColor: '#EFEFEF',
            borderRadius: '10px',
            padding: '21px 30px'
          }}>
            <Typography sx={{
              fontFamily: 'Roboto',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '100%',
              letterSpacing: '-1px',
              color: '#333333'
            }}>
              Я чувствую себя немного потерянным, хочется уехать куда-то, где можно перезагрузиться, вдохновиться. Нужна природа, красота, но и немного комфорта — не палатки. Хочу тишины, но не полной изоляции. По деньгам — максимум 1200 евро на 7–8 дней, желательно в августе. Хочется, чтобы было ощущение «в другой жизни».
            </Typography>
          </Box>
        </Box>

        {/* Input Field */}
        {/* Input Field */}
<Box sx={{
  position: 'absolute',
  width: 'calc(100% - 60px)', // 30px padding с каждой стороны
  height: '79.38px',
  left: '30px',
  bottom: '30px',
  backgroundColor: '#EFEFEF',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',
  boxSizing: 'border-box', // Важно для корректного расчета размеров
  border: '1px solid #7B7B7B' // Граница как в макете
}}>
  <TextField
    fullWidth
    placeholder="Напишите что-нибудь..."
    variant="standard"
    InputProps={{
      disableUnderline: true,
      style: {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: '90%',
        letterSpacing: '-1px',
        color: '#C2C2C2',
        padding: '0',
        margin: '0'
      }
    }}
    sx={{
      '& .MuiInputBase-root': {
        padding: '0',
        height: '100%',
        display: 'flex',
        alignItems: 'center'
      },
      '& .MuiInputBase-input': {
        padding: '0',
        margin: '0'
      }
    }}
  />
  
  <IconButton sx={{
    width: '33.52px',
    height: '33.52px',
    backgroundColor: '#1976D2',
    borderRadius: '50%',
    marginLeft: '10px',
    flexShrink: 0 // Предотвращает сжатие иконки
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