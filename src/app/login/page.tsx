'use client';

import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from 'react';

export default function LoginPage() {
  const RIGHT_PANEL_WIDTH = 575;

  // --- state for form ---
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });

  // --- submit handler ---
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let hasError = false;
    const newErrors = { username: '', password: '' };

    if (!username.trim()) {
      newErrors.username = 'กรุณากรอกชื่อบัญชี';
      hasError = true;
    }
    if (!password.trim()) {
      newErrors.password = 'กรุณากรอกรหัสผ่าน';
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;

    // TODO: handle login logic here
    console.log('login attempt', { username, password });
  }

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* LEFT GRAPHICS PANEL (fills the rest of the screen until right panel) */}
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          marginRight: `${RIGHT_PANEL_WIDTH}px`,
          padding: '6rem',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            src="/pics/loginArt.png"
            alt="Login Art"
            fill
            style={{
              objectFit: 'contain',
              objectPosition: 'center',
            }}
            priority
          />
        </Box>
      </Box>

      {/* RIGHT FIXED LOGIN PANEL */}
      <Box
        className="Background/bg-default"
        sx={{
          position: 'fixed',
          display: 'flex',
          flexDirection: 'column',
          top: 0,
          right: 0,
          width: `${RIGHT_PANEL_WIDTH}px`,
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* LOGIN TEXT */}
          <Box sx={{ mb: '2rem', textAlign: 'left', width: '100%', maxWidth: '360px', }}>
            <Typography
            // className={prompt.variable}
              variant="h5"
              sx={{
                fontWeight: 600,
                color: 'white',
                fontFamily: 'var(--font-prompt)',
              }}
            >
              เข้าสู่ระบบ
            </Typography>

            <Typography
              sx={{
                mt: '0.5rem',
                fontSize: '0.95rem',
                lineHeight: 1.5,
                color: 'var(--color-disable)',
                fontFamily: 'var(--font-prompt)',
              }}
            >
              เข้าสู่ระบบด้วยชื่อบัญชี และรหัสผ่าน
            </Typography>
          </Box>
          {/* LOGIN FORM */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate  
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              maxWidth: '360px',
              width: '100%',
            }}
          >
            <TextField
              label="ชื่อบัญชี"
              variant="outlined"
              required
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={Boolean(errors.username)}
              helperText={errors.username}
              InputLabelProps={{
                sx: { color: 'var(--color-green)' , fontFamily: 'var(--font-prompt)'},
              }}
              InputProps={{
                sx: {
                  color: 'var(--color-green)',
                  backgroundColor: 'rgba(255,255,255,0.07)',
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  '& fieldset': {
                    borderColor: errors.username ? 'red' : 'var(--color-white)',
                  },
                  '&:hover fieldset': {
                    borderColor: errors.username ? 'red' : 'var(--color-green)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: errors.username ? 'red' : 'var(--color-green)',
                  },
                },

                '& .MuiInputLabel-root': {
                  color: errors.username ? 'red' : 'var(--color-green)',
                  '&.Mui-focused': {
                    color: errors.username ? 'red' : 'var(--color-green)',
                  },
                },
              }}
            />

            <TextField
              label="รหัสผ่าน"
              type="password"
              variant="outlined"
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={Boolean(errors.password)}
              helperText={errors.password}
              InputLabelProps={{
                sx: { color: 'var(--color-green)' , fontFamily: 'var(--font-prompt)'},
              }}
              InputProps={{
                sx: {
                  color: 'var(--color-green)',
                  backgroundColor: 'rgba(255,255,255,0.07)',
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  '& fieldset': {
                    borderColor: errors.password ? 'red' : 'var(--color-white)',
                  },
                  '&:hover fieldset': {
                    borderColor: errors.password ? 'red' : 'var(--color-green)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: errors.password ? 'red' : 'var(--color-green)',
                  },
                },

                '& .MuiInputLabel-root': {
                  color: errors.password ? 'red' : 'var(--color-green)',
                  '&.Mui-focused': {
                    color: errors.password ? 'red' : 'var(--color-green)',
                  },
                },
              }}
            />

            <Button
              type='submit'
              variant="contained"
              fullWidth
              sx={{
                mt: '0.5rem',
                fontFamily: 'var(--font-prompt)',
                fontWeight: 500,
                borderRadius: '8px',
              }}
            >
              เข้าสู่ระบบ
            </Button>
          </Box>
      </Box>
    </Box>
  );
}
