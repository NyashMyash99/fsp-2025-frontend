  import Card from '@mui/material/Card';
  import CardContent from '@mui/material/CardContent';
  import { Button, Stack, TextField, Box } from '@mui/material';

  export function RegistrationForm() {
    return (
      <Box
        sx={{
          minHeight: '100vh', // Занимаем всю высоту экрана
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Центрируем по вертикали
          alignItems: 'center', // Центрируем по горизонтали
          py: 8, // Отступ сверху и снизу (можно увеличить по необходимости)
          boxSizing: 'border-box',
        }}
      >
        <Card 
          variant="outlined" 
          sx={{ 
            width: '80%', 
            maxWidth: '800px', // Ограничиваем максимальную ширину
            margin: 'auto',
          }}
        >
          <CardContent
            sx={{ 
              padding: { xs: '20px', md: '30px' }, // Адаптивные отступы
              paddingLeft: { xs: '20px', md: '40px' },
              paddingRight: { xs: '20px', md: '40px' },
            }}
          >
            <Stack spacing={2}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'flex-start', // Выравниваем по верхнему краю
                gap: 2,
              }}>
                <Box sx={{ 
                  width: '100%', 
                  flexGrow: 1,
                }}>
                  <TextField 
                    fullWidth 
                    label="Опишите ваше путешествие" 
                    multiline
                    minRows={1}
                    maxRows={10}
                    variant="outlined"
                    sx={{
                      '& .MuiInputBase-root': {
                        alignItems: 'flex-start',
                      },
                      '& textarea': {
                        resize: 'vertical', // Позволяет пользователю изменять размер
                      }
                    }}
                  />
                </Box>
                <Button 
                  variant="contained" 
                  size="large"
                  sx={{
                    whiteSpace: 'nowrap',
                    height: '56px', // Высота соответствует полю ввода
                    alignSelf: 'center', // Выравниваем кнопку по центру
                  }}
                >
                  GO ;)
                </Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    );
  }